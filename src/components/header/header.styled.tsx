import styled from "styled-components";
import { palette } from "@/constants/palette";
import { device, documentDimensions } from "@/constants/responsiveSizes";
import MenuIcon from '@mui/icons-material/Menu';

export const StyledMenuIcon = styled(MenuIcon)`
  cursor: pointer;
  color: ${palette.main.whiteBackground};
`

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

export const FlexContainer = styled.div`
  display: flex;
  gap: 64px;
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