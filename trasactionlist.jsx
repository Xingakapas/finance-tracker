import React from 'react';

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div>
      <h2>Daftar Transaksi</h2>
      {transactions.length === 0 ? (
        <p>Belum ada transaksi</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <div>
                <span>{transaction.description}</span>
                <span style={{ color: transaction.type === 'income' ? 'green' : 'red' }}>
                  {transaction.type === 'income' ? '+' : '-'}
                  {transaction.amount.toLocaleString('id-ID')}
                </span>
              </div>
              <button onClick={() => onDeleteTransaction(transaction.id)}>
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;