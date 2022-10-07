import { error } from "console";
import { parseCookies } from "nookies";



const getTasks = async (token: string) => {
   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/task/get/6`,
      {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      const data = await response.json();
      return data
   } catch (err) {
      return err
   }
}

export { getTasks };