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
> a svg{
  fill: ${({theme}) => theme.COLORS.PINK};
  transform: translateY(2px);
}
> h1{
  font-size: 48px;
  color: ${({theme}) => theme.COLORS.PINK};
}

> h2{
  font-size: 24px;

  margin-block: 48px;
}

> p{
  font-size: 14px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
}
>a{
  text-align: center;
  margin-top: 42px;
}
`;

export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
object-fit: cover;
`;