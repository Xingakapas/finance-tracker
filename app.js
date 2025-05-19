// App.js
import React, { useState } from 'react';
import FinanceSummary from './FinanceSummary';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div className="app">
      <h1>Personal Finance Tracker</h1>
      <div className="container">
        <FinanceSummary transactions={transactions} />
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <TransactionList 
          transactions={transactions} 
          onDeleteTransaction={handleDeleteTransaction} 
        />
      </div>
    </div>
  );
}

export default App;