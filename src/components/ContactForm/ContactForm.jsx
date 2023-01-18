import { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Form, Input, Button } from './ContactForm.styled';
import Notiflix from 'notiflix';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const submitHandler = event => {
    event.preventDefault();
    const FoundContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (FoundContact) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number}));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Label>
        {' '}
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        {' '}
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <Button >Add contact</Button>
    </Form>
  );
};

ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
