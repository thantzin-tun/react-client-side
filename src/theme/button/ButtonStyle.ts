import { borderRadius } from './../attribute/general';
import styled from "styled-components";

type ButtonStyleProps = {
  btnPadding?: string
  bgColor?: string
  fontColor?: string
  size?: string
  border_radius?: string | number
};

export const CustomButton = styled.button<ButtonStyleProps>`
  /* padding: ${(props) =>
    props.theme.colors[props.btnPadding || ""] ||
    props.btnPadding ||
    props.theme.colors.light}px; */

    background-color:  ${(props) =>
    props.theme.colors[props.bgColor || ""] ||
    props.bgColor ||
    props.theme.colors.primary};

    color:  ${(props) =>
    props.theme.colors[props.fontColor || ""] ||
    props.fontColor ||
    props.theme.colors.primary};

    font-size: ${(props) =>
    props.theme.fontSize[props.size || ""] ||
    props.size ||
    props.theme.fontSize.xl}px;

    border-radius:${(props) =>
    props.theme.borderRadius[props.border_radius || ""] ||
    props.border_radius || 0 }px ;

    border: none;

    padding: 10px 20px;
    width:150px;


@media(max-width:768px) {
    background-color: #2f80ed;
    width: 100%;
}


`;
