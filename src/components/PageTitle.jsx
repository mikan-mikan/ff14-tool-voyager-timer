import React from "react";
import styled from "@emotion/styled";

const StyledPageTitle = styled.h1`
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const PageTitle = ({ children }) => {
  return (
    <StyledPageTitle>
      {children}
    </StyledPageTitle>
  );
};

export default PageTitle;
