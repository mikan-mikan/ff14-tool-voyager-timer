import React from "react";
import styled from "@emotion/styled";
import "@fontsource/zen-kaku-gothic-new";
import type { WithChildren } from "../types/Common";

const StyledButtonWrap = styled.div`
  margin-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonWrap = ({ children }: WithChildren) => {
  return <StyledButtonWrap>{children}</StyledButtonWrap>;
};

export default ButtonWrap;
