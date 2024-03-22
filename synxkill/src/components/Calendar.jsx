// Calendar.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]);

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthData = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month, daysInMonth(year, month));
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay());

    const endDate = new Date(lastDay);
    endDate.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

    const monthData = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      monthData.push(week);
    }

    return monthData;
  };

  const toggleDate = (day) => {
    const newMarkedDates = [...markedDates];
    const index = newMarkedDates.findIndex((date) => date.getTime() === day.getTime());

    if (index !== -1) {
      newMarkedDates.splice(index, 1);
    } else {
      newMarkedDates.push(day);
    }

    setMarkedDates(newMarkedDates);
  };

  const renderDay = (day) => {
    const isCurrentMonth = day.getMonth() === selectedDate.getMonth();
    const isToday =
      day.getDate() === new Date().getDate() &&
      day.getMonth() === new Date().getMonth() &&
      day.getFullYear() === new Date().getFullYear();
    const isMarked = markedDates.some((date) => date.getTime() === day.getTime());

    const classes = `
      ${isToday ? 'bg-blue-500 text-white ' : ''}
      ${isCurrentMonth ? 'text-black' : 'text-gray-400'}
      ${isMarked ? 'bg-green-300' : ''}
    `;

    return (
      <div
        key={day.toString()}
        className={`flex items-center justify-center w-8 h-8 cursor-pointer ${classes}`}
        onClick={() => toggleDate(day)}
      >
        {day.getDate()}
      </div>
    );
  };

  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
  
    const monthData = getMonthData(year, month);
  
    return monthData.map((week, index) => (
      <div key={index.toString()} className="flex gap-2 mb-4 mt-4">
        {week.map((day) => renderDay(day))}
        {/* Add an extra day to ensure 8 days in one row */}
        {week.length === 8 && <div className="flex items-center justify-center w-8 h-8"></div>}
      </div>
    ));
  };
  

  return (
    <div className="-ml-4 mx-5 min-w-80 mt-4 h-[21.85rem] p-4 bg-white shadow-md shadow-gray-400 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
          Prev
        </button>
        <h2 className="text-lg font-semibold">
          {selectedDate.toLocaleString('en-us', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
          Next
        </button>
      </div>
      <div className="flex gap-2 items-center justify-start w-full h-8">
  <div className="text-center text-red-600 ml-3">S</div>
  <div className="text-center text-gray-500 ml-5">M</div>
  <div className="text-center text-gray-500 ml-5">T</div>
  <div className="text-center text-gray-500 ml-5">W</div>
  <div className="text-center text-gray-500 ml-5">T</div>
  <div className="text-center text-gray-500 ml-6">F</div>
  <div className="text-center text-red-600 ml-6">S</div>
</div>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
