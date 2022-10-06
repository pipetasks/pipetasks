
type userValues = {
   email: string;
   password: string;
}

type ApiResult = {
   token?: string;
   message?: string 
}

const tokenRequest = async ({ email, password }: userValues) => {
   console.log(JSON.stringify({email, password}))
   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/auth`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            email,
            password
         })
      });
      const data = await response.json() as ApiResult;
      if (response.status !== 200) throw new Error(data.message)
      return { error: false, token: data.token };
   } catch (err) {
      const Error = err as Error
      return { error: true, message: Error.message }
   }
};

export { tokenRequest };