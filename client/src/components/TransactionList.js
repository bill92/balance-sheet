import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions }) => {

  const renderedList = transactions.map((transaction) => {
    return <Transaction key={transaction._id} transaction={transaction} />
  });

  return (
    <div>
      <div className="ui segment">
        Balance:
      </div>

      <div className="ui relaxed divided list">
        {renderedList}
      </div>

    </div>
  )

}

export default TransactionList;
