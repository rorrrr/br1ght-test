import React, { useState } from "react";
import { useSelector, useStore } from "react-redux";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 3em;
  height: 20em;
  width: 90%;
  margin: 3em auto auto auto;
  display: block;
`;

const StyledButton = styled.button`
  background-color: orange;
  color: white;
`;

const QuestionsContainer = () => {
  const { activeQuestion } = useSelector((state) => state);
  const [testStarted, setTestStarted] = useState(false);

  return (
    <StyledContainer>
      {!testStarted ? (
        <StyledButton onClick={() => setTestStarted(true)}>
          Start the Test
        </StyledButton>
      ) : (
        <div>
          <p>
            Questions: {activeQuestion.activeQuestion + 1}/
            {activeQuestion.questionList.length} In a job I would be motivated
            by
          </p>
          <p>
            {activeQuestion.questionList[activeQuestion.activeQuestion].text}
          </p>
          <input
            type='range'
            class='form-range'
            min='1'
            max='8'
            id='customRange2'
          />
        </div>
      )}
    </StyledContainer>
  );
};

export default QuestionsContainer;
