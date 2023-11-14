'use client'

import React from 'react'
import { StyledMain, FlexContainer, StyledTitle, StyledDescription, IconContainer } from './projectCard.styled'
import { ComponentType } from 'react'

type ProjectCardType = {
    topcolor: string, 
    title: string, description: string,
    Icon: ComponentType
    }

export default function ProjectCard({topcolor, title, description, Icon} : ProjectCardType) {
  return (
    <StyledMain topcolor={topcolor}>
        <FlexContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
        </FlexContainer>
        <IconContainer>
            <Icon/>
        </IconContainer>
    </StyledMain>
  )
}
