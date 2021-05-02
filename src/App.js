import './App.css';
import Menu from './Menu/Menu';
import TickedDates from './TickedDates/TickedDates';

function App() {
  return (
    <main className="app-container">
      <Menu className="menu" />
      <TickedDates className="ticked-dates" />
    </main>
  );
}

export default App;
