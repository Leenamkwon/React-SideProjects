import React, { useEffect, useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : [];

function App() {
  const [expense, setExpense] = useState(initialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({ show: false, type: null, text: '' });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (charge !== '' && amount > 0) {
      if (edit === true) {
        let tempExpenses = expense.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpense(tempExpenses);
        setEdit(false);
        handleAlert({ type: 'success', text: '수정되었습니다 :)' });
      } else {
        setExpense(expense.concat({ id: uuidv4(), charge, amount }));
        handleAlert({ type: 'success', text: '항목이 추가 되었습니다 :)' });
      }
      setCharge('');
      setAmount('');
    } else {
      handleAlert({ type: 'danger', text: '값을 모두 넣어주세요 :(' });
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => setAlert({ show: false }), 750);
  };

  const clearList = () => {
    setExpense([]);
    handleAlert({ type: 'success', text: '모든 항목이 삭제되었습니다 :)' });
  };

  const handleDelete = (id) => {
    const filter = expense.filter((item) => item.id !== id);
    setExpense(filter);
  };

  const handleEdit = (id) => {
    const edit = expense.find((item) => item.id === id);
    setEdit(true);
    setId(id);
    setCharge(edit.charge);
    setAmount(parseInt(edit.amount));
  };

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expense));
  }, [expense]);

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>가계부</h1>
      <main className='App'>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleSubmit={handleSubmit}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          edit={edit}
          id={id}
        />
        <ExpenseList
          expense={expense}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearList={clearList}
        />
      </main>
      <h1>
        총 지출 :{' '}
        <span className='total'>
          {' '}
          {expense.reduce((acc, num) => acc + parseInt(num.amount), 0)}원
        </span>
      </h1>
    </>
  );
}

export default App;
