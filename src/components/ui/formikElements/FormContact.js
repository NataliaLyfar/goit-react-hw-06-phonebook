import styled from "styled-components";
import { Input } from "../Input";
import {Form, Field} from 'formik';

export const FormContact = styled(Form)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: start;
`;

export const FormInput = Input.withComponent(Field);