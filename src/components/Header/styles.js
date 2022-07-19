import styled from "styled-components";

import {Link} from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;


  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: center;
  align-items: center;
  img{
  
  height: 64px;
  width: 64px;
  object-fit: cover;
  border-radius: 50%;

  margin-left: -54px;
  }
`;

export const Profile = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;

>div{
  display: flex;
  flex-direction: column;
}
>div p{
  text-align: right;
  color: ${({theme}) => theme.COLORS.INPUT_GRAY};
  font-size: 14px;
  font-weight: 400;

}
>div h5{
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: ${({theme}) => theme.COLORS.WHITE};
}

>input{
  width: 630px;
  height: 56px;

  padding: 24px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;
}
>h1{
  font-size: 24px;
  color: ${({theme}) => theme.COLORS.PINK};
}
`

