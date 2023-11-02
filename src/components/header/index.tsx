'use client'

import React, { useEffect, useState } from 'react'
import {
  Main,
  MenuLabel,
  NicknameLabel,
  FlexContainer,
  StyledMenuIcon,
} from './header.styled'
import { palette } from '@/constants/palette'
import { useRouter } from 'next/navigation'
import Drawer from '@mui/material/Drawer'

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
  return (
    <>
      {windowWidth > 570 ? (
        <Main>
          <div>
            <NicknameLabel onClick={() => router.push('/')}>
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
          </div>
          <div>
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
          </div>
        </Main>
      ) : (
        <>
          <StyledMenuIcon onClick={() => setIsDrawerOpen(true)} />
          <Drawer
            anchor='left'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <div onClick={() => setIsDrawerOpen(false)}>
              <p style={{ color: 'black' }}>hola</p>
            </div>
          </Drawer>
        </>
      )}
    </>
  )
}
