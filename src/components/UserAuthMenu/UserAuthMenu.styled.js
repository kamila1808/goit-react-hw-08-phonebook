import styled from 'styled-components';

export const Div = styled.div`
display: flex;
justify-content: end;
align-items: center;
margin-right: 15px;
`

export const P = styled.p`
margin-right: 15px;
color: rgba(0, 0, 255, 0.6);
font-weight: 600;

`

export const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  color: grey;
  background-color: transparent;
  border:1px solid #dcdcdc;
  cursor: pointer;


  &:hover,
  &:focus {
    box-shadow: 5px 5px rgba(0, 0, 255, 0.2), -1em 0 0.4em olive;
  }
`