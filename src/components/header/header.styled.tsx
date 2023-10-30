import styled from "styled-components";
import { palette } from "@/constants/palette";
import { device } from "@/constants/responsiveSizes";

export const Main = styled.main`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.main.blackBackground};
  height: 24px;
  padding: 0 22px;
  @media ${device.tablet}{
    height: 32px;
    padding: 0 44px;
  }
  @media ${device.laptopL}{
    height: 64px;
    padding: 0 88px;
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