'use client'

import React from 'react'
import {
  Main,
  FlexContainer,
  FlexColumnContainer,
  BtnsContainer,
  StyledIconContainer,
  StyledCircleContainer,
  ImageContainer,
  Avatar,
  AbsoluteContainer,
} from './page.styled'
import HomeIntroTxt from '@/components/homeIntroTxt'
import ShadowButton from '@/components/shadowButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Photo from '../../public/profile.png'
import Image from 'next/image'
import { palette } from '@/constants/palette'
import ShadowCircle from '@/components/shadowCircle'
import { contacts } from '@/constants/about'

export default function Home() {
  return (
    <Main>
      <ShadowCircle/>
      <FlexContainer>
        <FlexColumnContainer>
          <HomeIntroTxt
            greeting='Hello!'
            nameTxt={`I'm Ariangel`}
            profession='Frontend developer'
          />
          <BtnsContainer>
            <ShadowButton
              backgroundcolor={palette.main.blackBackground}
              topshadowcolor={palette.main.topShadowColor}
              bottomshadowcolor={palette.main.bottomShadowColor}
              url='/'
            >
              <p style={{ color: palette.main.whiteBackground}}>Download CV</p>
            </ShadowButton>
            <ShadowButton
              backgroundcolor={palette.main.blackBackground}
              topshadowcolor={palette.main.topShadowColor}
              bottomshadowcolor={palette.main.bottomShadowColor}
              url={contacts.github.href}
            >
              <StyledCircleContainer>
                <StyledIconContainer>
                  <GitHubIcon style={{ width: '32px', height: '32px' }} />
                </StyledIconContainer>
              </StyledCircleContainer>
            </ShadowButton>
            <ShadowButton
              backgroundcolor={palette.main.blackBackground}
              topshadowcolor={palette.main.topShadowColor}
              bottomshadowcolor={palette.main.bottomShadowColor}
              url={contacts.linkedIn.href}
            >
              <StyledCircleContainer>
                <StyledIconContainer>
                  <LinkedInIcon style={{ width: '32px', height: '32px' }} />
                </StyledIconContainer>
              </StyledCircleContainer>
            </ShadowButton>
          </BtnsContainer>
        </FlexColumnContainer>
        <Avatar>
          <AbsoluteContainer/>
          <ImageContainer>
            <Image
              src={Photo}
              alt='Picture of the author'
              style={{ width: '100%', height: '85%', objectFit: 'contain', borderRadius: '50%' }}
            />
          </ImageContainer>
        </Avatar>
      </FlexContainer>
    </Main>
  )
}
