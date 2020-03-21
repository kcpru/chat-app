import React from 'react'
import styled from 'styled-components'
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'

const InfoBarWrapper = styled.div``
const LeftInnerContainer = styled.div``
const Header3 = styled.h3``
const RightInnerContainer = styled.div``

const InfoBar = ({ room }) => {
  return (
    <InfoBarWrapper>
      <LeftInnerContainer>
        <IoIosCheckmarkCircle />
        <Header3>{room}</Header3>
      </LeftInnerContainer>

      <RightInnerContainer>
        <a href="/">
          <IoIosCloseCircle />
        </a>
      </RightInnerContainer>
    </InfoBarWrapper>
  )
}

export default InfoBar
