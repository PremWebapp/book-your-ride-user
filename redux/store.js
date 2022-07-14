import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    counter: counterSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})
export const persistor  = persistStore(store)