import { useDispatch, useSelector } from "react-redux";
import { deleteContact} from 'redux/contacts/contacts-actions';
import { Contact } from "./Contact";
import { List } from "components/ui";
import { getContacts } from "redux/contacts/contacts-selectors";


export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <List>
      {contacts.map(({id, name, number}) => (
        <Contact key={id} id={id}
            name={name} number={number}
            onDelete={id => dispatch(deleteContact(id))}
        />)
      )}
    </List>
  );
};


