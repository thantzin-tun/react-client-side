import React, { useEffect, useRef, useState } from 'react'
import { ChatBodyStyle, ChatHeaderBar, TextCom } from 'theme'

import { sms, chat, sendmessage } from 'assets'
import { MessageCom } from './Message'

import * as io from 'socket.io-client';

import moment from 'moment';
import { getToken } from 'service';

type ChatBodyProps = {
  currentUserID?: string
  currentUserMessage?: any,
  friendID?: string
  createChat?: any
  setCurrentUserMessage?: any,
  state?: any,
  friendName?: any,
  value?: any,
  activeUser: any
}

const socketServer = io.connect("http://localhost:4000");

export const ChatBodyCom: React.FC<ChatBodyProps> = ({ friendID, createChat, currentUserMessage, setCurrentUserMessage, state, friendName,  activeUser }) => {

  //Send Message and Receiver Message
  const [newMessage, setNewMessage] = useState<string>("");

  const inputRef = useRef<any>(null);

  const token = getToken();

  const [returnMessage, setReturnMesssage] = useState<string>("");

  // useEffect(() => {
  //   socketServer.emit("add-user", state.currentUserID);
  //   socketServer.on("get-user", (active: any) => {
  //     setActiveUser(active);
  //   })
  // }, []);


  //Me Sending New Message To other person and Show ChatBox
  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      return;
    }
    socketServer.emit("send_message_to_another", { message: inputRef.current.value, senderID: state.currentUserID, receiverID: friendID });
    setCurrentUserMessage([...currentUserMessage, {
      text: inputRef.current.value,
      senderID: state.currentUserID,
      receiverID: friendID,
      createdAt: moment().format()
    }])
    createChat(inputRef.current.value, state.currentUserID, friendID);
    console.log("Handle Submit is running");
    inputRef.current.value = "";
  }

  //Another User Send Me and Show Message
  useEffect(() => {
    socketServer.on("returnMessage", ({ message, senderID, receiverID }) => {
      setReturnMesssage(message);

      console.log("Return Message from server is ", message, senderID, receiverID);

      setCurrentUserMessage([...currentUserMessage, {
        text: message,
        senderID: senderID,
        receiverID: receiverID,
        createdAt: moment().format()
      }])
    })
    setNewMessage("");
  }, [currentUserMessage,returnMessage]);

  // console.log("The current user Message Array is", currentUserMessage);
  return (
    <>
      {
        currentUserMessage.length > 0
          ?
          <ChatBodyStyle>

            <ChatHeaderBar
              bgColor="white"
            >
              <div className="user-info d-flex align-items-center">
                <div className="left">
                  <img src="" alt="userPhoto" />
                </div>
                <div className="right">
                  <TextCom weight="600"
                    fontSize="lg"
                  >
                    {
                      friendName
                    }
                  </TextCom>
                  {
                    activeUser.find((user: any) => user.id === friendID)
                      ?
                      <>
                        <div className="online-dot"></div>
                        <TextCom weight="500"
                          fontSize="md"
                          color="main"
                        >Active Now</TextCom>
                      </>
                      :
                      <TextCom weight="500"
                        fontSize="md"
                        color="main"
                      >offline</TextCom>
                  }
                </div>
              </div>
              <img src={chat} alt="chatIcon" className='ms-logo' />
            </ChatHeaderBar>

            <div className="message-container"
            >

              {
                currentUserMessage && currentUserMessage.map((data: any, index: number) => (
                  <MessageCom bgColor='main'
                    own={data.senderID !== state.currentUserID ? false : true}
                    key={index}
                    text={data.text}
                    time={data.createdAt}
                  />
                ))
              }
            </div>

            <form onSubmit={handelSubmit}>
              <div className="chat-bar">
                <div className="emoji">
                </div>
                <input type="text" placeholder="Type a message..." className='box'
                  // value={newMessage}
                  // onChange={(e) => setNewMessage(e.target.value)}
                  ref={inputRef}
                />
                <button type='submit' className='sendIcon'
                >
                  <img src={sendmessage} alt="sendIcon" />
                </button>
              </div>
            </form>
          </ChatBodyStyle>
          :
          <div className="no-chat w-100 d-flex flex-column justify-content-center align-items-center p-0 m-0">
            <img src={sms} alt="noSMS" width="90px" className="mb-2" />
            <TextCom
              fontSize="xxxxxl"
              color="dark"
            >
              Say something with your friends!
            </TextCom>
          </div>
      }
    </>

  )
}