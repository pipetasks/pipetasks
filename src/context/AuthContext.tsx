import React, { createContext, ReactNode, useEffect } from "react";
// Router
import Router, { useRouter } from "next/router";

// Cookies
import { parseCookies, setCookie, destroyCookie } from "nookies";

// Types
import type { IUser } from "../interface/user";

// Api
import { tokenRequest } from "../pages/api/user/token";
import { userAuthentication } from "../pages/api/user/authentication";

// Redux Store
import { store } from "../redux/store";
import { setUser } from "../redux/slices/user/userSlice";
import { withAuth } from "../helper/withAuth";

type signInType = {
   email: string;
   password: string;
}

type AuthContextType = {
   isAuthenticated: boolean;
   signIn: (data: signInType) => Promise<void>;
};

export const AuthenticationContext = createContext({} as AuthContextType)

type Props = {
   children: ReactNode
};

const authProvider = ({ children }: Props) => {   
   const [ isAuthenticated, setIsAuthenticated ] = React.useState<boolean>(false);

   useEffect(() => {
      const { token } = parseCookies();

      const autoLogin = async () => {
         try {
            setIsAuthenticated(true)
            const response = await userAuthentication(token);
            if (!response?.data) throw new Error("Um errou aconteceu")
            store.dispatch(setUser(response.data)) 
         } catch (err) {
            destroyCookie(null, "token")
         }
      }
      autoLogin();
   }, [])

   const signIn = async ({ email, password }: signInType) => {
      const token = await tokenRequest({ email, password });

      if (token) {
         const response = await userAuthentication(token);
         if (response?.data) {
            store.dispatch(setUser(response.data))
            setCookie(null, "token", token, {
               maxAge: 60 * 60 * 1, // Ten Hours
               path: "/"
            })
            Router.push("/dashboard")
         }
      }
   }
   
   return (
      <AuthenticationContext.Provider value={{ isAuthenticated, signIn }}>
         {children}
      </AuthenticationContext.Provider>
   )
}
export default authProvider;