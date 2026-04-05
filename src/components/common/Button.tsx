import styled from "styled-components";
import { ButtonScheme, ButtonSize } from "../../style/theme";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  schema: ButtonScheme;
  disabled?: boolean;
  isLoading?: boolean;
}

function Button({ children, size, schema, disabled, isLoading, ...props }: Props) {
  return (
    <ButtonStyle size={size} schema={schema} disabled={disabled || isLoading} isLoading={isLoading} {...props}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  padding: ${({ theme, size }) => theme.button[size].padding};
  color: ${({ theme, schema }) => theme.buttonScheme[schema].color};
  background-color: ${({ theme, schema }) => theme.buttonScheme[schema].backgroundColor};
  border: ${({ theme, schema }) => theme.buttonScheme[schema].border};
  border-radius: 4px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
