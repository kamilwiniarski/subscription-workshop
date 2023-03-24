import styled from "styled-components"
import React from "react"

const StyledHeading = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`

interface HeadingProps {
  message: string
}

export const Heading: React.FC<HeadingProps> = ({ message }) => {
  return <StyledHeading>{message}</StyledHeading>
}
