
interface TableProps {
    column: string;
}

// Table HEaderコンポーネント
const Table: React.FC<TableProps> = ({ column }) => {
  return (
      <thead>
        <tr>
        {
                <th style={styles.th}>{column}</th>
        }
        </tr>
        
      </thead>
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