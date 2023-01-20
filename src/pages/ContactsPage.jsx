import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';


export const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
  
    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

      return (
        <>
        <ContactForm/>
        <Filter />
        {isLoading && <h1>LOADING</h1>}
        <ContactList/>
        </>
      )
}