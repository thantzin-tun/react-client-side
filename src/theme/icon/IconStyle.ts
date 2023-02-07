import styled from "styled-components";

type IconStyleProps = {
  eventFontColor?: string;
  eventBackColor?: string;
  border_radius?: string;
  fontSize?: string;
};

export const IconContainerStyle = styled.div`
  width: 100%;
  /* margin-top: 60px; */
  ${(props) => props.theme.General.flex}

  @media(max-width:768px) {
    flex-wrap: wrap;
  }
`;

export const IconDiv = styled.div<IconStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;
  height: 100px;
  margin-top: 50px;
  height: 150px;

  .icon-event {
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 768px) {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f8f8f8;
      .icon {
        width: 50px;
      }
    }
    @media (max-width: 576px) {
    .icon {
      width: 35px;
    }
  }
  }

  @media (max-width: 768px) {
    margin-right: 30px;
  }

  /* @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    .icon {
        width: 45px;
    }
  } */

`;

//Reuseable Badge
export const BadgeStyle = styled.div<IconStyleProps>`
  background-color: ${(props) =>
    props.theme.colors[props.eventBackColor || ""] ||
    props.eventBackColor ||
    props.theme.colors.primary};
  color: ${(props) =>
    props.theme.colors[props.eventFontColor || ""] ||
    props.eventFontColor ||
    props.theme.colors.light};
  padding: 2px 18px;
  border-radius: ${(props) => props.border_radius || 0}px;
  font-size: ${(props) =>
    props.theme.fontSize[props.fontSize || ""] ||
    props.fontSize ||
    props.theme.fontSize.md}px;
  height: fit-content;
  margin-bottom: 12px;

  @media(max-width:768px) {
    position: absolute;
    top: -13px;
    left: 24px;
    background-color: red;
  }
`;

export const SecondBadge = styled(BadgeStyle)<IconStyleProps>`

        padding:2px 5px;
        margin-bottom: 0px;
        position: absolute;
        top:2px;
        left: 70%;

`;