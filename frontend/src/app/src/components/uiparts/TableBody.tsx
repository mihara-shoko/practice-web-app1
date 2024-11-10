import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }

// Tableコンポーネントのpropsの型を定義
interface TableProps {
  data: User;
}

// Tableコンポーネント
const Table: React.FC<TableProps> = ({ data }) => {
  return (

      
      <tbody>

          <tr key={data.id}>
            <td style={styles.td}>{data.id}</td>
            <td style={styles.td}>{data.name}</td>
            <td style={styles.td}>{data.email}</td>
            <td style={styles.td}>{data.age}</td>
          </tr>
        
      </tbody>
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
};



export default Table;
