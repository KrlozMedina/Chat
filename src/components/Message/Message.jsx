import React from 'react'

const Message = ({ text, hour, sender = false }) => {
  return (
    <div>
      <li className={sender ? "sender" : "receiver"}>
        <p>{ text }</p>
        <span>{ hour }</span>
      </li>
    </div>
  )
}

export default Message
