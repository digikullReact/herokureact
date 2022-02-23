import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos:[

    ]

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
 
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const {  addTodos } = counterSlice.actions

export default counterSlice.reducer