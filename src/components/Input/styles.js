

import styled from "styled-components";


export const Container = styled.div`
width:100%;
display: flex;
align-items: center;

margin-bottom: 10px;
border-radius: 10px;


background-color:   ${({theme}) => theme.COLORS.INPUT_BLACK};

> input{
  height: 56px;
  border-radius: 10px;

  padding: 12px;

  color: ${({theme}) => theme.COLORS.WHITE } ;
  background-color:   ${({theme}) => theme.COLORS.INPUT_BLACK}; 
  border: 0;

}
>svg{
  margin-left: 16px;
  height: 20px;
}
`