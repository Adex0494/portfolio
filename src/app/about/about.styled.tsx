import styled from 'styled-components'
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import { palette } from '@/constants/palette';

const breakpoints = {
    mobileXl: '750px',
    tabletSm: '960px',
    tabletMd: '1100px'
}

export const Main = styled.main`
    width: 100vw;
    background-color: ${palette.main.blackBackground};
    padding-top: 32px;
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
    color: #b82424;
    border-bottom: solid 2px #b82424;
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
    border-left: 2px solid rgba(220,220,220,0.5);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 24px;
    @media(max-width: ${breakpoints.mobileXl}){
        border-left: unset;
        align-items: flex-start;
        width: auto;
        padding-left: 0;
    }
`

export const BodySection = styled.section`
    padding-left: 64px;
    padding-right: 64px;
    @media(max-width: ${breakpoints.tabletMd}){
        padding-left: 32px;
        padding-right: 32px;
    }
    @media(max-width: ${breakpoints.tabletSm}){
        padding-left: 16px;
        padding-right: 16px;
    }
    @media(max-width: ${breakpoints.mobileXl}){
        padding-left: 8px;
        padding-right: 8px;
    }
`

export const InnerContainer = styled.div`
    border-top: 2px solid rgba(220,220,220,0.5);
    display: flex;
    @media (max-width: ${breakpoints.mobileXl}){
        flex-direction: column;
        align-items: left;
    }
`

export const StyledMailIcon = styled(MailOutlineIcon)`
    color: #b82424;
`

export const StyledPlaceIcon = styled(PlaceIcon)`
    color: #b82424;
`

export const StyledPhone = styled(PhoneIcon)`
    color: #b82424;
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