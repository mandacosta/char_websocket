import React from 'react'
import io from 'socket.io-client'

export const Join = ({isLogged, setIsLogged, userName, setUserName, setSocket}) => {

  const login = async (e) => {
    e.preventDefault()
    setIsLogged(true)
    console.log("Entrou")

    const socket = await io.connect('http://localhost:3001')
    socket.emit('username', userName)
    setSocket(socket)

  }

  return (
    <div>
        <form onSubmit={(e) => login(e)}>
            <input 
                type="text" 
                placeholder='user name' 
                value={userName}
                onChange={(event) => setUserName(event.target.value)} 
            />
            <button type='submit'>Start</button>
        </form>
    </div>
  )
}
