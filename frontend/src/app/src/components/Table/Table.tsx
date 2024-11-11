import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

interface TableProps<T extends Record<string, any>> {
  data: T[];
  columns: (keyof T)[];
}

function Table<T extends Record<string, any>>({ columns, data }: TableProps<T>) {
  const [items, setItems] = useState<T[]>(data);
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'ascending' | 'descending' } | null>(null);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  function handleSort(key: keyof T) {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedItems = [...items].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setItems(sortedItems);
    setSortConfig({ key, direction });
  }

  function handleSelect(item: T) {
    setSelectedItem(item);
  }

  return (
    <>
      <table style={styles.table}>
        <TableBody columns={columns} data={items} onSelect={handleSelect} />
      </table>
      {selectedItem && (
        <div style={styles.selectedItem}>
          <h2>Selected Item</h2>
          {columns.map((column) => (
            <p key={String(column)}>
              {String(column)}: {String(selectedItem[column])}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default Table;

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  } as React.CSSProperties,
  selectedItem: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  } as React.CSSProperties,
};
