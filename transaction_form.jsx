import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi
    const newErrors = {};
    if (!formData.description.trim()) newErrors.description = 'Deskripsi wajib diisi';
    if (!formData.amount || Number(formData.amount) <= 0) newErrors.amount = 'Jumlah harus > 0';
    if (!formData.type) newErrors.type = 'Pilih jenis transaksi';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Kirim data ke parent
    onAddTransaction({
      id: Date.now(),
      ...formData,
      amount: Number(formData.amount),
      date: new Date().toISOString()
    });

    // Reset form
    setFormData({ description: '', amount: '', type: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Deskripsi:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <span>{errors.description}</span>}
      </div>

      <div>
        <label>Jumlah (Rp):</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        {errors.amount && <span>{errors.amount}</span>}
      </div>

      <div>
        <label>Jenis:</label>
        <label>
          <input
            type="radio"
            name="type"
            value="income"
            checked={formData.type === 'income'}
            onChange={handleChange}
          />
          Pemasukan
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="expense"
            checked={formData.type === 'expense'}
            onChange={handleChange}
          />
          Pengeluaran
        </label>
        {errors.type && <span>{errors.type}</span>}
      </div>

      <button type="submit">Tambah</button>
    </form>
  );
};

export default TransactionForm;