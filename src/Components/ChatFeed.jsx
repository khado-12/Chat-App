import React from 'react';
import MessageForm from  './MessageForm';
import TheirMesssage from  './TheirMesssage';
import MyMessage from  './MyMessage';

const ChatFeed = (props  ) => {
  const { chats, activeChat, userName, messages} = props;
  const chat= chats && chats[activeChat]; 
  console.log(chat, userName, messages);
  const renderMessages = () => {
    const keys = object.keys(messages);
    return keys.map((key, index)=>{
  const message = messages [key];
  const lastMessageKey = index=== 0? null:keys[index - 1];
  const isMyMessage = userName === message.sender.username;
  return(
    <div key= {'msg_${index}'} style={{width : '100%'}}>
      <div className='message-block'>
        {
          isMyMessage?
          <MyMessage/>:
          <TheirMesssage/>
        }
      </div>
      <div className='read- ' style={{marginRight: isMyMessage? '18px': '0px',marginLeft: isMyMessage ? '0px' : '68px' }}>
     read-reciepts
      </div>
    </div>
  )
    });
}
    return (
    <div>
      Chat Feed
    </div>
  );
}

export default ChatFeed;
