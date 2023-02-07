import React, { useEffect, useState, useReducer} from "react";
import { Outlet ,useLocation} from "react-router-dom";

import { ChatListCom,HeaderCom} from "components";

import client from "../../url/index";

import { LoadingCom } from "components";
import { ChatBodyCom } from "components/chat/ChatBody";

import { getToken } from "service";

import * as io from 'socket.io-client';


type HomeProps = {
  nested?: any
  value?: any
};

type Info = {
  id?: String
  name?: String,
  email?: String,
  profileImg?: any
  message?: any
}

enum UserAction {
  name = 'name',
  id = 'id',
  profileImg = 'profileImg'
}

//UseReducer Action
interface CountAction {
  type: UserAction;
  payload?: any;
}

//UseReducer State
interface UserState {
  name: string;
  currentUserID: string;
}

const initialState = {
  name: "",
  currentUserID: "",
  profileImg: ""
};

const reducer = (state: UserState, action: CountAction) => {
  const { type, payload } = action;
  switch (type) {
    case UserAction.name:
      return {
        ...state,
        name: payload
      };
    case UserAction.id:
      return {
        ...state,
        currentUserID: payload
      };
      case UserAction.profileImg:
      return {
        ...state,
        profileImg: payload
      };
    default:
      return state;
  }
}

const socketServerOne = io.connect("http://localhost:4000");

export const Home: React.FC<HomeProps> = () => {

  const location = useLocation();

  // const login_User_Token = useSelector((state: any) => state.auth.token?.token);

  const token = getToken();

  const [chats, setChats] = useState<Info[]>([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const [currentUserMessage, setCurrentUserMessage] = useState<any>([]);
  const [friendName, setFriendName] = useState<any>("");
  const [friendID, setFriendID] = useState<any>("");
  const [friendImg,setFriendImg] = useState<string>("");

  const [activeUser, setActiveUser] = useState<any>([]);


  //Fetch Login  Use Info with Token
  const whoToken = async () => {
    try {
      let response = await client.get(`/chat/access/token/${token}`);
      let currentLoginUserConversation = await client.get(
        `/chat/user/conversations/${response.data[0]?._id}`
      );
      setChats(currentLoginUserConversation.data);
      dispatch({ type: UserAction.name, payload: response.data[0]?.name })
      dispatch({ type: UserAction.id, payload: response.data[0]?._id })
      dispatch({ type: UserAction.profileImg, payload: response.data[0]?.profileImg })
      socketServerOne.emit("add-user", response.data[0]?._id);
    } catch (error) {
      console.log("Error From whoToken Function", error);
    }
  };


  const sendChatBodyID = (id: any) => {
    let currentChatUser = chats.filter((data:any) => {
      return data.id === id;
    })
    setCurrentUserMessage(currentChatUser[0]?.message);
    setFriendName(currentChatUser[0]?.name);
    setFriendID(currentChatUser[0]?.id);
    // setFriendImg(currentChatUser[0]?.profileImg);
  };

  const createChat = async (text: string, senderID: string, receiverID: string) => {
    try {
      let response = await client.post("/chat", {
        text,
        senderID,
        receiverID
      });
      return response.data;
    } catch (error) {
      console.log("Error From Create Chat Function", error);
    }
  }

  useEffect(() => {
      whoToken();
  },[currentUserMessage])

  useEffect(() => {
    socketServerOne.on("get-user", (active) => {
        console.log("This active user function is running" ,active);
        setActiveUser(active)
    })
  }, []);

  return (
              <>
                <HeaderCom state={state} chats={chats} sendChatBodyID={sendChatBodyID} activeUser={activeUser}/>
                <div className="container-fluid p-0 mr-top main_background user-select-none">
                  <div className="row m-0">
                    <div className="col-sm-3 m-0 p-0">
                      <ChatListCom chats={chats} sendChatBodyID={sendChatBodyID} activeUser={activeUser} />
                    </div>
                    <div className="col-md-9 col-sm-12 p-0">
                      <ChatBodyCom currentUserMessage={currentUserMessage} setCurrentUserMessage={setCurrentUserMessage} friendID={friendID} createChat={createChat} state={state} friendName={friendName} activeUser={activeUser}/>
                    </div>
                  </div>
                </div>
                <Outlet />
    </>
  );
};

