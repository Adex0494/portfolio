'use client'

import React, {PropsWithChildren} from 'react'
import { Button } from './shadowButton.styled'
// import { useRouter } from 'next/navigation'

type ShadowbuttonProps = {
  backgroundcolor: string,
  topshadowcolor: string,
  bottomshadowcolor: string,
  url: string
}

export default function ShadowButton({backgroundcolor, topshadowcolor, bottomshadowcolor, children, url} : PropsWithChildren<ShadowbuttonProps>) {
  // const router = useRouter()
  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    //router.push(url)
    window.open(url, '_blank')
  }
  return (
    <Button backgroundcolor={backgroundcolor} topshadowcolor={topshadowcolor} bottomshadowcolor={bottomshadowcolor} onClick={(e) => onClickHandler(e)}>
      {children}
    </Button>
  )
}
