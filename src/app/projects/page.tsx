'use client'

import React from 'react'
import { StyledMain, CardContainer, StyledCalculateIcon, StyledStoreIcon } from './projects.styled'
import ProjectCard from '@/components/projectCard'
import { palette } from '@/constants/palette'

export default function Projects() {
  return (
    <StyledMain>
      <CardContainer>
        <ProjectCard url='/projects/calculator' Icon={StyledCalculateIcon} title='Calculator' description='A simple, responsive calculator with multiple themes' topcolor={palette.main.highlightedTextColor} />
      </CardContainer>
      <CardContainer>
        <ProjectCard url='https://fripickpos.netlify.app/' newTabRoute Icon={StyledStoreIcon} title='Point of Sale' description='A Point-of-Sale application (POS) developed for Fripick.com' topcolor={palette.main.circleShadow} />
      </CardContainer>
    </StyledMain>
  )
}
