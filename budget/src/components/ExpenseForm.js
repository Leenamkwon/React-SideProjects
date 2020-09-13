import React from 'react';
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({
  charge,
  amount,
  handleSubmit,
  handleCharge,
  handleAmount,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>구입</label>
          <input
            type='text'
            className='form-control'
            id='charge'
            name='charge'
            placeholder='예: 차량 렌트'
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>지출 비용</label>
          <input
            type='text'
            className='form-control'
            id='amount'
            name='amount'
            placeholder='예: 3000 "원은 생략"'
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type='submit' className='btn'>
        등록 <MdSend />
      </button>
    </form>
  );
};

export default ExpenseForm;
