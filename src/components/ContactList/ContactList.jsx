import { PhonebookContactsList } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from '../Contact/Contact';

const ContactList = () => {

const contacts = useSelector(selectFilteredContacts);

  return (
    <PhonebookContactsList>
      {contacts.map(contact => (
        <Contact contact={contact}
          key={contact.id}
        />
      ))}
    </PhonebookContactsList>
  );
};

export default ContactList;