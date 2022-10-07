import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interface/user";

type initialStateType = {
   userData: 
         IUser
      |
         {
            created: undefined,
            email: undefined,
            id: undefined,
            name: undefined,
            surname: undefined
         } | null;
};

const initialState: initialStateType = {
   userData: {
      created: undefined,
      email: undefined,
      id: undefined,
      name: undefined,
      surname: undefined
   }
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUser: (state, { payload }: PayloadAction<{ data : IUser } >) => {
         console.log(payload)
         state.userData = payload.data;
      },
      removeUser: (state) => {
         state.userData = null;
      },
   }
})
export const { setUser, removeUser } = userSlice.actions;
export { userSlice };