import { getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


export const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger];