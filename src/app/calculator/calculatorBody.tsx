'use client'
import React from 'react'
import Button from '@/components/button'
import Display from '@/components/display'
import SwitchButton from '@/components/switchButton'
import { StyledContainer, BtnsContainer, StyledMain, StyledRow, DisplayContainer, HeaderContainer, HeaderLabel  } from './calculator.styled'

interface theme {
    background: string,
    display: string,
    regularBtn: string,
    regularBtnShadow: string,
    clearBtn: string,
    clearBtnShadow: string,
    equalBtn: string,
    equalBtnShadow: string,
    themeSelectorBackground: string,
    regularBtnText: string,
    clearBtnText: string,
    displayText: string,
    equalBtnText: string,
    btnsContainer: string
}

interface calculatorI {
  label1: string,
  result: string,
  onBtnClickHandler: Function,
  theme: theme,
  themeIndex: 0 | 1 | 2,
  themeChangeHandler: Function
}


export default function CalculatorBody({label1, result, onBtnClickHandler, theme, themeIndex, themeChangeHandler}: calculatorI) {

  return (
    <StyledMain bckground={theme.background}>
      <StyledContainer>
        <HeaderContainer>
          <HeaderLabel txtcolor={theme.displayText}>Calculator</HeaderLabel>
          <SwitchButton backgroundcolor={theme.themeSelectorBackground} circlecolor={theme.equalBtn} position={themeIndex} clickHandler={themeChangeHandler} txtcolor={theme.displayText}/>
        </HeaderContainer>
        <DisplayContainer>
          <Display label1={label1} label2={result} backgroundcolor={theme.display} labelColor={theme.displayText}/>
        </DisplayContainer>
        <BtnsContainer backgroundcolor={theme.btnsContainer}>
          <StyledRow>
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='1' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='2' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='3' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.clearBtn} shadowcolor={theme.clearBtnShadow} txtcolor={theme.clearBtnText} txt='DEL' clickHandler={onBtnClickHandler} />
          </StyledRow>
          <StyledRow>
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='4' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='5' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='6' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='+' clickHandler={onBtnClickHandler} />
          </StyledRow>
          <StyledRow>
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='7' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='8' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='9' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='-' clickHandler={onBtnClickHandler} />
          </StyledRow>
          <StyledRow>
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='.' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='0' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='/' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.regularBtn} shadowcolor={theme.regularBtnShadow} txtcolor={theme.regularBtnText} txt='x' clickHandler={onBtnClickHandler} />
          </StyledRow>
          <StyledRow>
            <Button backgroundcolor={theme.clearBtn} shadowcolor={theme.clearBtnShadow} txtcolor={theme.clearBtnText} txt='RESET' clickHandler={onBtnClickHandler} />
            <Button backgroundcolor={theme.equalBtn} shadowcolor={theme.equalBtnShadow} txtcolor={theme.equalBtnText} txt='=' clickHandler={onBtnClickHandler} />
          </StyledRow>
        </BtnsContainer>
      </StyledContainer>
    </StyledMain>
  )
}
