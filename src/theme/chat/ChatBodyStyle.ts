import styled from "styled-components";

type ChatBodyStyleProps = {
  bgColor?: any;
};

export const ChatBodyStyle = styled.div<ChatBodyStyleProps>`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;

  .message {
    display: flex;
    align-items: flex-start;

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media (max-width: 768px) {
        width: 25px;
        height: 25px;
      }
    }
  }

  .message-container {
    width: 100%;
    overflow-y: scroll;
    padding: 0px 25px;
    height: calc(100vh - 200px);
    // background-color: greenyellow;
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #011b56;
      border-radius: 5px;
    }

    @media (max-width: 768px) {
      padding: 0px 5px;
    }
    @media (max-width: 576px) {
      padding: 0;
    }
  }

  .chat-bar {
    width: 100%;
    height: 50px;
    border-top: 1px solid black;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    .emoji {
      width: 30px;
      height: 30px; 
      background-color: blue; 
      border-radius: 50px;
      margin-left: 10px; 
    }
    .box {
      width: 90%;
      border: none;
      outline: none;
      padding: 8px 20px;
      border-radius: 30px;
      color: black;
    }
    .sendIcon {
      border: none;
      outline: none;
      background-color: transparent;
    }
  }
`;

export const ChatHeaderBar = styled.div<ChatBodyStyleProps>`
  width: 100%;
  height: 75px;
  background-color: ${(props) =>
    props.theme.colors[props.bgColor || ""] || [props.bgColor] ||
    props.theme.colors.main};

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid black;
  padding: 0px 18px;

  .left {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      width: 45px;
      height: 45px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
  }

  .ms-logo {
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }
`;
