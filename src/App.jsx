import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList"
import Searchbox from "./components/Searchbox/Searchbox";
import { PhonebookContainer, PhonebookHeadings, PhonebookContacts, PhonebookContactsHeading } from "./App.styled";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';

import Loader from './components/Loader/Loader';
import { selectLoading, selectError } from './redux/contactsSlice';

import ErrorMessage from './components/ErrorMessage/ErrorMessage'


function App() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <PhonebookContainer>
      <PhonebookHeadings>Phonebook</PhonebookHeadings>
      <ContactForm />
      <PhonebookContacts>
        <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>
        <Searchbox />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        <ContactList />
        <ToastContainer />
      </PhonebookContacts>
    </PhonebookContainer>
  );
}

export default App;