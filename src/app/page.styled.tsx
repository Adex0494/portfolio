import styled from "styled-components";
import { palette } from '../constants/palette'
import { device, documentDimensions } from "@/constants/responsiveSizes";

export const Main = styled.main`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - ${documentDimensions.mobileS.headerHeight});
  background-color: ${palette.main.blackBackground};
  padding: 22px ${documentDimensions.mobileS.paddingLeftRight};

  @media ${device.tablet}{
    height: calc(100vh - ${documentDimensions.tablet.headerHeight});
    padding: 44px ${documentDimensions.tablet.paddingLeftRight};
  }
  @media ${device.laptopL}{
    height: calc(100vh - ${documentDimensions.laptopL.headerHeight});
    padding: 64px ${documentDimensions.laptopL.paddingLeftRight};
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media ${device.tablet}{
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding-left: 0px;
  gap: 24px;
  justify-content: center;
  align-items: start;
  margin-top: 25px;

  @media ${device.tablet}{
    height: 100%;
    margin-top: -10vh;
  }
`

export const BtnsContainer = styled.div`
  display: flex;
  gap: 12px;
  z-index: 10;
`
export const StyledCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  background-color: ${palette.main.whiteBackground};
  border-radius: 50%;
  overflow: hidden;
`

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: ${palette.main.blackBackground};
  color: ${palette.main.whiteBackground};
  width: 32px;
  height: 32px;
`

export const ImageContainer = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
`

export const Avatar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: -10vw;
  width: 50%;
  aspect-ratio: 1/1;
  background-color: ${palette.main.blackBackground};
  overflow: hidden;
`

export const AbsoluteContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 85%;
  background: linear-gradient(transparent 80%, ${palette.main.blackBackground} 89%);
`