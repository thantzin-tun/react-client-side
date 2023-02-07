import React,{memo, useEffect,useState} from "react";
import { MessageBox, MessageStyle } from "theme/chat/MessageStyle";
import { cirp } from 'assets'
import { TextCom } from "theme";

import {format} from 'timeago.js'

import moment from 'moment'



type MessageComProps = {
    bgColor?: string
    own?: boolean | string
    notown?: boolean | string,
    text?: string
    createdAt?: any,
    time: any,
    ref?: any
}

export const MessageCom: React.FC<MessageComProps> = memo(((props) => {
  const scroll = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    scroll.current?.scrollIntoView({behavior:"smooth"});
  },[props.text])

  return (
    <>
      <MessageStyle {...props}
        ref={scroll}
      >
        <div className="message">
          <div className="avatar">
            <img src={cirp} alt="user" />
          </div>
          <MessageBox {...props}>
              <TextCom weight="600" fontSize="md" color="dark">
                {props.text}
              </TextCom>
              <div className="time d-flex justify-content-end">
              <TextCom weight="500" fontSize="xs" color="white">
                {/* {format(props.time)} */}
                {moment(props.time).startOf('seconds').fromNow()}
              </TextCom>
              </div>
          </MessageBox>
        </div>
      </MessageStyle>
    </>
  )
}))