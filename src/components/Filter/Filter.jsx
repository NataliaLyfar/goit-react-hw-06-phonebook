import {FaSearch} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { Label, Input, Box } from "components/ui";
import { getFilter } from "redux/contacts/contacts-selectors";


export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  return (
    <Box>
      <Label>
      <FaSearch/>
        Find contacts by name
        <Input type='text' name='filter' 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </Label>
    </Box>
  );
};

