// import rootReducer from './contacts/contacts-reducers'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice'
import reviewsReducer  from './reviews/reviews-slice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfigAuth = {
    key: 'auth',
    storage,
    // whitelist: ['token']
    blacklist: ['message']

};


const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
        auth: persistReducer(persistConfigAuth, authReducer)
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});


const persistor = persistStore(store);
export { store, persistor }