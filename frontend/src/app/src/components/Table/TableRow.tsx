import React from 'react';
import TableCell from './TableCell';

interface TableRowProps<T> {
  item: T;
  columns: (keyof T)[];
  onSelect: () => void;
}

function TableRow<T extends Record<string, any>>({ item, columns, onSelect }: TableRowProps<T>) {
  return (
    <tr>
      {columns.map((column) => (
        <TableCell key={String(column)} value={String(item[column])} />
      ))}
      <td style={styles.td}>
        <button style={styles.button} onClick={onSelect}>Select</button>
      </td>
    </tr>
  );
}

export default TableRow;

const styles = {
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
};
