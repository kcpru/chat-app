import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const JoinOuterContainer = styled.div``
const JoinInnerContainer = styled.div``
const Heading = styled.h1``
const JoinInput = styled.input.attrs(() => ({ type: 'text' }))``
const Button = styled.button.attrs(() => ({ type: 'submit' }))``

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <JoinOuterContainer>
      <JoinInnerContainer>
        <Heading>Join</Heading>
        <div>
          <JoinInput
            placeholder="Name"
            onChange={event => setName(event.target.value)}
          ></JoinInput>
        </div>
        <div>
          <JoinInput
            placeholder="Room"
            onChange={event => setRoom(event.target.value)}
          ></JoinInput>
        </div>
        <Link
          onClick={event => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button>Sign In</Button>
        </Link>
      </JoinInnerContainer>
    </JoinOuterContainer>
  )
}

export default Join
