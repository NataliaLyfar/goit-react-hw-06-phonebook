import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';


const FilterBox = styled.div`
display: flex;
flex-flow: column;
align-items: center;
width: 350px
`;
const Label = styled.label`
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
  svg{
    margin-right: ${p => p.theme.space[0]}px;
  };
`;
const Input = styled.input`
transition: all .3s ease;
margin-bottom: ${p => p.theme.space[1]}px;
padding: 0 ${p => p.theme.space[0]}px;
background: transparent;
border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
height: 30px;
width: 350px;
color: ${p => p.theme.colors.primary};
font-family:inherit;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
  &:hover, &:focus {
    outline: none;
    background: ${p => p.theme.colors.secondary};
  };
`;

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));
  
  return (
    <FilterBox>
      <Label>
      <FaSearch/>
        Find contacts by name
        <Input type='text' name='filter' 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={filter}
          onChange={onChange}
        />
      </Label>
    </FilterBox>
  );
};

