import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 3em;
  height: 20em;
  width: 90%;
  margin: 3em auto auto auto;
  display: block;
`;

const QuestionsContainer = () => {
  return (
    <StyledContainer>
      <p>Questions: here</p>
      <p>Input: here</p>
      <button>Start the Test</button>
    </StyledContainer>
  );
};

export default QuestionsContainer;
