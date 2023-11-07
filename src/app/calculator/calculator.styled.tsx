import styled from "styled-components";
import { device, documentDimensions } from "@/constants/responsiveSizes";
import transition from "@/constants/transition";
import { palette } from "@/constants/palette";

export const StyledMain = styled.div<{bckground: string}>`
  background-color: ${({bckground})=>bckground};
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${transition};
  height: calc(100vh - ${documentDimensions.mobileS.headerHeight});
  @media ${device.tablet}{
    height: calc(100vh - ${documentDimensions.tablet.headerHeight});
  }
  @media ${device.laptopL}{
    height: calc(100vh - ${documentDimensions.laptopL.headerHeight});
  }
`
export const StyledContainer = styled("div")`
  padding: 6px;
  border-radius: 6px;
  box-shadow: -1px -1px 8px ${palette.main.topShadowColor}, 1px -1px 8px ${palette.main.topShadowColor}, -1px 1px 8px ${palette.main.topShadowColor}, 1px 1px 8px ${palette.main.topShadowColor};
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
  font-size: 12px;
  font-weight: bold;
  color: ${({txtcolor})=> txtcolor};
  @media ${device.tablet}{
    font-size: 14;
  }
  @media ${device.laptopL}{
    font-size: 16px;
  }
  ${transition};
`

export const HeaderContainer = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  @media ${device.tablet}{
    width: 250px;
    height: 35px;
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
  width: 200px;
  height: 58px;
  @media ${device.tablet}{
    width: 250px;
    height: 70px;
  }
  @media ${device.laptopL}{
    width: 300px;
    height: 80px;
  }
  ${transition};
`

export const BtnsContainer = styled("div")<{backgroundcolor: string}>`
  width: 200px;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  @media ${device.tablet}{
    width: 250px;
    gap: 11px;
    padding: 11px;
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
  gap: 10px;
  width: 100%;
  height: 24px;
  justify-content: space-around;
  @media ${device.tablet}{
    height: 28px;
    gap: 11px
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
