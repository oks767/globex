import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || 'localhost'

const userApi = `http://${host}:${port}/api/users`
interface User {
  fullname: string;
  position_date: string;
  system_id: string;
}
const usersAll = createAsyncThunk<User[], void, { rejectValue: string }>('users/fetchUsersAll', 
    async (_, thunkAPI) => {
      try {
        const response = await axios.get<User[]>(userApi);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue((error as any).message);
      }
    }
  )

export default usersAll