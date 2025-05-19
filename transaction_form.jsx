// TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi form
    const newErrors = {};
    if (!description.trim()) newErrors.description = 'Deskripsi tidak boleh kosong';
    if (!amount || Number(amount) <= 0) newErrors.amount = 'Jumlah harus lebih dari 0';
    if (!type) newErrors.type = 'Pilih jenis transaksi';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Buat transaksi baru
    const newTransaction = {
      id: Date.now(),
      description,
      amount: Number(amount),
      type,
      date: new Date().toISOString()
    };
    
    // Panggil callback dari parent
    onAddTransaction(newTransaction);
    
    // Reset form
    setDescription('');
    setAmount('');
    setType('');
    setErrors({});
  };

  return (
    <div className="transaction-form">
      <h2>Tambah Transaksi Baru</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Deskripsi:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        
        <div className="form-group">
          <label>Jumlah (Rp):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {errors.amount && <span className="error">{errors.amount}</span>}
        </div>
        
        <div className="form-group">
          <label>Jenis Transaksi:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="type"
                value="income"
                checked={type === 'income'}
                onChange={() => setType('income')}
              />
              Pemasukan
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="expense"
                checked={type === 'expense'}
                onChange={() => setType('expense')}
              />
              Pengeluaran
            </label>
          </div>
          {errors.type && <span className="error">{errors.type}</span>}
        </div>
        
        <button type="submit" className="submit-btn">
          Tambah Transaksi
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;