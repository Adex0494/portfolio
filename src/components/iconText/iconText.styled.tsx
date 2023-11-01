import styled from "styled-components";
import { palette } from "@/constants/palette";
import Typography from '@mui/material/Typography';

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