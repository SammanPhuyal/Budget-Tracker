import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function Chart({ expenses }) {
  const data = expenses.reduce((acc, exp) => {
    const existing = acc.find(item => item.name === exp.tag);
    if (existing) {
      existing.value += exp.amount;
    } else {
      acc.push({ name: exp.tag, value: exp.amount });
    }
    return acc;
  }, []);

  const COLORS = ['#ff6f61', '#6b5b95', '#88b04b', '#ffa500'];

  return (
    <div className="retro-chart">
      <h2 className="text-2xl mb-4" style={{ color: '#ff6f61' }}>Expense Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
