import styled from "styled-components";

interface MarginProps {
  marginTop?: string,
  marginBottom?: string,
}

export const MarginTop = styled.div<MarginProps>`

margin-top: ${props => props?.marginTop}px;

margin-bottom: ${props => props?.marginTop}px;

`