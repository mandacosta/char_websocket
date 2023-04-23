import React, {useRef} from 'react'
import io from 'socket.io-client'
import { StyledDiv } from './styled'
import img from "../../assets/join_chat.jpg"

export const Join = ({isLogged, setIsLogged, userName, setUserName, setSocket}) => {

  const submit = useRef(null)

  const login = async (e) => {
    e.preventDefault()
    setIsLogged(true)
    console.log("Entrou")

    const socket = await io.connect('http://localhost:3001')
    socket.emit('username', userName)
    setSocket(socket)

  }

  const verifyInput = (e) => {
    if(e.target.value !== ''){
      submit.current.disabled = false
      
    }else{
      submit.current.disabled = true
    }
    
    setUserName(e.target.value)
    return

  }

  return (
    <StyledDiv>
        <div className='header'>
          <h2>Enjoy the convenience of <span className='highlight'>communicating</span> easily and for free </h2>
          <figure><img src={img} alt="" /></figure>
        </div>
        <form onSubmit={(e) => login(e)}>
            <input 
                type="text" 
                placeholder='Enter your name ...' 
                value={userName}
                onChange={(e) => verifyInput(e)} 
            />
            <button type='submit' ref={submit} disabled>S t a r t</button>
        </form>
    </StyledDiv>
  )
}
