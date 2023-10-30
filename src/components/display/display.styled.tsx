import styled from "styled-components";
import { device } from "@/constants/responsiveSizes";
import transition from "@/constants/transition";

export const Main = styled.div<{backgroundcolor: string}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  @media ${device.tablet}{
    gap: 4px
  }
  @media ${device.laptopL}{
    gap: 6px;
  }
  align-items: flex-end;
  justify-content: center;
  padding: 12px;
  background-color: ${({backgroundcolor})=> backgroundcolor};
  border-radius: 5px;
  ${transition};
`

export const StyledTopLabel = styled.div<{fontcolor: string}>`
  color: ${({fontcolor})=>fontcolor};
  font-weight: bolder;
  font-size: 10px;
  @media ${device.tablet}{
    font-size: 12px;
  }
  @media ${device.laptopL}{
    font-size: 16px;
  }
  ${transition};
`
export const StyledBottomLabel = styled.div<{fontcolor: string}>`
  color: ${({fontcolor})=>fontcolor};
  font-weight: bolder;
  font-size: 14px;
  @media ${device.tablet}{
    font-size: 18px;
  }
  @media ${device.laptopL}{
    font-size: 26px;
  }
  ${transition};
`