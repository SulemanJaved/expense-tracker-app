import React, { useContext } from 'react';

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {   

    const { transactions } = useContext(GlobalContext);
    const transactionAmount = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmount.reduce((acc, item) => (acc += item), 0).toFixed(2); 

    return (
        <div>
            <h4>Current Balance</h4>
            <h1>PKR {balance}</h1>
        </div>
    )
}
