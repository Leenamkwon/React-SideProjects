import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expense, handleDelete, handleEdit, clearList }) => {
  return (
    <div>
      <ul className='list'>
        {expense.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expense.length > 0 && (
        <button className='btn' onClick={clearList}>
          전체 목록 지우기
        </button>
      )}
    </div>
  );
};

export default ExpenseList;
