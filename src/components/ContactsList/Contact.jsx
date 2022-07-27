import PropTypes from 'prop-types';
import styled from "styled-components";
import { IconButton } from 'components/ui/buttons';
import {FaUserMinus} from "react-icons/fa";


const ListItem = styled.li`
display: flex;
align-items: center;
margin-bottom: ${p => p.theme.space[1]}px;
box-shadow: 0px 14px 5px -5px ${p => p.theme.colors.tertiary};
`;

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <ListItem key={id} id={id}>
      {name}: {number}
      <IconButton
        onClick={() => onDelete(id)}>
        <FaUserMinus/>
      </IconButton>
    </ListItem> 
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func
};

