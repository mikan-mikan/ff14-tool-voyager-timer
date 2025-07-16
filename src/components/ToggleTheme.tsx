import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }
  const saved = localStorage.getItem("theme");
  if (saved) {
    return saved;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledToggleWrap = styled.div`
  position: relative;
  border-radius: 1rem;
  transition: box-shadow 0.2s;
  &:focus-within {
    outline: 2px solid var(--text-primary);
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.15);
  }
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const StyledSlider = styled.div`
  display: block;
  width: 3.5rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: var(--bg-toggle-base);
`;

const StyledDot = styled.div<{ themeDark: boolean }>`
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(${({ themeDark }) => (themeDark ? "--text-primary" : "--text-button")});
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ themeDark }) => (themeDark ? "1.5rem" : "0")});
`;

const ToggleTheme: React.FC = () => {
  const [theme, setTheme] = useState<string>(getInitialTheme());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <StyledLabel htmlFor="theme-toggle">
      <StyledToggleWrap>
        <StyledInput
          type="checkbox"
          onChange={handleToggle}
          id="theme-toggle"
          checked={theme === "dark"}
        />
        <StyledSlider />
        <StyledDot themeDark={theme === "dark"} />
      </StyledToggleWrap>
    </StyledLabel>
  );
};

export default ToggleTheme;
