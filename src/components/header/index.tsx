'use client'

import React, { useEffect, useState } from 'react'
import {
  Main,
  MenuLabel,
  NicknameLabel,
  FlexContainer,
  StyledMenuIcon,
  FlexContainerColumn,
  StyledDrawer,
  StyledMenuDiv,
} from './header.styled'
import { palette } from '@/constants/palette'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const debounce = (fn: Function, ms: number) => {
      let timer: any
      return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn()
        }, ms)
      }
    }

    const resizeHandler = () => {
      setWindowWidth(window.innerWidth)
      console.log(window.innerWidth)
    }

    const debounceHandler = debounce(resizeHandler, 300)
    window.addEventListener('resize', debounceHandler)
    return () => {
      window.removeEventListener('resize', debounceHandler)
    }
  }, [])

  const router = useRouter()
  const NickNameComponent = <NicknameLabel onClick={() => router.push('/')}>
  <p>
    <span style={{ color: palette.main.highlightedTextColor }}>
      {'{ '}
    </span>
    dev-ariangel
    <span style={{ color: palette.main.highlightedTextColor }}>
      {' }'}
    </span>
  </p>
</NicknameLabel>

  return (
    <>
      {windowWidth > 570 ? (
        <Main>
            <FlexContainer>
              <MenuLabel onClick={() => router.push('/')}>Home</MenuLabel>
              <MenuLabel onClick={() => router.push('/about')}>About</MenuLabel>
              <MenuLabel onClick={() => router.push('/calculator ')}>
                Projects
              </MenuLabel>
              <MenuLabel onClick={() => router.push('/contacts')}>
                Contacts
              </MenuLabel>
            </FlexContainer>
            {NickNameComponent}
        </Main>
      ) : (
        <>
          <StyledMenuDiv>
            <StyledMenuIcon onClick={() => setIsDrawerOpen(true)} />
            {NickNameComponent}
          </StyledMenuDiv>
          <StyledDrawer

            anchor='left'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <FlexContainerColumn>
              <MenuLabel onClick={() => {router.push('/'); setIsDrawerOpen(false)}}>Home</MenuLabel>
              <MenuLabel onClick={() => {router.push('/about'); setIsDrawerOpen(false)}}>About</MenuLabel>
              <MenuLabel onClick={() => {router.push('/calculator '); setIsDrawerOpen(false)}}>
                Projects
              </MenuLabel>
              <MenuLabel onClick={() => {router.push('/contacts'); setIsDrawerOpen(false)}}>
                Contacts
              </MenuLabel>
            </FlexContainerColumn>
          </StyledDrawer>
        </>
      )}
    </>
  )
}
