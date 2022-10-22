import React ,{useState}from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import './Datep.css';
 export const Datep = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
            <DatePicker  selected={startDate} onChange={startDate => setStartDate(startDate)} />

    </div>
  )
}

