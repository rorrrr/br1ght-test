import React from "react";
import { useSelector, useStore } from "react-redux";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 3em;
  height: 20em;
  width: 90%;
  margin: 3em auto auto auto;
  display: block;
`;

const QuestionsContainer = () => {
  const store = useStore();
  const { activeQuestion } = useSelector((state) => state);

  return (
    <StyledContainer>
      <p>
        Questions: {activeQuestion.activeQuestion + 1}/
        {activeQuestion.questionList.length}
      </p>
      <p>Input: here</p>
      <button>Start the Test</button>
    </StyledContainer>
  );
};

export default QuestionsContainer;
