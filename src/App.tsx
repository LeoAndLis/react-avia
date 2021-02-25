import React from 'react';
import logo from './images/logo.svg';
import Filters from './components/Filters/Filters';
import TicketsListContainer from './components/TicketsList/TicketsListContainer';
import SortList from './components/SortList/SortList';
import AddVisibleTickets from './components/AddVisibleTickets/AddVisibleTickets';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <img className={classes.header__logo} src={logo} alt="Logo" />
      </header>
      <main className={classes.main}>
        <SortList />
        <Filters />
        <section className={classes.flights}>
          <TicketsListContainer />
        </section>
        <AddVisibleTickets />
      </main>
    </div>
  );
}

export default App;
