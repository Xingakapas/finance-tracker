import React from 'react';

const FinanceSummary = ({ transactions = [] }) => {
  // Pastikan transactions selalu array dan handle jika undefined/null
  const safeTransactions = Array.isArray(transactions) ? transactions : [];
  
  // Hitung total dengan default value 0
  const totalIncome = safeTransactions
    .filter(transaction => transaction?.type === 'income')
    .reduce((sum, transaction) => sum + (Number(transaction?.amount) || 0), 0);

  const totalExpense = safeTransactions
    .filter(transaction => transaction?.type === 'expense')
    .reduce((sum, transaction) => sum + (Number(transaction?.amount) || 0), 0);

  const balance = totalIncome - totalExpense;

  // Format currency dengan handle error
  const formatCurrency = (amount) => {
    try {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
      }).format(amount);
    } catch (error) {
      console.error('Format currency error:', error);
      return `Rp${amount.toLocaleString('id-ID')}`;
    }
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