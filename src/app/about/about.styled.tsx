import styled from 'styled-components'
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import { palette } from '@/constants/palette';
import { device, documentDimensions } from '@/constants/responsiveSizes';
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const breakpoints = {
    mobileXl: '750px',
    tabletSm: '960px',
    tabletMd: '1100px'
}

export const Main = styled.main`
    width: 100vw;
    padding-bottom: 12px;
    background-color: ${palette.main.blackBackground};
    padding-top: ${documentDimensions.laptopL.paddingTopBottom};
    padding-left: ${documentDimensions.mobileS.paddingLeftRight};
    padding-right: ${documentDimensions.mobileS.paddingLeftRight};
    @media ${device.tablet}{
        padding-left: ${documentDimensions.tablet.paddingLeftRight};
        padding-right: ${documentDimensions.tablet.paddingLeftRight};
    }
    @media ${device.laptopL}{
        padding-left: ${documentDimensions.laptopL.paddingLeftRight};
        padding-right: ${documentDimensions.laptopL.paddingLeftRight};
    }
`

export const Link = styled.a`
    color: inherit;
    text-decoration: none;
`

export const SkillFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
`

export const SkillLevelContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const RightInnerContainer = styled.div`
    @media(max-width: ${breakpoints.mobileXl}){
        display: flex;
        flex-direction: column;
        align-items: left;
    }
`
export const StyledTypographyLink = styled(Typography)`
    margin-bottom: 20px !important;
    color: ${palette.main.highlightedTextColor};
    border-bottom: solid 2px ${palette.main.highlightedTextColor};
    width: fit-content;
    line-height: 1 !important;

`

export const StyledTypographySkill = styled(Typography)`
    width: fit-content;
    line-height: 1 !important;
    font-weight: bold !important;
    color: ${palette.main.whiteBackground};
`


export const ContentSection = styled.section`
    padding-top: 44px;
`

export const DescriptionContainer = styled.div`
    padding-left: 16px;
    padding-right: 16px;
`
export const DescriptionText = styled.div`
    flex-wrap: wrap;
`


export const LeftContainer = styled.div`
    width: 65%;
    margin-right: 24px;
    @media(max-width: ${breakpoints.mobileXl}){
        width: auto;
        margin-right: 0;
    }
`

export const RightContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 24px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    @media(max-width: ${breakpoints.mobileXl}){
        border-left: unset;
        align-items: flex-start;
        width: auto;
        padding-left: 0;
    }
    @media ${device.tablet}{
        box-shadow: -2px -1px 8px ${palette.main.circleShadow}, 0px -2px 8px ${palette.main.topShadowColor};
    }
`

export const BodySection = styled.section`
    padding: 0;
`

export const InnerContainer = styled.div`
    display: flex;
    padding-left: 12px;
    border-radius: 16px;
    @media (max-width: ${breakpoints.mobileXl}){
        flex-direction: column;
        align-items: left;
    }
    box-shadow: -2px -1px 8px ${palette.main.circleShadow}, 0px -2px 8px ${palette.main.topShadowColor};
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

export const SubHeader = styled.section`
    display: flex;
    margin-right: 128px;
    gap: 32px;
    width: auto;
    padding-bottom: 24px;
    justify-content: space-between;
    @media (max-width: ${breakpoints.tabletMd}){
        margin-right: 0px;
    }
    @media (max-width: ${breakpoints.tabletSm}){
        flex-direction: column;
        align-items: center;
        margin-right: 0px;
    }
    @media (max-width: ${breakpoints.mobileXl}){
        align-items: flex-start;
    }

`

export const IconTextContainer = styled.a`
    display: flex;
    gap: 12px;
    color: inherit;
    text-decoration: none;
`

export const StyledTypography = styled(Typography)`
    display: flex;
    margin-bottom: 12px !important;
    color: ${palette.main.whiteBackground};
`

export const StyledCompanyTypography = styled(Typography)`
    width: fit-content;
    border-bottom: 1px solid ${palette.main.circleShadow};
    display: flex;
    margin-bottom: 12px !important;
    color: ${palette.main.whiteBackground};
`

export const StyledDescTypography = styled(Typography)`
    color: ${palette.main.whiteBackground};
    font-size: 14px;
`

export const StyledDivBulletPoint = styled.div`
    display: flex;
    margin-bottom: 12px !important;
    color: ${palette.main.whiteBackground};
`

export const BulletPointTypography = styled(Typography)`
    height: 24px;
    display: flex;
    align-items: center;
    margin-right: 4px !important;
    color: ${palette.main.whiteBackground};
`