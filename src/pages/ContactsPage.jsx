import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';

export const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && <h1>LOADING</h1>}
      <ContactList />
    </>
  );
};
