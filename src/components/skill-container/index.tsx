import React from 'react'
import { Container } from './skill-container.styled'
import { palette } from '@/constants/palette'

const SkillContainer = (props: {isFilled: boolean}) => {
    return <Container color={props.isFilled ? palette.main.highlightedTextColor : palette.main.whiteBackground}/>
}

export default SkillContainer