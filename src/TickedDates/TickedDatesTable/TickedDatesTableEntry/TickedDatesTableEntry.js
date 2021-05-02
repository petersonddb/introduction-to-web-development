import './TickedDatesTableEntry.css';
import { useState } from "react";

const TickedDatesTableEntry = ({ tickedDate, onSubmit = null }) => {
  const [date, setDate] = useState(tickedDate.date)
  const readOnly = onSubmit === null;

  const handleFormSubmit = (e) => {
    onSubmit({date});
    setDate('');
    e.preventDefault();
  }

  return (
    <tr className="ticked-dates-table-entry">
      <td>
        <span>Data marcada</span>
      </td>
      <td>
        <form onSubmit={handleFormSubmit}>
          {readOnly
            ? <div>{tickedDate.date}</div>
            : <input value={date} onChange={(e) => setDate(e.target.value)} />
          }
        </form>
      </td>
    </tr>
  );
}

export default TickedDatesTableEntry;
