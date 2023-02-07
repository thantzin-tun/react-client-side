import React from 'react'
import { ChatSideBarStyle } from 'theme'

import { avatar} from 'assets'

type ChatSideBarProps = {
    bol: any,
    sendChatBodyID: any,
    chats?: any,
    setBol: any,
    activeUser: any
}

export const ChatSideBarCom: React.FC<ChatSideBarProps> = ({bol,sendChatBodyID,chats,setBol,activeUser}) => {

    const autoClose = () => {
        setBol(!bol);
    }

  return (
    <>
      <ChatSideBarStyle bol={bol}>
        {
          chats.map((data: any,index: number) => (
          <div className="avatar" key={index}
          onClick={() => {sendChatBodyID(data.id);autoClose()}}
          >
            <img src={avatar} alt="userAvatar" />
            <div className="name">
              {data.name.split("")[0].toUpperCase()}
            </div>
            {
                 activeUser.find((user: any) => user.id === data.id)
                 ?
                <div className="dot"></div>
                :
                ""
                }
          </div>
          ))
        }
      </ChatSideBarStyle>
    </>
  )
}