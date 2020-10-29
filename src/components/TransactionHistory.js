import React, { useContext } from 'react';

// Import Transaction
import { Transaction } from './Transaction';

// Import the Global Context
import { GlobalContext } from '../context/GlobalState';

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    console.log(transactions);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list"> 
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))} 
            </ul>
        </div>
    )
}
