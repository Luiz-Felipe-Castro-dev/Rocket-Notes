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
  padding:50px 120px;
  overflow-y: scroll;
}
> div{}
`;

export const Content = styled.div`
  max-width: 1137px;

  >div{
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 38px;
  }
  >div a{
    width: 207px;
  }
`;