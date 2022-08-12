import React from 'react'
import { useParams } from 'react-router-dom'
import Message from '../Message/Message'

const Chat = () => {
    const { id } = useParams()
  return (
    <div>
      <p>
        Chat con ID {id}
      </p>
      <ol>
        <Message text={"Hola platzi"} hour={'11:00'} sender={true} />
        <Message text={"Hola platzi 2"} hour={'11:02'} sender={false} />

      </ol>
    </div>
  )
}

export default Chat