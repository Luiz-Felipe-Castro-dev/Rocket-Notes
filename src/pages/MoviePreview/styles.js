import styled from 'styled-components'

export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;

grid-template-rows: 116px auto;
grid-template-areas: 
"header"
"content";

> main{
  grid-area: content;
  overflow-y: scroll;
  padding: 64px 0;
}

`;

export const Content = styled.div`
max-width: 1000px;
margin: 0 auto;

display: flex;
flex-direction: column;

> a{
  display: flex;
  align-items: center;
}

> a svg{
  color: ${({theme}) => theme.COLORS.PINK};
  margin-right: 10px;
}

> section{
  margin-block: 40px;
}

> section svg{
  color: ${({theme}) => theme.COLORS.PINK};
  margin-right: 10px;
  
}

> section h2{
  font-weight: 500;
  font-size: 36px;
  color: ${({theme}) => theme.COLORS.WHITE};
  margin-right: 30px;

}

> section h3{
  font-size: 16px;
  font-weight: 400;
  color: ${({theme}) => theme.COLORS.WHITE};
  margin-top: 26px;
}

> section h3 img{
  width:16px ;
  height: 16px;
  border-radius: 50%;
}


> section div{
  margin-top: 30px;
}
`;

