import styled from "styled-components";
import { palette } from "@/constants/palette";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import { device, documentDimensions } from "@/constants/responsiveSizes";
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export const Main = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;
  flex-wrap: wrap;
  background-color: ${palette.main.blackBackground};
  height: calc(100vh - ${documentDimensions.mobileS.headerHeight});
  @media ${device.tablet}{
    height: calc(100vh - ${documentDimensions.tablet.headerHeight});
  }
  @media ${device.laptopL}{
    height: calc(100vh - ${documentDimensions.laptopL.headerHeight});
  }
`

export const FlexContainer = styled.div`
  display: flex;
  gap: 32px;
`

export const StyledMailIcon = styled(MailOutlineIcon)`
    color: ${palette.main.highlightedTextColor};
`

export const StyledPlaceIcon = styled(PlaceIcon)`
    color: ${palette.main.highlightedTextColor};
`

export const StyledPhoneIcon = styled(PhoneIcon)`
    color: ${palette.main.highlightedTextColor};
`

export const StyledLinkedInIcon = styled(LinkedInIcon)`
    color: ${palette.main.highlightedTextColor};
`
