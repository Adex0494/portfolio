'use client'

import React from 'react'
import { StyledMain, FlexContainer, StyledTitle, StyledDescription, IconContainer } from './projectCard.styled'
import { ComponentType } from 'react'
import { useRouter } from 'next/navigation'

type ProjectCardType = {
    topcolor: string, 
    title: string, description: string,
    Icon: ComponentType,
    url: string,
    newTabRoute?: boolean,
    }

export default function ProjectCard({topcolor, title, description, Icon, url, newTabRoute} : ProjectCardType) {
  const route = useRouter()

  const onClickHandler = () => {
    if (newTabRoute){
      window.open(url, '_blank')
    }else{
      route.push(url)
    }
  }
  return (
    <StyledMain onClick={onClickHandler} topcolor={topcolor}>
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
