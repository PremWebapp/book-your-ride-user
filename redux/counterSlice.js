import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  
  const initialState = {
    value: 0,
  };
  
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: state => {
        state.value++;
      },
      decrement: state => {
        state.value--;
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },
    },
  });
  export const {
    increment, 
    decrement, 
    incrementByAmount,
  } = counterSlice.actions;
  
  // calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
  export const selectCount = (state) => state.counter.value;
  
  // exporting the reducer here, as we need to add this to the store
  export default counterSlice.reducer;