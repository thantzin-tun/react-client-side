import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${(props) => props?.theme?.colors?.main};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        color: ${(props) => props.theme?.colors?.status};
        margin-right: 50px;
        font-weight: 500;
        font-size: 1.5rem;
      }
    }
    .avatar {
      width: 40px;
      height: 40px;
      background-color: ${(props) => props.theme?.colors?.primary};
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .hambuger_and_app {
      display: flex;
      align-items: center;
      .hamburger-lines {
        width: 38px;
        height: fit-content;
        position: relative;
        cursor: pointer;
        display: none;
        .line {
          display: block;
          height: 3px;
          width: 100%;
          background: white;
          border-radius: 4px;
          opacity: 1;
          transition: 0.25s ease-in-out;
          margin-bottom: 5px;
        }
        &:hover {
          .line1 {
            transform: rotate(-40deg) translate(-3px, 10px);
          }
          .line2 {
            opacity: 0;
          }
          .line3 {
            transform: rotate(40deg) translate(0px, -10px);
          }
        }

        @media(max-width:768px){
            display: block;
        }
      }
      @media(max-width:768px) {
        .appName {
              display: none;
            }
      }
    }
  }
`;
