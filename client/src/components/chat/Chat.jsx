import React, { useEffect, useState } from 'react'
import { StyledContainer, StyledMsg } from './style'

export const Chat = ({userName, setUserName, socket, messages, setMessages}) => {
  const [msg, setMsg] = useState("")

  useEffect(()=>{

    if(socket){
      socket.on('receive_message', data => {
        setMessages((current) => [...current, data])
      })
  
      return () => socket.off('receive_message')
    }

  }, [socket])
  
  const sendMessage = (e) => {
    e.preventDefault()

    //Emitindo um evento de mensage,
    setMessages((current) => [...current, {text: msg, mine: true, author: {name: userName}}])
    socket.emit('message', msg)
    setMsg("")

  }
  return (
    <StyledContainer>
        <ul>
          {
            messages.map((msg, index) => {
              return (
                <StyledMsg key={index} mine={msg.mine}>
                  <p>{msg.text}</p>
                  <span>{msg.author.name}</span>
                </StyledMsg>
            )
          })}
        </ul>
        <form onSubmit={(e) => sendMessage(e)}>
            <input type="text" placeholder='message' value={msg} onChange={(event) => setMsg(event.target.value)} />
            <button type='submit'>Send</button>
            <>{userName ? <p>Você: {userName}</p>: <></>}</>
        </form>
    </StyledContainer>
  )
}
