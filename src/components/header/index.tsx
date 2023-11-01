'use client'

import React from 'react'
import { Main, MenuLabel, NicknameLabel, FlexContainer } from './header.styled'
import { palette } from '@/constants/palette'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  return (
    <Main>
      <div>
        <NicknameLabel onClick={()=> router.push('/')}>
          <p><span style={{color: palette.main.highlightedTextColor}}>{'{ '}</span>dev-ariangel<span style={{color: palette.main.highlightedTextColor}}>{' }'}</span></p>
        </NicknameLabel>
      </div>
      <div>
        <FlexContainer>
          <MenuLabel onClick={()=> router.push('/')}>Home</MenuLabel>
          <MenuLabel onClick={()=> router.push('/about')}>About</MenuLabel>
          <MenuLabel onClick={()=> router.push('/calculator ')}>Projects</MenuLabel>
          <MenuLabel onClick={()=> router.push('/contacts')}>Contacts</MenuLabel>
        </FlexContainer>
      </div>
    </Main>
  )
}
