import styled from "styled-components";

export const Container = styled.span`
padding: 5px 16px;
border-radius: 8px;
margin-right: 10px;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
color: ${({theme}) => theme.COLORS.WHITE};
`;