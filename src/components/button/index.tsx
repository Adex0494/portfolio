'use client'
import React, { useEffect, useCallback, useState } from 'react'
import { StyledButton, StyledFont } from './button.styled'
import { BtnTxtType } from '@/customTypes/types'

interface ButtonI {
  txt: BtnTxtType
  clickHandler: Function
  backgroundcolor: string
  shadowcolor: string
  txtcolor: string
}

export default function Button({
  txt,
  clickHandler,
  backgroundcolor,
  shadowcolor,
  txtcolor,
}: ButtonI) {

  const [isActive, setIsActive] = useState(false)

  const mockBtnClick = () =>{
    setIsActive(true)
    setTimeout(()=>{setIsActive(false)}, 200)
  }

  const keyDownHandler = useCallback((keyEv: KeyboardEvent) => {
    const btnValue = txt
    const key = keyEv.key.toLowerCase()
    if (
      key === btnValue ||
      ((key === 'backspace' || key === 'delete') && btnValue === 'DEL') ||
      (key === 'enter' && btnValue === '=') ||
      (key === 'escape' && btnValue === 'RESET') ||
      (key === '*' && btnValue === 'x')
    ){
      mockBtnClick()
      clickHandler(txt)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [keyDownHandler])
  return (
    <StyledButton
      isactive={isActive}
      type='button'
      backgroundcolor={backgroundcolor}
      shadowcolor={shadowcolor}
      txtcolor={txtcolor}
      onClick={(e) => {
        e.pageX && e.pageY && clickHandler(txt) //making sure onclick was triggered by pressing a button, not by pressing "Enter"
      }}
    >
      <StyledFont>{txt}</StyledFont>
    </StyledButton>
  )
}
