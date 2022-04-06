import React from "react";
import styled from "styled-components";
import { default_colours } from "../../common/theme_defaults";

const StyledContainer = styled.div`
  flex-grow: 1;
  margin-top: -3rem;
`;

const StyledCard = styled.div`
  height: 8em;
  width: 25vw;
  background: white;
  border: 1px solid ${default_colours.borderGrey};
  border-radius: 9px;
  margin: auto;
  postion: relative;
`;

const StyledIcon = styled.div`
  height: 2em;
  width: 2em;
  border-radius: 50%;
  background: ${(props) => props.colour};
  text-align: center;
`;
const StyledTextContainer = styled.div`
  vertical-align: middle;
  padding-left: 1em;
  padding-right: 1em;
`;

const StyledText = styled.p`
  vertical-align: middle;
  padding-left: 1em;
  padding-right: 1em;
  font-size: 0.7rem;
`;

const InfoCard = ({ heading, text, icon, colour }) => {
  return (
    <StyledContainer>
      <StyledCard>
        {/* WIP */}
        <StyledIcon colour={colour}>{icon}</StyledIcon>
        <StyledTextContainer>
          <h6>{heading}</h6>
          <StyledText>{text}</StyledText>
        </StyledTextContainer>
      </StyledCard>
    </StyledContainer>
  );
};

export default InfoCard;
