import React, { createContext, useReducer } from 'react';

// Import the Reducer
import AppReducer from './AppReducer'

// Creat the initial state
const initialState = {
    transactions: [
        {id: 1, description: "Income 1", transactionAmount: 1000},
        {id: 2, description: "Epense 1", transactionAmount: -100},
        {id: 3, description: "Income 2", transactionAmount: 2000},
        {id: 4, description: "Epense 2", transactionAmount: -1200}

    ]
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Gloabl Context
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>

    )
}