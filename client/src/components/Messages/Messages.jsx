import React from 'react'
// import styled from 'styled-components'
import ScrollToBottom from 'react-scroll-to-bottom'
// import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'

import Message from '../Message/Message'

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom>
      {messages.map((message, index) => (
        <div key={index}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  )
}

export default Messages
