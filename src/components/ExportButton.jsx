import React from 'react';
import * as XLSX from 'xlsx';

function ExportButton({ expenses }) {
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(expenses);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Expenses');
    XLSX.writeFile(wb, 'expenses.xlsx');
  };

  return (
    <button onClick={exportToExcel} className="export-button">
      Export to Excel
    </button>
  );
}

export default ExportButton;
