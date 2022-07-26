import { useDispatch, useSelector } from "react-redux";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import styled from "styled-components";
import {FaUserPlus, FaPhoneAlt} from "react-icons/fa";
import { Notify } from 'notiflix';
import { addContact } from 'redux/contacts/contacts-actions';


const FormContact = styled(Form)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: start;
`;
const Label = styled.label`
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
svg{
    margin-right: ${p => p.theme.space[0]}px;
};
`;
const Input = styled(Field)`
transition: all .3s ease;
margin-bottom: ${p => p.theme.space[1]}px;
padding: 0 ${p => p.theme.space[0]}px;
background: transparent;
border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
height: 35px;
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
const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: ${p => p.theme.space[0]}px;
color: ${p => p.theme.colors.primary};
font-family:inherit;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
background: transparent;
border: none;
border-radius: ${p => p.theme.radii.normal};
transition: all .3s ease;
box-shadow: 0 2px 8px rgba(210, 105, 30, 0.7), inset 0 1px rgba(255, 255, 255, 0.3),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(210, 105, 30, 0.7);
&:hover {
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(129, 12, 110, 0.75), inset 0 1px rgba(255, 255, 255, 0.35),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(129, 12, 110, 0.75);
};
`;
const ErrorText = styled.p`
  color: ${p => p.theme.colors.errorColor};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  margin-bottom: ${p => p.theme.space[1]}px;
`;

const initialValues = {
  name: '',
  number: ''
};

const pattern = /^[\d+][\d()-]{4,14}\d$/i;
const schema = yup.object({
  name: yup.string().required(),
  number: yup.string().required().test({
    test: (value) => pattern.test(value),
  }),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}/>
  );
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const handleSubmit = (values, {resetForm}) => {
    items.find(({name}) => name.toLowerCase() === values.name.toLowerCase()) ?
    Notify.info(`${values.name} is already in contacts`, 
    {position: 'center-top', info: {background: 'rgba(139, 6, 94)'}})
    : dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>  
        <FormContact>
            <Label htmlFor='name'><FaUserPlus/>Name</Label>
            <Input type='text' name='name' id={nanoid()}/>
            <FormError name="name"/>
            <Label htmlFor='number'><FaPhoneAlt/>Number</Label>
            <Input type="tel" name="number" id={nanoid()}/>
            <FormError name="number"/>
            <Button type='submit'>Add contact</Button>
        </FormContact>
    </Formik>
  );
};



