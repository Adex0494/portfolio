import styled from "styled-components";
import { device } from "@/constants/responsiveSizes";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: transparent;
  z-index: 10;
`

export const TopLabel = styled.div<{txtcolor: string}>`
  font-weight: 500;
  color: ${({txtcolor})=> txtcolor};
  letter-spacing: 10px;
  font-size: 14px;
  @media ${device.tablet}{
    font-size: 26px;
    letter-spacing: 12px;
  }
  @media ${device.laptopL}{
    font-size: 32px;
    letter-spacing: 16px;
  }
`

export const MiddleLabel = styled.div<{txtcolor: string}>`
  font-weight: 700;
  color: ${({txtcolor})=> txtcolor};
  letter-spacing: 1px;
  font-size: 24px;
  @media ${device.tablet}{
    font-size: 44px;
  }
  @media ${device.laptopL}{
    font-size: 64px;
  }
`

export const BottomLabel = styled.div<{txtcolor: string}>`
  text-wrap: nowrap;
  font-weight: 300;
  color: ${({txtcolor})=> txtcolor};
  letter-spacing: 10px;
  font-size: 12px;
  @media ${device.tablet}{
    font-size: 18px;
    letter-spacing: 14px;
  }
  @media ${device.laptopL}{
    font-size: 20px;
    letter-spacing: 18px;
  }
`