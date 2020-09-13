import React, { useCallback, useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';

const initialExpense = [
  { id: 1, charge: 'asd', amount: 2 },
  { id: 2, charge: '213', amount: 1 },
  { id: 3, charge: 'bb', amount: 3 },
];

function App() {
  const [expense, setExpense] = useState(initialExpense);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi');
    setExpense(expense.concat({ id: uuidv4(), charge, amount }));
  };

  return (
    <>
      <Alert />
      <h1>가계부</h1>
      <main className='App'>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleSubmit={handleSubmit}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
        />
        <ExpenseList expense={expense} />
      </main>
      <h1>
        총 지출 :{' '}
        <span className='total'>
          {' '}
          {expense.reduce((acc, num) => acc + num.amount, 0)}원
        </span>
      </h1>
    </>
  );
}

export default App;
