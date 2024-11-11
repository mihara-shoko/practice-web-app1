import React from 'react';

interface TableCellProps {
  value: string;
}

function TableCell({ value }: TableCellProps) {
  return <td style={styles.td}>{value}</td>;
}

export default TableCell;

const styles = {
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  } as React.CSSProperties,
};
