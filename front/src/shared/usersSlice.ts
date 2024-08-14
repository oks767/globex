import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import usersAll from "./async";
interface User {
  fullname: string;
  position_date: string;
  system_id: string;
}
interface UsersState {
  value: User[];
  loadingStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
const initialState: UsersState = {
    value: [],
    loadingStatus: 'idle',
    error: null
  }
  const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(usersAll.pending, (state) => {
          state.loadingStatus = 'loading';
          state.error = null;
        })
        .addCase(usersAll.fulfilled, (state, action: PayloadAction<User[]>) => {
          state.loadingStatus = 'succeeded'
          state.value = action.payload
        })
        .addCase(usersAll.rejected, (state, action) => {
          state.loadingStatus = 'failed';
          state.error = action.payload as string;
        });
    },
  })

  export const usersActions = {...usersSlice.actions }
  export default usersSlice
  export type {User, UsersState}