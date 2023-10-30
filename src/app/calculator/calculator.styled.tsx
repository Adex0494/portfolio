import styled from "styled-components";
import { device } from "@/constants/responsiveSizes";
import transition from "@/constants/transition";

export const StyledMain = styled.div<{bckground: string}>`
  background-color: ${({bckground})=>bckground};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${transition};
`
export const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media ${device.tablet}{
    gap: 10px;
  }
  @media ${device.laptopL}{
    gap: 12px
  }
  ${transition};
`
export const HeaderLabel = styled.label<{txtcolor: string}>`
  font-size: 10px;
  font-weight: bold;
  color: ${({txtcolor})=> txtcolor};
  @media ${device.tablet}{
    font-size: 12px;
  }
  @media ${device.laptopL}{
    font-size: 14px;
  }
  ${transition};
`

export const HeaderContainer = styled.div`
  width: 175px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  @media ${device.tablet}{
    width: 200px;
    height: 30px;
    margin-bottom: 8px
  }
  @media ${device.laptopL}{
    width: 300px;
    height: 40px;
    margin-bottom: 12px;
  }
  ${transition};
`

export const DisplayContainer = styled.div`
  width: 175px;
  height: 48px;
  @media ${device.tablet}{
    width: 200px;
    height: 58px;
  }
  @media ${device.laptopL}{
    width: 300px;
    height: 80px;
  }
  ${transition};
`

export const BtnsContainer = styled("div")<{backgroundcolor: string}>`
  width: 175px;
  gap: 8px;
  padding: 8px;
  border-radius: 5px;
  @media ${device.tablet}{
    width: 200px;
    gap: 10px;
    padding: 10px;
  }
  @media ${device.laptopL}{
    width: 300px;
    gap: 12px;
    padding: 12px;
  }
  background-color: ${({backgroundcolor}) => backgroundcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${transition};
`

export const StyledRow = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  height: 20px;
  justify-content: space-around;
  @media ${device.tablet}{
    height: 24px;
    gap: 10px
  }
  @media ${device.laptopL}{
    height: 34px;
    gap: 12px;
  }
  ${transition};
`

export const StyledDisplay = styled.div`
  width: 100%;
  height: 100px;
  ${transition};
`
