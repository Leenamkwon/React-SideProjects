import React from 'react';
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({
  charge,
  amount,
  handleSubmit,
  handleCharge,
  handleAmount,
  edit,
  item,
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
            type='number'
            className='form-control'
            id='amount'
            name='amount'
            placeholder='예: 2000'
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type='submit' className='btn'>
        {edit ? '수정하기' : '추가하기'} <MdSend />
      </button>
    </form>
  );
};

export default ExpenseForm;
