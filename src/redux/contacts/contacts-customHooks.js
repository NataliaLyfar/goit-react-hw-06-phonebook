import { useDispatch, useSelector } from "react-redux";
import { Notify } from 'notiflix';
import { addContact } from 'redux/contacts/contacts-actions';
import { getItems } from "redux/contacts/contacts-selectors";


export const useSubmitForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  
  const handleSubmit = (values, {resetForm}) => {
    const isContactExist = items.find(({name}) => name.toLowerCase() === values.name.toLowerCase());
    if(isContactExist){
      return Notify.info(`${values.name} is already in contacts`, 
      {position: 'center-top', info: {background: 'rgba(139, 6, 94)'}});
    };
    dispatch(addContact(values));
    resetForm();
  };
  
  return handleSubmit;
};