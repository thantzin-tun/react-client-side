import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { authReducer } from './auth';

//For Reduxt Persist
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { getPersistConfig } from 'redux-deep-persist';
//

import thunkMiddleware from 'redux-thunk'

const rootReducer: any = combineReducers({ 
  auth: authReducer
})

const persistConfig = ({
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
})

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware:[thunkMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
})


export const persistor =  persistStore(store);