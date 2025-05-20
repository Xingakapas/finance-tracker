import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import FinanceSummary from './components/FinanceSummary';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Personal Finance Tracker</h1>
      
      <TransactionForm onAddTransaction={handleAddTransaction} />
      
      <FinanceSummary transactions={transactions} />
      
      <TransactionList 
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </div>
  );
}

export default App;