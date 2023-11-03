import styled from "styled-components";
import { palette } from "@/constants/palette";
import { device, documentDimensions } from "@/constants/responsiveSizes";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer'


export const Main = styled.main`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.main.blackBackground};
  height: ${documentDimensions.mobileS.headerHeight};
  padding: ${documentDimensions.mobileS.headerTopBottomPadding} ${documentDimensions.mobileS.paddingLeftRight};
  @media ${device.tablet}{
    height: ${documentDimensions.tablet.headerHeight};
    padding: ${documentDimensions.tablet.headerTopBottomPadding} ${documentDimensions.tablet.paddingLeftRight};
  }
  @media ${device.laptopL}{
    height: ${documentDimensions.laptopL.headerHeight};
    padding: ${documentDimensions.laptopL.headerTopBottomPadding} ${documentDimensions.laptopL.paddingLeftRight};
  }
`

export const IconDiv = styled.div`
  color: white;
`

export const StyledMenuDiv = styled.div`
  height: ${documentDimensions.mobileS.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  background-color: ${palette.main.blackBackground};
`

export const StyledFlexMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const StyledMenuIcon = styled(MenuIcon)`
  cursor: pointer;
  color: ${palette.main.whiteBackground};
`

export const StyledDrawer = styled(Drawer)`
  color: ${palette.main.blackBackground};
  ${"& .MuiPaper-root"} {
    background-color: ${palette.main.blackBackground};
    padding: 12px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  @media ${device.tablet}{
    gap: 64px;
  }
`

export const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-top: ${documentDimensions.mobileS.headerHeight};
`

export const MenuLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${palette.main.whiteBackground};
  cursor: pointer;
`
export const NicknameLabel = styled.label`
  font: 16px;
  font-weight: 700;
  color:${palette.main.whiteBackground};
  cursor: pointer;
`