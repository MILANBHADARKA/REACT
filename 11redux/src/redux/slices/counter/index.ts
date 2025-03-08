import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState: 0,
    name: 'Counter',
    reducers: {
        increment: (currentstate) => currentstate + 1,
        decrement: (currentstate) => currentstate - 1,
    }
})

export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;