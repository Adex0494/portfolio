import styled from 'styled-components'

export const Container = styled.div`
    width: 50px;
    height: 10px;
    background-color: ${({color}) =>color};
    transform: skew(-15deg);
`