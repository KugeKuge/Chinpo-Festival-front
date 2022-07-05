import { createSlice } from '@reduxjs/toolkit';

export const chinpoStringSlice = createSlice({
  name: 'chinpoString',
  initialState: {
    chinpoString: "",
    count: 0,
  },
  reducers: {
    setChinpoString: (state, action) => {
      state.chinpoString = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setChinpoStringJson: (state, action) => {
      state.chinpoString = JSON.parse(action.payload).chinpoString;
      state.count = JSON.parse(action.payload).count;
    },
    countUpChinpo: (state, action) => {
      state.chinpoString = state.chinpoString + "ちんぽ";
      state.count += 1;
    },
    resetChinpo: (state, action) => {
      state.chinpoString = "";
      state.count = 0;
    },

  },
});

export const { setChinpoString, setCount, setChinpoStringJson, countUpChinpo, resetChinpo } = chinpoStringSlice.actions;

export default chinpoStringSlice.reducer;