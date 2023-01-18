import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  background-color: transparent;
  width: 110px;
  color: grey;
  font-weight: 700;
  border:1px solid #dcdcdc;
  &:hover,
  &:focus{
    box-shadow: 3px 3px rgba(0, 0, 255, .2), -1em 0 .4em olive;
    color: olive;
  }
  `

export const P = styled.p`
color: olive;
`;

