'use client'
import React from 'react'
import {
  CircleContainer,
  MovingCircle,
  RowContainer,
  NumbersContainer,
  ColumnContainer,
  StyledLabel,
} from './switchButton.styled'

export default function SwitchButton({
  backgroundcolor,
  circlecolor,
  position,
  clickHandler,
  txtcolor,
}: {
  backgroundcolor: string
  circlecolor: string
  position: number
  clickHandler: Function
  txtcolor: string
}) {
  return (
    <ColumnContainer>
      <NumbersContainer>
        <StyledLabel txtcolor={txtcolor}>1</StyledLabel>
        <StyledLabel txtcolor={txtcolor}>2</StyledLabel>
        <StyledLabel txtcolor={txtcolor}>3</StyledLabel>
      </NumbersContainer>
      <RowContainer>
        <StyledLabel txtcolor={txtcolor}>Theme</StyledLabel>
        <CircleContainer
          onClick={() => clickHandler()}
          backgroundcolor={backgroundcolor}
        >
          <MovingCircle circlecolor={circlecolor} position={position} />
        </CircleContainer>
      </RowContainer>
    </ColumnContainer>
  )
}
