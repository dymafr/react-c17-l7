import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import styles from './App.module.scss';

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
export default App;
