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
  StyledFlexMenuItem,
  IconDiv,
} from './header.styled'
import { palette } from '@/constants/palette'
import { useRouter } from 'next/navigation'
import HomeIcon from '@mui/icons-material/Home'
import PortraitIcon from '@mui/icons-material/Portrait'
import CategoryIcon from '@mui/icons-material/Category'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import { setCurrentPage } from '@/globalRedux/slices/pageIndexSlice'
import { RootState } from '@/globalRedux/store'
import { useSelector, useDispatch } from 'react-redux'

const breakpoint = 570

export default function Header() {
  const [windowWidth, setWindowWidth] = useState<number>()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const dispatch = useDispatch()
  const currentPage = useSelector((state: RootState) => state.pageIndex.currentPage )

  console.log(currentPage)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
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
    }

    const debounceHandler = debounce(resizeHandler, 300)
    window.addEventListener('resize', debounceHandler)
    return () => {
      window.removeEventListener('resize', debounceHandler)
    }
  }, [])

  const router = useRouter()
  const NickNameComponent = (
    <NicknameLabel onClick={() => router.push('/')}>
      <p>
        <span style={{ color: palette.main.highlightedTextColor }}>{'{ '}</span>
        dev-ariangel
        <span style={{ color: palette.main.highlightedTextColor }}>{' }'}</span>
      </p>
    </NicknameLabel>
  )

  const menuItemList = [
    {
      Icon: <HomeIcon />,
      label: 'Home',
      route: '/',
    },
    {
      Icon: <PortraitIcon />,
      label: 'About',
      route: '/about',
    },
    {
      Icon: <CategoryIcon />,
      label: 'Projects',
      route: '/calculator',
    },
    {
      Icon: <ContactMailIcon />,
      label: 'Contacts',
      route: '/contacts',
    },
  ]

  const MenuItems = menuItemList.map((menuItem) => (
    <StyledFlexMenuItem isSelected={currentPage === menuItem.route} key={menuItem.label} onClick={() => {
      router.push(menuItem.route)
      dispatch(setCurrentPage(menuItem.route))
      windowWidth !== undefined && windowWidth <= breakpoint && setIsDrawerOpen(false)
    }}>
      <IconDiv>{menuItem.Icon}</IconDiv>
      <MenuLabel
      >
        {menuItem.label}
      </MenuLabel>
    </StyledFlexMenuItem>
  ))

  return (
    <>
      {windowWidth === undefined || windowWidth > breakpoint ? (
        <Main>
          <FlexContainer>{MenuItems}</FlexContainer>
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
            <FlexContainerColumn>{MenuItems}</FlexContainerColumn>
          </StyledDrawer>
        </>
      )}
    </>
  )
}
