import React from 'react'
import './App.css';

// Import Components
import { Header } from './components/Header'
import { Instructions } from './components/Instructions'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'
import { Footer } from './components/Footer'

// Import Golabal Provider
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Instructions/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
      <Footer/>
    </GlobalProvider>
  );
}

export default App;
