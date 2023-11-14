'use client'

import React from 'react'
import { StyledMain, CardContainer, StyledCalculateIcon } from './projects.styled'
import ProjectCard from '@/components/projectCard'
import { palette } from '@/constants/palette'

export default function Projects() {
  return (
    <StyledMain>
      <CardContainer>
        <ProjectCard Icon={StyledCalculateIcon} title='Calculator' description='A simple, responsive calculator with multiple themes' topcolor={palette.main.highlightedTextColor} />
      </CardContainer>
    </StyledMain>
  )
}
