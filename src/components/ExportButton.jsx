import { utils, writeFile } from 'xlsx';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

export default function ExportButton({ expenses }) {
  const handleExport = () => {
    const ws = utils.json_to_sheet(expenses.map(exp => ({
      Amount: exp.amount,
      Description: exp.description,
      Category: exp.tag,
      Date: exp.date
    })));
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Expenses");
    writeFile(wb, "expenses.xlsx");
  };

  return (
    <button 
      onClick={handleExport}
      className="retro-button fixed bottom-4 right-4"
    >
      <DocumentArrowDownIcon className="h-5 w-5 inline-block mr-2" />
      Export to Excel
    </button>
  );
}
