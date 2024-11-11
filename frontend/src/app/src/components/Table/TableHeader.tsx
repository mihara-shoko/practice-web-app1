import React from 'react';

interface TableHeaderProps<T> {
  columns: T[];
  sortConfig: { key: T; direction: 'ascending' | 'descending' } | null;
  onSort: (key: T) => void;
}

function TableHeader<T extends string>({ columns, sortConfig, onSort }: TableHeaderProps<T>) {
  function getSortIcon(key: T) {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  }

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={String(column)} onClick={() => onSort(column)} style={styles.th}>
            {String(column)} {getSortIcon(column)}
          </th>
        ))}
        <th style={styles.th}>Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;

const styles = {
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  } as React.CSSProperties,
};
