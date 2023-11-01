'use client'

import React from 'react'
import { Main, FlexContainer, StyledPlaceIcon, StyledMailIcon, StyledPhoneIcon, StyledLinkedInIcon} from './contacts.styled'
import IconText from '@/components/iconText'
import { contacts, fullName } from '@/constants/about'

export default function Contacts() {
  <IconText href={contacts.email.href} text={contacts.email.text} Icon={StyledMailIcon}/>

  return (
    <Main>
      <FlexContainer>
        <IconText href={contacts.email.href} text={contacts.email.text} Icon={StyledMailIcon}/>
        <IconText href={contacts.linkedIn.href} text={fullName} Icon={StyledLinkedInIcon} blankTarget/>
      </FlexContainer>
      <FlexContainer>
        <IconText href={contacts.tel.href} text={contacts.tel.text} Icon={StyledPhoneIcon}/>
        <IconText href={contacts.location.href} text={contacts.location.text} Icon={StyledPlaceIcon} blankTarget/>
      </FlexContainer>
    </Main>
  )
}
