import React from "react";
import styled from "@emotion/styled";
import type { WithChildren } from "../types/Common";

const StyledPageHeader = styled.div`
  margin-bottom: 2rem;
`;

const PageHeader = ({ children }: WithChildren) => {
  return <StyledPageHeader>{children}</StyledPageHeader>;
};

export default PageHeader;
