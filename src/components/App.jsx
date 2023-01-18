import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <h1>LOADING</h1>}
      <ContactList/>
    </div>
  );
};

export default App;
