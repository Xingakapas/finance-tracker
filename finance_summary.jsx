import React from 'react';

const FinanceSummary = ({ transactions }) => {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <h2>Ringkasan</h2>
      <p>Pemasukan: Rp{income.toLocaleString('id-ID')}</p>
      <p>Pengeluaran: Rp{expense.toLocaleString('id-ID')}</p>
      <p>Saldo: Rp{balance.toLocaleString('id-ID')}</p>
    </div>
  );
};

export default FinanceSummary;