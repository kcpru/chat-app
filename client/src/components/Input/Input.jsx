import React from 'react'
import styled from 'styled-components'
// import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'

const Form = styled.form``
const MessageInput = styled.input``
const SendButton = styled.button``

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <Form>
      <MessageInput
        type="text"
        placeholder="Aa..."
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
      <SendButton onClick={event => sendMessage(event)}>Send</SendButton>
    </Form>
  )
}

export default Input
