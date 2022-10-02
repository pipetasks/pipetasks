
type userValues = {
   email: string;
   password: string;
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
      console.log(response.status)
      const data: { token: string } = await response.json();
      console.log(data)
      //if (response.status !== 200) throw new Error("Bad status code")
      return data.token
   } catch (err) {
      console.log(err)
   }
};

export { tokenRequest };