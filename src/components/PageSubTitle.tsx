import React from "react";
import styled from "@emotion/styled";
import type { WithChildren } from "../types/Common";

const StyledPageSubTitle = styled.h1`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-accent);
  text-align: center;
`;

const PageSubTitle = ({ children }: WithChildren) => {
  return <StyledPageSubTitle>{children}</StyledPageSubTitle>;
};

export default PageSubTitle;
