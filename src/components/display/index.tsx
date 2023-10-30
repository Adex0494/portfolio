import React from 'react'
import {Main, StyledTopLabel, StyledBottomLabel} from './display.styled'

export default function Display({label1, label2, labelColor, backgroundcolor} : {label1: string, label2: string, labelColor: string, backgroundcolor: string}) {
  return (
    <Main backgroundcolor={backgroundcolor}>
      {label2 ? <StyledTopLabel fontcolor={labelColor}>{label1}</StyledTopLabel> : label1 && <StyledBottomLabel fontcolor={labelColor}>{label1}</StyledBottomLabel>}
      {label2 &&<StyledBottomLabel fontcolor={labelColor}>{label2}</StyledBottomLabel>}
    </Main>
  )
}
