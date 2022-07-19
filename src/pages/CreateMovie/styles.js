import styled from 'styled-components'

export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 116px auto;
grid-template-areas: 
"header"
"content";

>main{
  grid-area: content;
overflow-y: scroll;

}
`;

export const Form = styled.form`
max-width: 1137px;
margin: 40px auto 40px;


>a{
  color: ${({theme}) => theme.COLORS.PINK} ;
}

>h2{
  color: ${({theme}) => theme.COLORS.GRAY_100};
}

>:nth-child(6){
  display: flex;
flex-direction: row;
align-items: flex-start;
padding: 16px;
gap: 24px;

width: 1113px;
height: 88px;

border-radius: 8px;

background-color: ${({theme}) => theme.COLORS.SUPER_BLACK};
}

.input{
  display: flex;
  flex-direction: row;
  gap: 40px;

  margin-block: 40px;
}


.input2{
  display: flex;
  flex-direction: row;
  gap: 40px;

  margin-block: 40px
}
.input2 :nth-child(1){
  background-color: ${({theme}) => theme.COLORS.SUPER_BLACK};
  color: ${({theme}) => theme.COLORS.PINK};
}
`