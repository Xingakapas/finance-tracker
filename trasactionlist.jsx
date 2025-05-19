// TransactionList.js
import React from 'react';

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  // Format ke Rupiah
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(amount);
  };

  // Format tanggal
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="transaction-list">
      <h2>Daftar Transaksi</h2>
      {transactions.length === 0 ? (
        <p>Belum ada transaksi</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={transaction.type}>
              <div className="transaction-info">
                <span className="date">{formatDate(transaction.date)}</span>
                <span className="description">{transaction.description}</span>
                <span className="amount">
                  {formatCurrency(transaction.amount)}
                </span>
                <span className="type">
                  {transaction.type === 'income' ? 'Pemasukan' : 'Pengeluaran'}
                </span>
              </div>
              <button
                onClick={() => onDeleteTransaction(transaction.id)}
                className="delete-btn"
              >
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