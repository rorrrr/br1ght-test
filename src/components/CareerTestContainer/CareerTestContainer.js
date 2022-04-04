import React from "react";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { default_colours } from "../../common/theme_defaults";
import QuestionsContainer from "../QuestionsContainer/QuestionsContainer";

const StyledContainer = styled.div`
  margin-top: 3em;
  height: 20em;
  width: 90%;
  margin: 3em auto auto auto;
  display: block;
`;

const StyledHeader = styled.h1`
  font-weight: 600;
  size: 36px;
  color: ${default_colours.black};
`;

const StyledText = styled.p`
  font-weight: 400;
  size: 16px;
  color: ${default_colours.black};
  text-transform: uppercase;
`;

const CareerTestContainer = () => {
  return (
    <StyledContainer>
      <StyledHeader>Career path test</StyledHeader>
      <StyledText>
        Complete this two minute test to get your results.
      </StyledText>
      Your Progress 1/24
      <ProgressBar now={5} min={1} max={24} />
      <QuestionsContainer />
    </StyledContainer>
  );
};

export default CareerTestContainer;
