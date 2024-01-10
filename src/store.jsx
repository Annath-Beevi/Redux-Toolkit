import accountReducer from "./Components/Features/Account/accountSlice"
import { customerReducer } from "./Components/Features/Customers/customerSlice"
import { persistStore, persistReducer } from "redux-persist"

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer,
    }
})

export default store