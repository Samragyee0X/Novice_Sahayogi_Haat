import React from 'react';
import styles from './ProviderProfile.css';

function App() {
  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      <div className={styles.services}>
        <p>exam</p>
        <p>assistance</p>
        <p>find your saath!</p>
      </div>

      <div className={styles.alert}>
        <h2>Service request alert</h2>
        <button>See all</button>
      </div>

      <div className={styles.requests}>
        <div className={styles.request}>
          <h3>Hari</h3>
          <p>Requesting Service</p>
          <p>4.8 (2)</p>
        </div>
        <div className={styles.request}>
          <h3>Lalita</h3>
          <p>Requesting Service</p>
          <p>4.0 (5)</p>
        </div>
      </div>

      <div className={styles.pricing}>
        <p>Re.350</p>
        <p>Re.500</p>
      </div>

      <div className={styles.navigation}>
        <p>Access*</p>
        <p>Access*</p>
        <p>Home</p>
        <p>speaker</p>
        <p>Search</p>
        <p>notification</p>
        <p>Customer</p>
        <p>data</p>
      </div>
    </div>
  );
}

export default App;