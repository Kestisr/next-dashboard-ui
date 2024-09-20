"use client";

import { Calendar, momentLocalizer, View, Views, NavigateAction } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/lt';
import { calendarEvents } from '@/lib/data';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';

moment.locale('lt');


moment.updateLocale('lt', {
  week: {
    dow: 1, // Nustato pirmadienį kaip savaitės pradžią (0 - sekmadienis, 1 - pirmadienis)
  },
});

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<View>(Views.MONTH);

  
  const handleOnNavigate = (newDate: Date, newView: View, action: NavigateAction) => {
    
    if (action === 'TODAY') {
      setDate(new Date());
    } else {
      setDate(newDate);
    }

    
    setView(newView);
  };

  
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["month", "week", "day"]}
      view={view}
      date={date} 
      style={{ height: "98%" }} 
      onView={handleOnChangeView}
      onNavigate={handleOnNavigate}
      step={60}
      timeslots={1}
      min={new Date(0, 0, 0, 0, 0)}
      max={new Date(0, 0, 0, 23, 59)}
      formats={{
        timeGutterFormat: 'HH:mm',
      }}
    />
  );
};

export default BigCalendar;
