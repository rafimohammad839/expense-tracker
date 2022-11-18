import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);

    const income = amount.filter(item => item > 0)
        .reduce((acc, curr) => acc + curr, 0)
        .toFixed(2);
    
    const expenses = amount.filter(item => item < 0)
        .reduce((acc, curr) => acc + curr, 0) * -1
        .toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>${expenses}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses