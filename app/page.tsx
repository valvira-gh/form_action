import styles from './page.module.css';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  );
}

export default App;