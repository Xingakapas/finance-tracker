// FinanceSummary.js
import React from 'react';

const FinanceSummary = ({ transactions }) => {
  // Hitung total pemasukan
  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  // Hitung total pengeluaran
  const totalExpense = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  // Hitung saldo akhir
  const balance = totalIncome - totalExpense;

  // Format ke Rupiah
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(amount);
  };

  return (
    <div className="finance-summary">
      <h2>Ringkasan Keuangan</h2>
      <div className="summary-card">
        <h3>Total Pemasukan</h3>
        <p className="income">{formatCurrency(totalIncome)}</p>
      </div>
      <div className="summary-card">
        <h3>Total Pengeluaran</h3>
        <p className="expense">{formatCurrency(totalExpense)}</p>
      </div>
      <div className="summary-card">
        <h3>Saldo Akhir</h3>
        <p className={balance >= 0 ? 'positive' : 'negative'}>
          {formatCurrency(balance)}
        </p>
      </div>
    </div>
  );
};

export default FinanceSummary;