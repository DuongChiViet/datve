import React from 'react';
import { BookingProvider } from './contexts/BookingContext';
import { useBooking } from './hooks/useBooking';
import Screen from './components/Screen';
import Legend from './components/Legend';
import SeatRow from './components/SeatRow';
import CustomerForm from './components/CustomerForm';
import BookingInfo from './components/BookingInfo';
import './App.css'

function App() {
  const MovieBookingApp = () => {
    const { seatData } = useBooking();

    return (
        <div className="abc min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8 text-white">
                    Đặt vé xem phim
                </h1>
                
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <Screen />
                    <Legend />
                    
                    <div className="theater-layout">
                        {seatData.map((row, index) => (
                            <SeatRow key={index} rowData={row} />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <CustomerForm />
                    <BookingInfo />
                </div>
            </div>
        </div>
    );
};
  return (
    <BookingProvider>
      <MovieBookingApp />
    </BookingProvider>
  )
}

export default App
