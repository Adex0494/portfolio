import styled from "styled-components";
import { device, documentDimensions } from "@/constants/responsiveSizes";
import { palette } from "@/constants/palette";
import CalculateIcon from '@mui/icons-material/Calculate';

export const StyledMain = styled.main`
  background-color: ${palette.main.whiteBackground};
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${documentDimensions.mobileS.headerHeight});
  @media ${device.tablet}{
    height: calc(100vh - ${documentDimensions.tablet.headerHeight});
  }
  @media ${device.laptopL}{
    height: calc(100vh - ${documentDimensions.laptopL.headerHeight});
  }
`

export const StyledCalculateIcon = styled(CalculateIcon)`
  color: ${palette.main.highlightedTextColor};
  height: 64px;
  width: 64px;
`

export const CardContainer = styled.div`
  width: 20vw;
  aspect-ratio: 4/3;
`