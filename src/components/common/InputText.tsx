import React from "react";
import { ForwardedRef } from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  inputType?: "text" | "email" | "password" | "number";
}

const InputText = React.forwardRef(
  ({ placeholder, inputType, onChange, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return <InputTextStyled placeholder={placeholder} ref={ref} type={inputType} onChange={onChange} {...props} />;
  }
);

const InputTextStyled = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.secondary};
    opacity: 0.6;
  }
`;

export default InputText;
