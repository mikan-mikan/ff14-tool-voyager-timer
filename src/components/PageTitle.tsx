import React from "react";
import styled from "@emotion/styled";
import type { WithChildren } from "../types/Common";

const StyledPageTitle = styled.h1`
  margin: 0;
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const PageTitle = ({ children }: WithChildren) => {
  return <StyledPageTitle>{children}</StyledPageTitle>;
};

export default PageTitle;
