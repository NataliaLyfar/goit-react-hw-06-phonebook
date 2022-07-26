import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact} from 'redux/contacts/contacts-actions';
import { Contact } from "./Contact";


const List = styled.ul`
display: flex;
flex-direction: column;
justify-content: start;
align-items: stretch;
`;

export const ContactsList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filteredContacts = () => items.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));

  const contacts = filteredContacts();

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


