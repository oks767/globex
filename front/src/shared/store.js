import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const userAPI = `localhost:3000/api/users`

const fetchUserById = createAsyncThunk(
  'users/fetchByIdUsers',
  async (userId: number, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  },
)
const initialState = {
  value: []
}
const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.push(initialState)
      state.value = action.payload
    }
  }
})

export const store = configureStore({
  reducer: {
    add: usersSlice.reducer
  },
})
console.log(usersSlice);

export const {add} = usersSlice.actions
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch