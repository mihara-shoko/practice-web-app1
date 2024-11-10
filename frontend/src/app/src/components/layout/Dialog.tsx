import React, { useState } from 'react';

// ダイアログコンポーネントのインターフェースを定義
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

// ダイアログコンポーネント
const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // ダイアログが開かれていない場合は表示しない

  return (
    <div style={styles.overlay}>
      <div style={styles.dialog}>
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={onClose} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

// ダイアログを表示する親コンポーネント
const App: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div>
      <h1>React Dialog Example</h1>
      <button onClick={openDialog}>Open Dialog</button>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} title="Sample Dialog">
        <p>This is a dialog content.</p>
      </Dialog>
    </div>
  );
};

// スタイルオブジェクトをCSSProperties型として定義
const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dialog: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    maxWidth: '80%',
    textAlign: 'center'
  },
  closeButton: {
    marginTop: '20px',
    padding: '10px 20px',
    cursor: 'pointer'
  }
};

export default Dialog;
