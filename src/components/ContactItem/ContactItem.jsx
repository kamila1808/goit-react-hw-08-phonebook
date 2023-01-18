import PropTypes from 'prop-types';
import { Button, P } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <P>{name}</P>
      <P>{number}</P>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
