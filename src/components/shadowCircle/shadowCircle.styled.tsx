import styled from "styled-components";
import { palette } from "@/constants/palette";
import { device } from "@/constants/responsiveSizes";

export const Main = styled.main`
  position: absolute;
  bottom:0;
  left:0;
  width: 90vw;
  aspect-ratio: 1/1;
  background-color: ${palette.main.blackBackground}dd;
  border-radius: 50%;
  z-index: 1;
  box-shadow: -8px -6px 8px ${palette.main.circleShadow}, 0px -20px 8px ${palette.main.topShadowColor};
  transform: translate(-35%, 82%);
  @media ${device.tablet}{
    box-shadow: -16px -12px 8px ${palette.main.circleShadow}, 0px -42px 8px ${palette.main.topShadowColor};
  }
`