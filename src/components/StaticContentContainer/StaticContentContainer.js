import React from "react";
import styled from "styled-components";
import { default_colours } from "../../common/theme_defaults";
import tube from "../../images/tube.png";
import InfoCard from "../InfoCard.js/InfoCard";

const StyledContentContainer = styled.div`
  height: 40vh;
  display: flex;
  background: ${default_colours.backgroundGrey};
  font-family: "Montserrat";
  font-weight: 100;
`;
const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: center;
`;

const StyledImageContainer = styled.div`
  width: 50%;
  padding: 1em;
`;

const StyledImage = styled.img`
  max-height: 100%;
`;

const StyledTextContainer = styled.div`
  width: 50%;
  display: table-cell;
  vertical-align: middle;
  margin: 3rem;
  text-align: left;
`;

const StyledHelmetHeader = styled.h4`
  font-weight: 400;
  size: 16px;
  color: ${default_colours.black};
  text-transform: uppercase;
`;
const StyledHeader = styled.div`
  font-weight: 600;
  font-size: 5vh;
  margin-bottom: 1em
  color: ${default_colours.black};
`;

const StaticContentContainer = () => {
  return (
    <div>
      <StyledContentContainer>
        <StyledRow>
          <StyledTextContainer>
            <StyledHelmetHeader>Career Path Finder</StyledHelmetHeader>
            <StyledHeader>Discover the journey to your career</StyledHeader>
          </StyledTextContainer>
          <StyledImageContainer>
            <StyledImage src={tube} alt='tube' />
          </StyledImageContainer>
        </StyledRow>
      </StyledContentContainer>
      <StyledRow>
        <InfoCard
          heading={"24 questions"}
          text={
            "We will ask 24 questions relating to things you value and care about most."
          }
          colour={"orange"}
          icon={"clipboard"}
        />
        <InfoCard
          heading={"2 minutes"}
          text={
            "Questions are on a scale from 1-5, and it is easy and quick to finish the test."
          }
          colour={"purple"}
          icon={"timer"}
        />
        <InfoCard
          heading={"Personalised advice"}
          text={
            "We’ll offer you personalised advice, guide through available paths, and suggest further steps."
          }
          colour={"yellow"}
          icon={"scissors"}
        />
      </StyledRow>
    </div>
  );
};

export default StaticContentContainer;
