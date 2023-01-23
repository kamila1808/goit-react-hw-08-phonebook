import styled from 'styled-components';

export const Form = styled.form`
margin-left: 20px;
margin-top: 25px;
`

export const Label = styled.label`
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  color: olive;
`;

export const Input = styled.input`
margin-top: 5px;
  max-width: 450px;
  padding: 10px;
  border-radius: 10px;
  color: grey;
  border: 1px solid #dcdcdc;
  &:hover,
  &:focus {
    box-shadow: 5px 5px rgba(0, 0, 255, 0.2), -1em 0 0.4em olive;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  color: grey;
  background-color: transparent;
  border:1px solid #dcdcdc;
  cursor: pointer;
  font-size: 15px;

  &:hover,
  &:focus {
    box-shadow: 5px 5px rgba(0, 0, 255, 0.2), -1em 0 0.4em olive;
  }
`
