import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

export default function AddExpense({ tags, setExpenses }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTag, setSelectedTag] = useState(tags[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    setExpenses(prev => [...prev, {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      tag: selectedTag,
      date: new Date().toLocaleDateString()
    }]);
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="retro-input flex-1"
          required
        />
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="retro-input"
        >
          {tags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="retro-input w-full mb-4"
      />
      <button type="submit" className="retro-button">
        <PlusCircleIcon className="h-5 w-5 inline-block mr-2" />
        Add Expense
      </button>
    </form>
  );
}
