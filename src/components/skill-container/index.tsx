import React from 'react'
import { Container } from './skill-container.styled'

const SkillContainer = (props: {isFilled: boolean}) => {
    return <Container color={props.isFilled ? '#b82424' : '#eee'}/>
}

export default SkillContainer