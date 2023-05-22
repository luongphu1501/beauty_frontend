import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import CartSlice from './CartSlice'
import UserSlice from './UserSlice';

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: ['omitedPart']
};

const reducer = combineReducers({
    cart: CartSlice.reducer,
    user: UserSlice.reducer
});


const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
}
);


export default store


