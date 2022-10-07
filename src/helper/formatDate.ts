export function formatDate(dateOBJ: string) {
   const createDateObj = new Date(dateOBJ)
   const date = createDateObj.getDate();
   const month = createDateObj.getMonth() + 1
   const year = createDateObj.getFullYear()

   return `${date}/${month}/${year}`
}