import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

const AddTransaction = () => {
    const { addTransaction, transactions } = useContext(GlobalContext);

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        let newId = Math.random() * 100000;

        let newTransaction = {
            id: newId,
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        localStorage.setItem('transactions', JSON.stringify(newTransaction))
        setText("")
        setAmount(0)
    }

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions))
    }, [transactions])

    return (
        <>
            <h3>Add new transaction</h3>   
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Enter text...'/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder='Enter amount...'/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction