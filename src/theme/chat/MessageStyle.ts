import styled from "styled-components";

type MessageStyleProps = {
  bgColor?: string
  own?: boolean | string
  notown?: boolean | string
}


export const MessageStyle = styled.div<MessageStyleProps>`

  margin: 15px 20px;

  display: flex;
  ${({own})=> own && `
         justify-content: flex-end;
    `}

  ${({own})=> !own && `
         justify-content: flex-start;
    `}
 
.message {
    display: flex;
    ${({own})=> own && `
      flex-direction:row-reverse;
    `}
    align-items: flex-start;

}


`

export const MessageBox = styled.div<MessageStyleProps>`

    width:200px;
    height: fit-content;
    padding: 10px;
    background-color: ${(props) =>
    props.theme.colors[props.bgColor || ""] || [props.bgColor] ||
    props.theme.colors.light};
    color: white;

    ${({own})=> own && `
        margin-right: 10px;
        border-bottom-left-radius:20px ;
        border-bottom-right-radius:20px ;
        border-top-left-radius:20px ;
        background-color: #35c4f7;
    `}

  ${({own})=> !own && `
        margin-left: 10px;
        border-bottom-left-radius:20px ;
        border-bottom-right-radius:20px ;
        border-top-right-radius:20px ;
        background-color: #87e8b6;
    `}


      @media(max-width:768px) {
          width:180px;
          padding:8px;
      }

`