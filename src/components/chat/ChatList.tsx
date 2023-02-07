import React from 'react'
import { ChatListStyle, ChatUser, TextCom } from 'theme'

import { find, man,avatar,beard } from 'assets'


import { memo } from 'react'

type ChatListProps = {
  chats?: any,
  sendChatBodyID: any,
  activeUser?: any
}

const avatars = [man, avatar, beard];

export const ChatListCom: React.FC<ChatListProps> = memo(({ chats, sendChatBodyID, activeUser }) => {

  console.log("Chat List Components is render" , activeUser);

  return (
    <>
      <ChatListStyle className='position-relative'>

        <div className="user-search">
          <TextCom color="white" fontSize="lg" className="mb-2">
            Conversations
          </TextCom>
          <div className="search-box">
            <input type="text"
              className='input-box' placeholder='Search...' />
            <img src={find}
              alt='search-icon' className='searchIcon'
              width="20" />
          </div>

          <div className="active-user d-flex align-items-center justify-content-between mt-3">
            <TextCom color="white" fontSize="sm">
              Recent Chats
            </TextCom>
            <span className='badge bg-primary'>
              {chats?.length}
            </span>
          </div>
        </div>


        <div className="chat-user">
          {
            chats.map((ch: any, index: number) => (
              <ChatUser
                border_radius="10"
                bgColor="light"
                onClick={() => sendChatBodyID(ch.id)}
                key={ch.id}
              >
                {
                  activeUser.find((user: any) => user.id === ch.id)
                    ?
                    <div className="online-dot"></div>
                    :
                    ""
                }
                <div className="left">
                  {
                    ch?.profileImg
                      ?
                      <img src={ch.profileImg} alt="userPhoto" />
                      :
                      <img src={avatars[index]} alt="userPhoto" />
                  }
                </div>
                <div className="right">
                  <TextCom weight="600"
                    fontSize="md"
                  >{ch.name}</TextCom>
                  {
                    activeUser.find((user: any) => user.id === ch.id)
                      ?
                      <TextCom fontSize="sm" weight="500">
                        online
                      </TextCom>
                      :
                      <TextCom fontSize="sm" weight="500">
                        offline
                      </TextCom>
                  }
                </div>
              </ChatUser>
            ))
          }
        </div>

      </ChatListStyle>
    </>
  )
});
