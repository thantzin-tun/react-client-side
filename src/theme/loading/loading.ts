import styled from "styled-components";

type LoadingProps = {
  loadbackColor?: string
}


export const LoadingStyle = styled.div<LoadingProps>`

    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100vh;
    background-color: ${props => props.theme.colors[props.loadbackColor || ""] || props.loadbackColor || props.theme.colors.light};
    opacity: 0.98;
    ${props => props.theme.General.flex}

    z-index: 10;


`