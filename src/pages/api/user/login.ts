import type { IUser } from "../../../interface/user";

type userLoginType = (token: string) => Promise<{
   data?: IUser;
   error: boolean;
   message?: string;
}>

type ResponseType = { 
   data: IUser
   errors?: string
};

const userLogin: userLoginType = async (token: string) => {
   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login`, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      const data: ResponseType = await response.json();
      if (response.status !== 200 && "errors" in data) {
         throw new Error("Sessão expirada")
      } 
      return { error: false, data: data.data} as { error: boolean, data: IUser }

   } catch (err) {
      const Error = err as Error
      return { error: true, message: Error.message }
   }
};

export { userLogin };