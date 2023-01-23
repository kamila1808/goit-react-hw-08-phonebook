import styled from 'styled-components';

export const ListItem = styled.li`
  min-width: 450px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  box-shadow: 0px -5px 5px -5px rgba(0, 0, 255, 0.2) inset;
  margin-left: 20px;
  &:hover,
  &:focus {
    box-shadow: 3px 3px rgba(0, 0, 255, 0.2), -1em 0 0.4em olive;
    color: olive;
  }
`;

export const List = styled.ul`
  max-width: 450px;
  margin-top: 10px;
`;
