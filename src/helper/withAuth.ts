// Next
import { GetServerSidePropsContext, PreviewData } from "next";

// Nookies
import { destroyCookie, parseCookies } from "nookies";

// Types
import type { ParsedUrlQuery } from "querystring";

// Api
import { userLogin } from "../pages/api/user/login"

type ServerContext = GetServerSidePropsContext<ParsedUrlQuery, PreviewData>

export function withAuth(gssp: any) {
   return async (context: ServerContext) => {
   const { token } = parseCookies(context);
      if (!token) {
         return {
            redirect: {
               destination: '/entrar'
            }
         };
      }
      const user = await userLogin(token)

      if (!user) {
         destroyCookie(context, "token");
         return {
            redirect: {
                  destination: '/entrar'
            }
         };
      }

      const gsspData = await gssp(context); // Run `getServerSideProps` to get page-specific data
      
      // Pass page-specific props along with user data from `withAuth` to component
      return {
         props: {
            ...gsspData.props,
         }
      };
   }
}