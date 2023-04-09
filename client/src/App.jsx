import { useState } from 'react'
import './App.css'
import { Join } from './components/join/Join'
import { Chat } from './components/chat/Chat'


function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [userName, setUserName] = useState("")
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])

  return (
    <div className="App">
      {
      isLogged ? 
      <Chat userName={userName} setUserName={setUserName} socket={socket} messages={messages} setMessages={setMessages}/> : 
      <Join isLogged={isLogged} setIsLogged={setIsLogged} userName={userName} setUserName={setUserName} setSocket={setSocket}/>
      }
    </div>
  )
}

export default App
