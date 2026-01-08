'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for the calendar
// Data is now loaded from the API
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface CalendarEvent {
  date: string;
  title: string;
  type: string;
  status: string;
  description: string;
}

const ContentCalendar = () => {
  const [contentSchedule, setContentSchedule] = useState<CalendarEvent[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    fetch('/api/calendar')
      .then(res => res.json())
      .then(data => setContentSchedule(data))
      .catch(err => console.error('Error loading calendar data:', err));
  }, []);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for previous month days
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 sm:h-32 bg-gray-50/50 border border-gray-100/50"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const events = contentSchedule.filter(item => item.date === dateStr);
      
      days.push(
        <motion.div 
          key={day}
          whileHover={{ scale: 0.98 }}
          onClick={() => setSelectedDate(new Date(year, month, day))}
          className={`h-24 sm:h-32 border border-gray-100 p-2 cursor-pointer transition-colors relative overflow-hidden group
            ${events.length > 0 ? 'bg-white hover:bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
        >
          <span className={`text-sm font-semibold block mb-1 ${
            new Date().toDateString() === new Date(year, month, day).toDateString() 
              ? 'bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center' 
              : 'text-gray-700'
          }`}>
            {day}
          </span>
          
          <div className="flex flex-col gap-1">
            {events.map((event, idx) => (
              <div key={idx} className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-medium truncate">
                {event.title}
              </div>
            ))}
          </div>
        </motion.div>
      );
    }

    return days;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-2xl font-bold text-gray-900 font-playfair">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <div className="flex gap-2">
            <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 bg-white border-b border-gray-100">
          {daysOfWeek.map(day => (
            <div key={day} className="py-3 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 bg-gray-100 gap-px">
          {renderCalendarDays()}
        </div>
      </div>

      {/* Selected Date Details Modal/Panel */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedDate(null)}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 font-playfair">
                  {selectedDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </h3>
                <button onClick={() => setSelectedDate(null)} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="space-y-4">
                {contentSchedule.filter(item => 
                  item.date === `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`
                ).length > 0 ? (
                  contentSchedule.filter(item => 
                    item.date === `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`
                  ).map((event, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{event.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          event.status === 'Scheduled' ? 'bg-green-100 text-green-700' :
                          event.status === 'Drafting' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="bg-white px-2 py-1 rounded border border-gray-200 uppercase tracking-wide">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No content scheduled for this day.</p>
                    <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 text-sm">
                      + Request Content
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentCalendar;

