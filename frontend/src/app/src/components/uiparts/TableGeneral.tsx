import React, { useState } from 'react';

interface TableProps<T> {
  data: Array<T>;
}

const Table = <T extends object>({ data }: TableProps<T>) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  const columns = Object.keys(data[0]);
  const [items, setItems] = useState(data);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const handleButtonClick = (item: T) => {
    setSelectedItem(item);
    console.log("Selected item:", item);
  };

  const sortByColumn = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedItems = [...items].sort((a, b) => {
      const aValue = a[key as keyof T];
      const bValue = b[key as keyof T];
      if (aValue < bValue) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setItems(sortedItems);
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  return (
    <>
      <table style={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} onClick={() => sortByColumn(column)} style={styles.th}>
                {column} {getSortIcon(column)}
              </th>
            ))}
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column} style={styles.td}>
                  {item[column as keyof T] != null ? String(item[column as keyof T]) : ''}
                </td>
              ))}
              <td style={styles.td}>
                <button style={styles.button} onClick={() => handleButtonClick(item)}>
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedItem && (
        <div style={styles.selectedItem}>
          <h2>Selected Item</h2>
          {Object.entries(selectedItem).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value != null ? String(value) : ''}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

// スタイル
const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  } as React.CSSProperties,
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  } as React.CSSProperties,
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  } as React.CSSProperties,
  button: {
    padding: '5px 10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  } as React.CSSProperties,
  selectedItem: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  } as React.CSSProperties,
};

export default Table;
