import styled from "styled-components";
import { device } from "@/constants/responsiveSizes";
import transition from "@/constants/transition";

const width = {
    default: '30px',
    tablet: '40px',
    laptopL: '50px'
}

export const ColumnContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2px;
  @media ${device.tablet}{
    gap: 4px;
  }
  @media ${device.laptopL}{
    gap: 6px;
  }
  ${transition};
`

export const RowContainer = styled.div`
  display: flex;
  gap: 12px;
  @media ${device.tablet}{
    gap: 16px;
  }
  @media ${device.laptopL}{
    gap: 20px;
  }
  align-items: center;
  ${transition};
`

export const CircleContainer = styled.div<{backgroundcolor: string}>`
  width: ${width.default};
  height: 10px;
  @media ${device.tablet}{
    width: ${width.tablet};
    height: 14px;
  }
  @media ${device.laptopL}{
    width: ${width.laptopL};
    height: 20px;
  }
  background-color: ${({backgroundcolor})=> backgroundcolor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${transition};
`

export const StyledLabel = styled.label<{txtcolor: string}>`
  font-size: 8px;
  color: ${({txtcolor})=> txtcolor};
  @media ${device.tablet}{
    font-size: 10px;
  }
  @media ${device.laptopL}{
    font-size: 12px;
  }
  ${transition};
`

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${width.default};
  font-weight: bold;
  @media ${device.tablet}{
    width: ${width.tablet};
  }
  @media ${device.laptopL}{
    width: ${width.laptopL};
  }
  ${transition};
`

export const MovingCircle = styled.div<{circlecolor: string, position: number}>`
  background-color: ${({circlecolor})=> circlecolor};
  height: 70%;
  aspect-ratio: 1/1;
  width: auto;
  border-radius: 50%;
  transform: ${({position})=> position === 0 ? 'translate(-100%, 0)' : position === 2 ? 'translate(100%, 0)' : 'unset'};
  ${transition};
`