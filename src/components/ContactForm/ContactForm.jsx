import { Formik } from 'formik';
import { initialValues, schema } from "constants";
import { nanoid } from 'nanoid';
import { FaUserPlus, FaPhoneAlt } from "react-icons/fa";
import { Label } from "components/ui";
import { PrimaryButton } from "components/ui/buttons";
import { FormError, FormContact, FormInput } from "components/ui/formikElements";
import { useSubmitForm } from 'redux/contacts/contacts-customHooks';



export const ContactForm = () => {
const handleSubmit = useSubmitForm();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>  
        <FormContact>
            <Label htmlFor='name'><FaUserPlus/>Name</Label>
            <FormInput type='text' name='name' id={nanoid()}/>
            <FormError name="name"/>
            <Label htmlFor='number'><FaPhoneAlt/>Number</Label>
            <FormInput type="tel" name="number" id={nanoid()}/>
            <FormError name="number"/>
            <PrimaryButton type='submit'>Add contact</PrimaryButton>
        </FormContact>
    </Formik>
  );
};



