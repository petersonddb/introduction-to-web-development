import './TickedDatesTable.css'
import TickedDatesTableEntry from "./TickedDatesTableEntry/TickedDatesTableEntry";

const TickedDatesTable = ({tickedDates, onSubmit}) => {
  return (
    <table className="ticked-dates-table">
      <tbody>
        {tickedDates.map((tickedDate) => {
          return <TickedDatesTableEntry key={tickedDate.id}
                                        onSubmit={onSubmit}
                                        tickedDate={tickedDate} />
        })}
      </tbody>
    </table>
  );
}

export default TickedDatesTable;
