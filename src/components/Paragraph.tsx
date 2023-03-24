import styled from "styled-components"
import React from "react"

const StyledParagraph = styled.p`
  margin: 0 0 0 8px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: rgba(255, 255, 255, 0.7);
  text-align: left;
`

interface ParagraphProps {
  children: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>
}
