import styled from "styled-components";

type ChatSideBarStyleProps = {
    bol: any
};

export const ChatSideBarStyle = styled.div<ChatSideBarStyleProps>`
  width: 10%;
  height: 500px;
  background-color: ${(props) => props.theme.colors.line};
  position: fixed;
  top: 15%;
  left: -15%;
  z-index: 20;
  padding: 20px 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  transition: all 0.2s ease-in;
  opacity: 0;

  /* border-top-right-radius: 15px;
  border-bottom-right-radius: 15px; */

  ${({bol})=> bol && `
         opacity: 1;
         left: 0;
    `}

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    /* border-radius: 10px; */
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.dark};
    border-radius: 5px;
  }
  .avatar {
    width: 45px;
    height: 45px;
    background-color: #fff;
    border-radius: 50%;
    margin-bottom: 15px;
    transition:all 0.3s linear;
    position:relative;
    user-select:none;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .name {
        width: 45px;
        height: 45px;
        background-color:${props => props.theme.colors.secondary};
        position: absolute;
        left:0;
        top:0;
        border-radius:50%;
        ${props =>props.theme.General.flex}
        z-index:-1;
        transition:all 0.3s linear;
    }
    .dot {
      width:15px;
      height:15px;
      border-radius:50%;
      background-color: green;
      opacity:0.5;
      position: absolute;
      top:-5px;
      left: 0px;
  }

    &:hover {
        transform: rotateY(-180deg);
        .name {
          z-index:1;
        }
    }


  }
`;
