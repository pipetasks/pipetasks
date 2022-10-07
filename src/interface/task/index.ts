interface ITask {
   _id: string,
   title: string,
   descripton : string,
   userId: string,
   createdAt: string
   finished: {
      at: string,
      status: boolean
   }
}

export type { ITask };