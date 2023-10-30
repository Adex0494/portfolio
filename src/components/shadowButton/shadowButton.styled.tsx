import styled from "styled-components";

export const Button = styled.button<{backgroundcolor: string, topshadowcolor: string, bottomshadowcolor: string}>`
  min-height: 32px;
  padding: 8px;
  min-width: 32px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundcolor}) => backgroundcolor};
  box-shadow: -6px -8px 8px ${({topshadowcolor}) => topshadowcolor}, 6px 8px 18px ${({bottomshadowcolor}) => bottomshadowcolor};
  cursor: pointer;
  border: unset;
`