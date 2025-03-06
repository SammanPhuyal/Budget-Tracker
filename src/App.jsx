import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import ExportButton from "./components/ExportButton";
import Chart from "./components/Chart";
import "./App.css"; // Ensure you are importing the CSS file

function App() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { amount, category, description };
    setExpenses([...expenses, newExpense]);
    setAmount("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="App">
      {/* Form for Adding Expenses */}
      <form onSubmit={handleSubmit} className="retro-container">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          className="retro-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          className="retro-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          className="retro-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
          style={{ resize: 'none' }} // Prevent resizing
        />

        <button type="submit" className="retro-button">
          Add Expense
        </button>
      </form>

      {/* Expense List */}
      <ExpenseList expenses={expenses} />

      {/* Chart */}
      <Chart expenses={expenses} />

      {/* Export Button */}
      <ExportButton expenses={expenses} />
    </div>
  );
}

export default App;
