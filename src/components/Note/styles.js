import styled from "styled-components";

export const Container = styled.button`
width: 100%;
background-color: ${({theme}) => theme.COLORS.PINK_BACKGROUND};
color: ${({theme}) => theme.COLORS.WHITE};

border: none;
border-radius: 16px;

padding: 32px;
margin-bottom: 24px;

> h1{
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 24px;

  margin-bottom: 8px;
}

> footer{
  width: 100%;
  display: flex;
  margin-top: 15px;
}
> p{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;

  overflow: hidden;

  text-align: left;

  margin-top: 15px ;
  margin-bottom: 10px;
}
> section svg{
  color: ${({theme}) => theme.COLORS.PINK};
}
> section{
  display: flex;
  align-items: flex-start;
  gap: 6px;
}
`;