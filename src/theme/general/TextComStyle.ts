import styled from "styled-components";

interface TextComProps {
    fontSize?: number | string,
    weight?: number | string,
    color?: any,
    fontStyle?: string,
    letterSpacing?: number,
    align?: string,
    link?: string
}

export const TextCom = styled.article<TextComProps>`

  color: ${props => props.theme.colors[props.color] || props.color || props.theme.colors.dark};

  font-weight: ${props => props.theme.fontWeight[props.weight || ""] || props.weight || props.theme.fontWeight.xxl};

  font-style: ${props => props.fontStyle || 'initial'};

  letter-spacing: ${props => props.letterSpacing || "0"}px;

  text-align: ${props => props.align || "left"};

  font-size: ${props => props.theme.fontSize
  [props.fontSize || ""] || props.weight || props.theme.fontSize.xxl}px;

  .link {
    text-decoration: none;
    color: ${props => props.theme.colors[props.link || ""] || props.link || props.theme.colors.dark};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors[props.link || ""] || props.link || props.theme.colors.dark};
  }

  @media(max-width:768px) {
    font-size: ${props => props.theme.mobilefontSize
    [props.fontSize || ""] || props.fontSize || props.theme.mobilefontSize.sm}px;
  }

`