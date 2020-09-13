import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expense }) => {
  return (
    <div>
      <ul className='list'>
        {expense.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>
      {expense.length > 0 && <button className='btn'>전체 목록 지우기</button>}
    </div>
  );
};

export default ExpenseList;
