import styled from 'styled-components';

export const Label = styled.label`
  margin: 10px;
  display: flex;
  flex-direction: column;
  color: olive;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  margin-top: 15px;
  margin-bottom: 35px;
  padding: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  color: grey;
  border:1px solid #dcdcdc;
  &:hover,
  &:focus {
    box-shadow: 5px 5px rgba(0, 0, 255, 0.2), -1em 0 0.4em olive;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  background-color: transparent;
  color: grey;
  font-weight: 700;
	border:1px solid #dcdcdc;
  &:hover,
  &:focus {
    box-shadow: 5px 5px rgba(0, 0, 255, 0.2), -1em 0 0.4em olive;
    color: olive;
  }
`;
