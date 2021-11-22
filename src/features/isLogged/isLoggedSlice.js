import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logValue: false,
};

const loginSlice = createSlice({
  name: 'logValue',
  initialState,
  reducers: {
    changeLogginValueFalse: (state) => {
        state.logValue  = false;
      },
    changeLogginValueTrue: (state) => {
        state.logValue  = true;
    }
  },
})

export const { changeLogginValueFalse,changeLogginValueTrue } = loginSlice.actions
export default loginSlice.reducer