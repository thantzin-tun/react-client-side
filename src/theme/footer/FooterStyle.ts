import styled from "styled-components";

type FooterProps = {
  color?: string
}

export const FooterStyle = styled.div<FooterProps>`

  color:${props => props?.theme?.colors[props.color!] || props.color || props?.theme?.colors?.texColor};
  width: 100%;
  height: 100px;
  background-color: ${props => props?.theme?.colors?.blackColor};

`;
