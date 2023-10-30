import React from 'react'
import { Main, TopLabel, MiddleLabel, BottomLabel } from './homeIntroTxt.styled'
import { Noto_Sans_Osmanya } from 'next/font/google'
import { palette } from '@/constants/palette'

const nso = Noto_Sans_Osmanya({ subsets: ['latin'], weight: '400' })

export default function HomeIntroTxt({greeting, nameTxt, profession} : {greeting: string, nameTxt: string, profession: string}) {
  return (
    <Main>
      <TopLabel txtcolor={palette.main.whiteBackground}>{greeting}</TopLabel>
      <MiddleLabel className={nso.className} txtcolor={palette.main.whiteBackground}>{nameTxt}</MiddleLabel>
      <BottomLabel txtcolor={palette.main.highlightedTextColor}>{profession}</BottomLabel>
    </Main>
  )
}
