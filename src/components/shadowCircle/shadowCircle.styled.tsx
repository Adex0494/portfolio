import styled from "styled-components";
import { palette } from "@/constants/palette";

export const Main = styled.main`
  position: absolute;
  bottom:0;
  left:0;
  width: 90vw;
  aspect-ratio: 1/1;
  background-color: ${palette.main.blackBackground};
  border-radius: 50%;
  z-index: 1;
  box-shadow: -16px -12px 8px ${palette.main.circleShadow}, 0px -42px 8px ${palette.main.topShadowColor};
  transform: translate(-35%, 82%);
`