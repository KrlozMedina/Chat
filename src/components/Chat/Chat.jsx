import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Message from '../Message/Message'
import { MdSend } from 'react-icons/md'

import { useChat } from '../../hooks/useChat'

const Chat = () => {
    const { id } = useParams()
    // const [messages, setMessages] = useState([])
    const {messages, sendMessage} = useChat(id)

    const handleSubmit = (event) => {
      event.preventDefault()
      sendMessage(event.target.message.value) //Aqui esta la falla
    }
    // console.log('desde chat.jsx', event.target.message.value)

    // const handleSubmit = (event) => {
    //   event.preventDefault()
    //   const value = event.target.message.value
    //   const hour = `${new Date().getHours()}:${new Date().getMinutes()}`

    //   // console.log([...messages, {text: value, hour}])
    //   setMessages([...messages, {text: value, hour}])
    // }

  return (
    <div>
      <p>
        Chat con ID {id}
      </p>
      <ol>
        {messages.length === 0 ? 
        <>
          <Message text={"Hola platzi"} hour={'11:00'} sender={true} />
          <Message text={"Hola platzi 2"} hour={'11:02'} sender={false} />
        </> : 
        messages.map(message => <Message {...message} />)}
        
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" name='message' placeholder='Escribir tu mensaje' />
        <button type='submit'><MdSend /></button>
      </form>
    </div>
  )
}

export default Chat