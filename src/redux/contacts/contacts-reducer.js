import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from './contacts-actions';
import { nanoid } from 'nanoid';
import { initialState } from "constants";


const addContactReducer = (state, {payload: {name, number}}) => [...state, {id: nanoid(), name, number}];
const deleteContactReducer = (state, {payload}) => state.filter(({id}) => id !== payload);

const items = createReducer(initialState, {
  [addContact]: addContactReducer,
  [deleteContact]: deleteContactReducer,
});

const filter = createReducer('', {
  [changeFilter]: (_, {payload}) => payload,
});

export default combineReducers({
  items,
  filter,
});