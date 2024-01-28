import { createSlice } from '@reduxjs/toolkit';



const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state,item) => [...state,item],
    clear: [],
  },
});


export const { addItem, clear } = cartSlice.actions;
export default cartSlice.reducer;