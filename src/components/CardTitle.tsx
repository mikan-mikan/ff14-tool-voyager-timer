import React from "react";
import styled from "@emotion/styled";
import type { WithChildren } from "../types/Common";

const StyledCardTitle = styled.h2`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const CardTitle = ({ children }: WithChildren) => {
  return <StyledCardTitle>{children}</StyledCardTitle>;
};

export default CardTitle;
