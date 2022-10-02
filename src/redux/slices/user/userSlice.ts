import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interface/user";

type initialStateType = {
   userData: IUser | null;
};

const initialState: initialStateType = {
   userData: null
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUser: (state, action: PayloadAction<IUser>) => {
         state.userData = action.payload;
      },
      removeUser: (state) => {
         state.userData = null;
      },
   }
})
export const { setUser, removeUser } = userSlice.actions;
export { userSlice };