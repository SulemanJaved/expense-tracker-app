import React, { useContext } from 'react';

// Import the Global Context
import { GlobalContext } from '../context/GlobalState'

// Import Transaction
import { Transaction } from './Transaction'

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list"> 
                {transactions.map(transaction => (
                    <Transaction key= {transaction.id} transaction={transaction}/>
                    )
                )} 
                <li className="minus">
                    Project 1 Salaries
                    <span>PKR 500</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
