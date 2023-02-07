// import React, { useState ,useReducer,useEffect} from 'react';
// import client from "../url/index";


// import { useSelector } from 'react-redux';

// type ContextProps = {
//   children?: any
// }

// type Info = {
//   id?: String
//   name?: String,
//   email?: String,
//   message?: any
// }


// const reducer = (state: UserState,action: CountAction) => {
//     const {type,payload} = action;
//     switch(type) {
//       case UserAction.name:
//         return {
//           ...state,
//           name: payload
//         };
//       case UserAction.id:
//         return {
//             ...state,
//             currentUserID: payload
//         };
//       default:
//         return state;
//     }
// }

// const ContextChat = React.createContext<any>(null);


// const ChatContext = () => {

//   const authUserToken = useSelector((state: any) => state.auth.token);

//   const [state,dispatch] = useReducer(reducer,initialState);

//   //State for  Chat Coversation Main Array
//   const [chats, setChats] = useState<Info[]>([]);


//   //State for Other Specific User Message Conversation ,ID and Name
//   const [currentUserMessage, setCurrentUserMessage] = useState<any[]>([]);
//   // const [name, setName] = useState<any>("");
//   // const [receiverID, setReceiverID] = useState<any>("");

//   useEffect(() => {
//       whoToken();
//   },[authUserToken])


//   //Fetching All chat conversation info of Current Login User
//   const whoToken = async () => {
//     try {
//       let response = await client.get(`/chat/access/token/${authUserToken}`);
//       let currentLoginUserConversation = await client.get(
//         `/chat/user/conversations/${response.data[0]?._id}`
//       );
//       dispatch({type: UserAction.name,payload: response.data[0]?.name})
//       dispatch({type: UserAction.id,payload: response.data[0]?._id})
//       setChats(currentLoginUserConversation.data);
//     } catch (error) {
//       console.log("Error From whoToken Function", error);
//     }
//     console.log("Who Token Function")
//   };


//   //Chat Body Of Click Conversation User
//   const sendChatBodyID = (id: any) => {
//     let currentChatUser = chats.filter((data) => {
//       return data.id === id;
//     })

//     setCurrentUserMessage(currentChatUser)
//     // setCurrentUserMessage(currentChatUser[0]?.message);
//     // setReceiverID(currentUserMessage[0]?.id);
//     // setName(currentChatUser[0]?.name)
//     console.log("SendChatBodyID Function")
//   };

//   //New Message Add to Database
//   const createChat = async (text: string, senderID: string, receiverID: string) => {
//     try {
//       let response = await client.post("/chat", {
//         text,
//         senderID,
//         receiverID
//       });
//       return response.data;
//     } catch (error) {
//       console.log("Error From Create Chat Function", error);
//     }
//     console.log("Creatchat Function")
//   }
//   console.log("Context Component is running!")

//   return {
//     createChat,
//     ContextChat,
//     chats,
//     sendChatBodyID,
//     currentUserMessage,
//     setCurrentUserMessage,
//     name,
//     receiverID,
//     setReceiverID,
//     setName,
//     setChats,
//     whoToken,
//     state
//   }
// }

// export const ChatProvider: React.FC<ContextProps> = ({ children }) => {
//   const { createChat, ContextChat, chats, sendChatBodyID, currentUserMessage, setCurrentUserMessage, name, receiverID, setReceiverID,setChats, whoToken,state } = ChatContext();
//   return (
//     <ContextChat.Provider value={{
//       createChat, ContextChat, sendChatBodyID, currentUserMessage, setCurrentUserMessage, name, receiverID, setReceiverID,  setChats, whoToken, chats,state
//     }}>
//       {children}
//     </ContextChat.Provider>
//   );
// }



// export default ChatContext;

export const name = "thantzintun";