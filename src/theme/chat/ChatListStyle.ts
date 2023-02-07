import styled from "styled-components";

type ChatListStyleProps = {
  color?: string;
};

type ChatUserProps = {
  marginBottom?: string | number;
  border_radius?: string | number;
  bgColor?: any;
  hoverBackColor?: string;
  hoverFontColor?: string;
};

export const ChatListStyle = styled.div<ChatListStyleProps>`
  width: 100%;
  height: calc(100vh - 75px);
  background-color: ${(props) =>
    props.theme.colors[props.color || ""] || [props.color] ||
    props.theme.colors.light};
    overflow-y: scroll;
    position: relative;

  .user-search {
    width: 100%;
    /* border-bottom: 1px solid black; */
    padding: 15px 10px;
    margin-bottom: 15px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 8;
    background-color: #011b56;

    .search-box {
      position: relative;
      .input-box {
        width: 100%;
        border: none;
        outline: none;
        box-shadow: none;
        border-radius: 30px;
        padding: 8px 15px 8px 40px;
      }

      .searchIcon {
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }
  }

  .chat-user {
    width: 100%;
    height: fit-content;
    padding: 10px;
    /* margin-top: 110px; */
  }

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


@media(max-width:767px) {
    display: none;
} 


`;

export const ChatUser = styled.div<ChatUserProps>`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 8px 13px;
  border-radius: ${(props) =>
    props.theme.borderRadius[props.border_radius || ""] || [
      props.border_radius,
    ] ||
    props.theme.general.borderRadius?.xxs}px;
  margin-bottom: 8px;
  background-color: ${(props) =>
  props.theme.colors[props.bgColor || ""] || [props.bgColor] ||
  props.theme.colors.light};

  display: flex;
  align-items: center;

  transition: all 0.1s linear;

  &:hover {
    background-color:  ${(props) =>
    props.theme.colors[props.hoverBackColor || ""] || [props.hoverBackColor] || props.theme.colors.main};
    .right {
      color: white;
    }
    transform: translate(-0.5px,0.5px) scale(1.03);
  }

  .left {
    border-radius: 50%;
    width: 45px;
    height: 45px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
  }

  .online-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color:${props => props.theme.colors.primary};
    position: absolute;
    top: -3px;
    left: -3px;
  }
`;
