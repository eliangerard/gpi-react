import React, { useState } from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendary.css'
import es from 'date-fns/locale/es'
registerLocale("es", es);

const Calendary = ({setDate}) => {
  const [startDate, setStartDate] = useState(new Date());

  const submitDate = (date) => {
    setStartDate(date)
    setDate(date)
  }
  return (
    <div className="calendarioContainerHome">
      <DatePicker
        locale={es}
        selected={startDate}
        onChange={submitDate}
        monthsShown={3}
        inline
        excludeDates={[new Date("2023/06/21"), new Date()]}
      />
    </div>
  );
};

export default Calendary;
