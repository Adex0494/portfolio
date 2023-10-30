import styled from "styled-components";
import { device } from "@/constants/responsiveSizes";
import transition from "@/constants/transition";

export const StyledButton = styled("button")<{backgroundcolor: string, shadowcolor: string, txtcolor: string, isactive: boolean}>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${({backgroundcolor, isactive, shadowcolor}) => isactive ? shadowcolor : backgroundcolor};
  box-shadow: 0 2px ${({shadowcolor})=> shadowcolor};
  color: ${({txtcolor})=> txtcolor};
  border: unset;
  opacity: ${({isactive}) => isactive ? 0.9 : 1};
  &:hover {
    background-color: ${({backgroundcolor}) => backgroundcolor};
    opacity: 0.5;
  }
  &:active {
    background-color: ${({shadowcolor}) => shadowcolor};
    opacity: 0.9;
  }
  ${transition};
`

export const StyledFont = styled.div`
  font-size: 12px;
  @media ${device.tablet}{
    font-size: 14px;
  }
  @media ${device.laptopL}{
    font-size: 16px;
  }
  font-weight: bolder;
  ${transition};
`