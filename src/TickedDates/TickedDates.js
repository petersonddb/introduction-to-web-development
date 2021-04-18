import './TickedDates.css';
import BlankSlate from '../BlankSlate/BlankSlate';
import TickedDatesTable from './TickedDatesTable/TickedDatesTable';

const TickedDates = () => {
  const tickedDates = [];

  const createTickedDate = ({date}) => {
    console.log(date)
  }

  return (
    <div className="ticked-dates">
      <h2 className="title">Datas Marcadas</h2>

      <TickedDatesTable className="ticked-dates-table" tickedDates={[{ id: '', date: '' }]} onSubmit={createTickedDate} />
      {tickedDates.length > 0 ? <TickedDatesTable className="ticked-dates-table" tickedDates={tickedDates} />
                              : <BlankSlate className="blank-slate"/>}

    </div>
  );
}

export default TickedDates;
