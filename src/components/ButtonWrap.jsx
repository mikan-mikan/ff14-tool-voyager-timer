import React from "react";
import styled from "@emotion/styled";
import "@fontsource/zen-kaku-gothic-new";

const StyledButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 4rem;
  width: 100%;
  align-items: center;
`;

const ButtonWrap = ({ children }) => {
  return (
    <StyledButtonWrap>
      {children}
    </StyledButtonWrap>
  );
};

export default ButtonWrap;
