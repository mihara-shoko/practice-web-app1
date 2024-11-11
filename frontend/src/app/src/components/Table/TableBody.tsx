import React from 'react';
import TableRow from './TableRow';

interface TableBodyProps<T> {
  columns: (keyof T)[];
  data: T[];
  onSelect: (item: T) => void;
}

function TableBody<T extends Record<string, any>>({ columns, data, onSelect }: TableBodyProps<T>) {
  return (
    <tbody>
      {data.map((item, index) => (
        <TableRow key={index} item={item} columns={columns} onSelect={() => onSelect(item)} />
      ))}
    </tbody>
  );
}

export default TableBody;
