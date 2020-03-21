import React from 'react'
import styled from 'styled-components'
import ReactEmoji from 'react-emoji'

const MessageContainer = styled.div`` // justifyStart -> background Light | JustifyEnd -> background Blue
const SentText = styled.p``
const MessageBox = styled.div``
const MessageText = styled.p``

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false

  const trimmedName = name.trim().toLowerCase()

  if (user === trimmedName) isSentByCurrentUser = true

  return isSentByCurrentUser ? (
    /* JustifyEnd -> background Blue */
    <MessageContainer>
      <SentText>{trimmedName}</SentText>
      <MessageBox>
        <MessageText>{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
    </MessageContainer>
  ) : (
    /* JustifyStart -> background Light */
    <MessageContainer>
      <MessageBox>
        <MessageText>{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
      <SentText>{user}</SentText>
    </MessageContainer>
  )
}

export default Message
