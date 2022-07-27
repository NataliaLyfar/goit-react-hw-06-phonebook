import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from'./contacts/contacts-reducer';
import { middleware } from './middleware';


const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blackList: ['filter'],
};

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
      },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

