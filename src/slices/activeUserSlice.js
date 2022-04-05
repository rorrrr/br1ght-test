import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeUser: null,
};

export const activeUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
  },
});

export const { setActiveUser } = activeUserSlice.actions;
export default activeUserSlice.reducer;
