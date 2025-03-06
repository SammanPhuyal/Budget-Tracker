import React from "react";
import { FaTrashAlt } from 'react-icons/fa';

function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <span>{`Rs. ${expense.amount} : ${expense.description}`}</span>
            <span className="expense-category">({expense.category})</span>
            <span className="expense-date">({expense.date})</span>
            <button
              onClick={() => onDelete(index)}
              className="delete-button"
            >
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
