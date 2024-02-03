import styles from './page.module.css';
import React from 'react';

const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello World</h1>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input 
          className={styles.input}
            type='text' 
            placeholder='What to do?' 
            name='content'
            required
          />
          <button className={styles.button}>Add</button>
        </form>
      </div>
    </main>
  );
}

export default App;