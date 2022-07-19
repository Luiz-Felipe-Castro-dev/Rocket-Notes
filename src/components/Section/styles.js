import styled from "styled-components";

export const Container = styled.section`
>h2{
  font-size: 20px;
  display: inline;
}
>span{
  background-color: ${({theme}) => theme.COLORS.PINK_BACKGROUND};
}
`
