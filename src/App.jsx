import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import ExportButton from "./components/ExportButton";
import Chart from "./components/Chart";
import { FaTrashAlt } from "react-icons/fa"; 
import CoinAnimation from "./components/CoinAnimation"; // Importing CoinAnimation
import "./App.css"; // Ensure you are importing the CSS file

function App() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString(); // Get today's date
    const newExpense = {
      amount,
      category,
      description,
      date,
    };
    setExpenses([...expenses, newExpense]);
    setAmount("");
    setCategory("");
    setDescription("");
  };

  // Handle expense deletion
  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="app-container">
      {/* Left Section - Piggy Bank Animation */}
      <div className="left-section">
        <CoinAnimation />
      </div>

      {/* Right Section - Expenses and Form */}
      <div className="right-section">
        <div className="form-container">
          <h1>Add Expenses</h1>
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
              style={{ resize: "none" }} // Prevent resizing
            />

            <button type="submit" className="retro-button">
              Add Expense
            </button>
          </form>
        </div>

        {/* Expenses Section */}
        <div className="expenses-container">
          <ExpenseList expenses={expenses} onDelete={handleDelete} />
          <Chart expenses={expenses} />
        </div>

        {/* Export Button */}
        <ExportButton expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
