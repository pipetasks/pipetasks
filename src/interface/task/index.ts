interface ITask {
   title: string,
   descripton : string,
   userId: string,
   finished: {
      at: Date,
      status: boolean
   }
}

export type { ITask };