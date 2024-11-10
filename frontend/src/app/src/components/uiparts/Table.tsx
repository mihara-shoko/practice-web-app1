import React, {useState} from 'react';

// テーブルデータの型を定義
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Tableコンポーネントのpropsの型を定義
interface TableProps {
  data: User[];
  columns: (keyof User)[];
}

// Tableコンポーネント
const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [users, setUsers] = useState<User[]>(data);
  const [sortConfig, setSortConfig] = useState<{ key: keyof User; direction: 'ascending' | 'descending' } | null>(null);
  
  // ソート関数
  const sortByColumn = (key: keyof User) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setUsers(sortedUsers);
    setSortConfig({ key, direction });
  };

  // ソート方向のアイコン
  const getSortIcon = (key: keyof User) => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };


  return (
    <table style={styles.table}>
      <thead>
        <tr>
        {
            columns.map((column) => (
                <th key={column} onClick={() => sortByColumn(column)} style={styles.th}>{column} {getSortIcon(column)}</th>
            ))
        }
        </tr>
        
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td style={styles.td}>{user.id}</td>
            <td style={styles.td}>{user.name}</td>
            <td style={styles.td}>{user.email}</td>
            <td style={styles.td}>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
