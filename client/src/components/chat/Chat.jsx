import React, { useEffect, useState } from 'react'

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
    socket.emit('message', msg)
    setMsg("")

  }
  return (
    <div>
        <div>
            <ul>
              {
                messages.map((msg, index) => {
                  return (
                    <li key={index}>
                      <p>{msg.text}</p>
                      <span>{msg.author.name}</span>
                    </li>
                )
              })}

            </ul>
        </div>
        <form onSubmit={(e) => sendMessage(e)}>
            <input type="text" placeholder='message' value={msg} onChange={(event) => setMsg(event.target.value)} />
            <button type='submit'>Send</button>
            <>{userName ? <p>Você: {userName}</p>: <></>}</>
        </form>
    </div>
  )
}
