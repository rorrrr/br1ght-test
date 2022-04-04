import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestionList: (state, action) => {
      state.questionList = action.payload;
    },
    setSingleAnswer: (state, action) => {
      state.answerList = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = questionsSlice.actions;

export default questionsSlice.reducer;
