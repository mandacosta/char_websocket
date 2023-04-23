import { useState } from 'react'
import { Join } from './components/join/Join'
import { Chat } from './components/chat/Chat'
import { GlobalStyle } from './styles/global'


function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [userName, setUserName] = useState("")
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])

  return (
    <>
      <main className="App">
      {
      isLogged ? 
      <Chat userName={userName} setUserName={setUserName} socket={socket} messages={messages} setMessages={setMessages}/> : 
      <Join isLogged={isLogged} setIsLogged={setIsLogged} userName={userName} setUserName={setUserName} setSocket={setSocket}/>
      }
    </main>
    <GlobalStyle/>
    </>
  )
}

export default App
