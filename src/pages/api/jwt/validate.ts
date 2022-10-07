import type { IUser } from "../../../interface/user";

type validateTokenType = (token: string) => Promise<{
   data?: IUser;
   error: boolean;
   message?: string;
}>

type ResponseType = IUser | { errors: string };

const validateToken: validateTokenType = async (token: string) => {
   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/validate/token`, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      const data: ResponseType = await response.json();
      console.log(data)
      if (response.status !== 200) throw new Error("Sessão expirada")
      return { error: false, data } as { error: boolean, data: IUser }
   } catch (err) {
      const Error = err as Error
      return { error: true, message: Error.message }
   }
};

export { validateToken };