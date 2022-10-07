// Next
import { GetServerSidePropsContext, PreviewData } from "next";

// Nookies
import { destroyCookie, parseCookies } from "nookies";

// Types
import type { ParsedUrlQuery } from "querystring";

// Api
import { validateToken } from "../pages/api/jwt/validate";

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

      const user = await validateToken(token)
      if (user.error) {
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