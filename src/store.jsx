import accountReducer from "./Components/Features/Account/accountSlice"
import { customerReducer } from "./Components/Features/Customers/customerSlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import { configureStore } from '@reduxjs/toolkit'

const persistConfig = {
    key: "root",
    storage,
}

const PersistedAccountReducer = persistReducer(persistConfig, accountReducer)

const PersistedCustomerReducer = persistReducer(persistConfig, customerReducer)

const store = configureStore({
    reducer: {
        account: PersistedAccountReducer,
        customer: PersistedCustomerReducer,
    }
})

const persistor = persistStore(store)


export { store, persistor}