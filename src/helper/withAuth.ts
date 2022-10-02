import { GetServerSideProps, GetServerSidePropsContext, NextPageContext, PreviewData } from "next";
import { destroyCookie, parseCookies } from "nookies"
import { ParsedUrlQuery } from "querystring";
import { userAuthentication } from "../pages/api/user/authentication"

type ServerContext = GetServerSidePropsContext<ParsedUrlQuery, PreviewData>

export function withAuth(gssp: GetServerSideProps) {
   return async (context: ServerContext) => {
   const { token } = parseCookies(context);
      if (!token) {
         return {
            redirect: {
               destination: '/entrar'
            }
         };
      }
      const user = await userAuthentication(token)

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