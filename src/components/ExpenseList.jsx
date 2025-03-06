import { TrashIcon } from '@heroicons/react/24/outline';

export default function ExpenseList({ expenses, setExpenses }) {
  const handleDelete = (id) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  return (
    <div className="retro-container mb-6">
      <h2 className="text-2xl mb-4" style={{ color: '#ff6f61' }}>Expenses</h2>
      {expenses.map(exp => (
        <div key={exp.id} className="flex justify-between items-center mb-2 p-2 retro-input">
          <div>
            <span className="font-bold">${exp.amount}</span>
            <span className="ml-2">{exp.description}</span>
            <span className="ml-2 px-2 py-1 bg-gray-100 rounded-full text-sm">{exp.tag}</span>
          </div>
          <button onClick={() => handleDelete(exp.id)} className="text-red-500 hover:text-red-700">
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
}
