import styled from "styled-components"
import React from "react"

const StyledButton = styled.button<{ isError?: boolean }>`
  margin: 0 0 0 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(144, 202, 249);
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

  & > a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover {
    cursor: pointer;
    text-decoration: none;
    background-color: rgb(66, 165, 245);
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px,
      rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  }

  ${({ isError }) =>
    isError &&
    `
    background-color: transparent;
    border: 1px solid rgba(244, 67, 54, 0.5);
    color: rgb(244, 67, 54);
    
    &:hover {
      text-decoration: none;
      background-color: rgba(244, 67, 54, 0.08);
      border: 1px solid rgb(244, 67, 54);
    }
  `}
`

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode
  clickAction?: () => void
  isError?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  clickAction,
  isError,
  ...rest
}) => {
  return (
    <StyledButton isError={isError} onClick={clickAction} {...rest}>
      {children}
    </StyledButton>
  )
}
