import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
import { HeaderStyle } from "theme/header";
import { removeToken } from "service"
import { TextCom } from "theme";
import { ChatSideBarCom } from "components/chat";
import { useMediaQuery } from 'react-responsive';

import * as io from 'socket.io-client';

type HeaderProps = {
  state: any,
  sendChatBodyID: any,
  chats: any,
  activeUser: any
}


const socketServer = io.connect("http://localhost:4000");
export const HeaderCom: React.FC<HeaderProps> = ({ state ,sendChatBodyID,chats,activeUser}) => {
  const navigate = useNavigate();

  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const [bol,setBol] = useState<boolean>(false);

  const logout = () => {
    removeToken();
    navigate("/login");
  }
  
  const showSideBar = () => {
      setBol(!bol);
  }

  return (
    <>
      {/* <HeaderStyle>
        <div className="container header">
          <div className="left">
          <ul>
            {
              navigationMenu?.map((data,index) => (
            <li
            key={index}
            >
              <NavLink className={({isActive}) => isActive ? "active" : "noActive"} to={data.path}
              >{data.name}</NavLink>
            </li>
              ))
            }
          </ul>
          </div>
          <button className="btn btn-primary btn-lg">
            <NavLink className="link" to="/register">Get Started</NavLink>
          </button>
          <button className="btn btn-primary btn-lg" onClick={logout}>
              Logout
          </button>
        </div>
      </HeaderStyle> */}
      <HeaderStyle>
        <div className="container header">
          <div className="hambuger_and_app">
            <TextCom fontStyle="italic" color="light" fontSize="xxxxl" className="appName">Messaging</TextCom>
            <div className="hamburger-lines"
            onClick={showSideBar}
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </div>
          {
            state?.name
              ?
              <div className="info d-flex align-items-center">
                <div className="avatar ">
                  {
                    state?.profileImg
                    ?
                    <img src={`data:image/png;base64${state.profileImg}`} alt="profileImg"/>
                    :
                  <TextCom color="light" fontSize="md">{(state.name.split(""))[0]}</TextCom>
                  }
                </div>
                <TextCom color="light" fontSize="md" className="mx-2">{state.name}</TextCom>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
              </div>
              :
              ""
          }
        </div>
        {
          isTabletOrMobile
            ?
            <ChatSideBarCom bol={bol} chats={chats} sendChatBodyID={sendChatBodyID} setBol={setBol} activeUser={activeUser}/>
            :
            ""
        }
      </HeaderStyle>
    </>
  );
};
