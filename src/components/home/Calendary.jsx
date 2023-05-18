import React, { useEffect, useRef } from 'react';
import { Datepicker, Button, Page, setOptions, localeEs } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import './Calendary.css'

const Calendary = () => {
  return (
    <>  
    <div className="calendarioContainerHome">
         <Datepicker
            controls={['calendar']}
            display="inline"
            calendarType='month'
            pages= {3}
            touchUi={true}
        />
    </div>
    </>

  )
};

export default Calendary
