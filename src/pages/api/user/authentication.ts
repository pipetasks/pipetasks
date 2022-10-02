import { IUser } from "../../../interface/user";

const userAuthentication = async (token: string) => {
   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login`, {
         headers: {
            Authorization: `Be1arer ${token}`
         }
      });
      const data: { data: IUser} = await response.json();
      if (response.status !== 200) throw new Error("Bad status code")
      return data
   } catch (err) {
      console.log(err)
   }
};

export { userAuthentication };