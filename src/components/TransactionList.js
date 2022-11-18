import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>   
            <ul className="list">
                {transactions.map(transaction => {
                    return (
                        <Transaction transaction={transaction} key={transaction.id} />
                    )
                })}
                
            </ul>   
        </>
    )
}

export default TransactionList