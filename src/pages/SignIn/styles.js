import styled from 'styled-components'

import backgroundImg from '../../assets/cinema.png'

export const Container = styled.div`


height: 100vh;

display: flex;
align-items: stretch;

`;

export const Form = styled.form`
padding: 0 136px;

display:flex;
flex-direction: column;
justify-content: center;
align-items: left;

text-align: left;

> h1{
  font-size: 48px;
  color: ${({theme}) => theme.COLORS.PINK};
}

> h2{
  font-size: 24px;
  margin-top: 84px;
  margin-bottom: 48px;
}

> p{
  font-size: 14px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
}
> a{
  margin-top: 42px;
  text-align: center;
}
`;

export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
object-fit: cover;
`;