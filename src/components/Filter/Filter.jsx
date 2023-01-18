import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

 const filterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        onChange={filterChange}
      />
    </Label>
  );
};


