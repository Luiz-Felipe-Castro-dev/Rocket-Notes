import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({theme}) => theme.COLORS.INPUT_BLACK};
  color: ${({theme}) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 40px;
  border-radius: 10px;

  padding: 10px;

  &::placeholder{
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }

`;