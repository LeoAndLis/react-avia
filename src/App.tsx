import React from 'react';
import classes from './App.module.scss';
import logo from './images/logo.svg';
import Filters from './components/Filters/Filters';
import FlightsList from './components/FlightsList/FlightsList';
import SortList from './components/SortList/SortList';
import TicketsService from './services/TicketsService';

function App() {
  const ticketsService = new TicketsService();
  ticketsService.getTickets().then((result) => console.log(result));
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <img className={classes.header__logo} src={logo} alt="Logo" />
      </header>
      <main className={classes.main}>
        <SortList />
        <Filters />
        <section className={classes.flights}>
          <FlightsList />
        </section>
        <button className={classes['show-more']} type="button">Показать ещё 5 билетов!</button>
      </main>
    </div>
  );
}

export default App;
