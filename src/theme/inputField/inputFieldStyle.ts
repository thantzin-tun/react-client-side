import styled from "styled-components";
import { Field } from "formik";


interface InputFieldStyleProps {
  borderColor?: string;
  inputPadding?: string | number;
  color?: string;
  size?: string | number;
  weight?: any;
  left?: string;
  right?: string;
  iconBorderColor?: any
  marginInline?: any
  marginblock?: any
  border_radius?: string | number
  backgroundPhoto?: any
  paddingleft?: string | number
  paddingright?: string | number
  position?: string
}


export const InputFieldStyle = styled(Field)<InputFieldStyleProps>`
  position:relative;
  width: 100%;
  padding: ${(props) => props.inputPadding || 10}px;
  border: 1px solid ${(props) => props.theme.colors[props.borderColor] || props.borderColor || "gray"} ;
  outline: none;
  border-radius: ${props => props.border_radius || 0}px;
  height: 100%;
  cursor: pointer;
  padding-left: ${(props) => props.paddingleft || props.inputPadding}px;
  padding-right: ${(props) => props.paddingright || props.inputPadding}px;

  &:focus {
    border: 1px solid  #011b56;
  }

`;


export const InputIconField = styled.div<InputFieldStyleProps>`
 position: relative;
 width: 100%;
`;

export const Icon = styled.img<InputFieldStyleProps>`
  position: absolute;
  ${(props) =>
    props.position === "left" &&
    `
        left:3%;
        top:20%; 
  `}
  ${(props) =>
    props.position === "right" &&
    `
        right:3%;
        top:20%; 
  `}
`;




export const ErroLabel = styled.span<InputFieldStyleProps>`

  color:${props => props.theme?.colors[props.color || ""] || props.color || props?.theme?.colors.dark};
  font-weight:${props => props.weight || props?.theme?.fontWeight.lg};
  font-size: ${props => props.theme.fontSize[props.size || ''] || props.size || props.theme.fontSize.sm}px;


`


export const Right = styled.div<InputFieldStyleProps>`
    width:100%;
    height: 100%;
    background-image: url(${props => props.backgroundPhoto});
    background-repeat:no-repeat;

`