import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Clock, Calendar, Check, X } from 'lucide-react';
import "react-datepicker/dist/react-datepicker.css";

export default function SessionScheduler({ coach, onSchedule, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [topic, setTopic] = useState('');

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSchedule({
      coach,
      date: selectedDate,
      time: selectedTime,
      topic
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <img
            src={coach.imageUrl}
            alt={coach.name}
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Schedule with {coach.name}</h2>
            <p className="text-sm text-gray-500">{coach.expertise}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500 p-2 rounded-full hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="h-4 w-4 inline-block mr-2" />
            Select Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            minDate={new Date()}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholderText="Select date"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="h-4 w-4 inline-block mr-2" />
            Available Time Slots
          </label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  selectedTime === time
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Session Topic
          </label>
          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="What would you like to discuss in this session?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"
          />
        </div>

        <button
          type="submit"
          disabled={!selectedDate || !selectedTime || !topic}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors"
        >
          <Check className="h-4 w-4 mr-2" />
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

SessionScheduler.propTypes = {
  coach: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    expertise: PropTypes.string.isRequired,
  }).isRequired,
  onSchedule: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};