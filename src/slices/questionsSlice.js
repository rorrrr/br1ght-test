import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answerList: [],
  activeQuestion: 0,
  questionList: [],
  previouslyCommittedStatus: false,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestionList: (state, action) => {
      state.questionList = action.payload;
    },
    setSingleAnswer: (state, action) => {
      state.answerList = [...state.answerList, action.payload];
    },
    setPreviouslyCommittedStatus: (state, action) => {
      state.previouslyCommittedStatus = action.payload;
    },
    increment: (state) => {
      state.activeQuestion += 1;
    },
    decrement: (state) => {
      state.activeQuestion -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  setQuestionList,
  setSingleAnswer,
  setPreviouslyCommittedStatus,
} = questionsSlice.actions;

export default questionsSlice.reducer;
