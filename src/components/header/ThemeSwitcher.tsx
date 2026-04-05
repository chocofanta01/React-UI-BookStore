import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import styled from "styled-components";

function ThemeSwitcher() {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  return (
      <ThemeSwitcherStyle onClick={toggleTheme}>
        {themeName === "light" ? <FaMoon /> : <FaSun />}
        <span>{themeName}</span>
      </ThemeSwitcherStyle>
  );
}

const ThemeSwitcherStyle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 20px;
  padding: 4px 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};
  font-weight: 600;
  
  &:hover {
    background-color: ${({ theme }) => theme.color.background};
  }

  svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default ThemeSwitcher;