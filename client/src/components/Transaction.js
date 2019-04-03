import React from 'react';

const Transaction = ({ transaction }) => {

  return (
    <div className="item">
      <div className="content">
        <div className="header">{transaction.transaction}</div>
        <div className="content">{transaction.description}</div>
        <div className="content">{transaction.amount}</div>
      </div>
    </div>
  )

}

export default Transaction;
