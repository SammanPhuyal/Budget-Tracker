import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function Chart({ expenses }) {
  const data = expenses.map(exp => ({
    name: exp.category,
    value: parseInt(exp.amount),
  }));

  return (
    <div className="chart-container">
      <h2>Expense Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={150}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#ff6f61" : "#00C49F"} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
