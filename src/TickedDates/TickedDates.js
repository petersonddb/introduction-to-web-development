import './TickedDates.css';
import BlankSlate from '../BlankSlate/BlankSlate';
import TickedDatesTable from './TickedDatesTable/TickedDatesTable';
import { useContext, useEffect, useState } from 'react';
import HttpClient from '../HttpClient/HttpClient';

const TickedDates = () => {
  const [tickedDates, setTickedDates] = useState([]);
  const [loading, setLoading] = useState([true]);
  const httpClient = useContext(HttpClient);

  const createTickedDate = ({date}) => {
    httpClient.post('/ticked-dates', { date: date })
              .then(() => setLoading(true))
              .catch(error => console.log(error));
  }

  useEffect(() => {
    const fetchTickedDates = () => {
      httpClient.get('/ticked-dates')
                .then(response => setTickedDates(response.data))
                .catch(error => console.log(error));

      setLoading(false);
    }

    if(loading) fetchTickedDates();
  }, [httpClient, loading]);

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
