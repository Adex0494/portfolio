import styled from "styled-components";
import { palette } from "@/constants/palette";

export const StyledMain = styled.main<{topcolor: string}>`
    border-top: ${({topcolor}) => `4px solid ${topcolor}` };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1vw;
    width: 100%;
    height: 100%;
    background-color: ${palette.main.whiteBackground};
    border-radius: 16px;
    box-shadow: 0px 5px 8px grey;
    cursor: pointer;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 6px;
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: end;
`

export const StyledTitle = styled.label`
    font-size: 24px;
    font-weight: 700;
    color: ${palette.main.blackBackground};
`

export const StyledDescription = styled.label`
    font-size: 16px;
    font-weight: 300px;
    color: ${palette.main.lightText}
`