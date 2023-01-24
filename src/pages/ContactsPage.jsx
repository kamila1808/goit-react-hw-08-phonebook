import { useSelector } from 'react-redux';

import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';


export const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);




  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && <h1>LOADING</h1>}
      <ContactList />
    </>
  );
};
