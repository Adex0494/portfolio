import React from 'react'
import { IconTextContainer, StyledTypography } from './iconText.styled'
import { ComponentType } from 'react'

type IconTextType = {
  blankTarget?: boolean,
  href: string,
  Icon: ComponentType,
  text: string
}

export default function IconText({blankTarget, href, Icon, text}: IconTextType) {
  return (
    <IconTextContainer
    target={blankTarget ? '_blank' : undefined}
    href={href}
  >
    <Icon />
    <StyledTypography>
      {text}
    </StyledTypography>
  </IconTextContainer>
  )
}
