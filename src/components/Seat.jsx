import React from "react";
import { useBooking } from "../hooks/useBooking";
const Seat = ({ seat, rowLabel, onSeatClick }) => {
    const { selectedSeats } = useBooking();

    const isSelected = selectedSeats.some(selected => selected.soGhe === seat.soGhe);
    const isBooked = seat.daDat;
    const isNumberRow = rowLabel === '';

    let seatClass = 'w-8 h-8 m-1 text-xs font-bold rounded cursor-pointer transition-all duration-200 flex items-center justify-center';

    if (isNumberRow) {
        seatClass += ' bg-gray-300 text-gray-700 cursor-default';
    } else if (isBooked) {
        seatClass += ' bg-red-500 text-white cursor-not-allowed';
    } else if (isSelected) {
        seatClass += ' bg-green-500 text-white transform scale-110 shadow-lg';
    } else {
        seatClass += ' bg-blue-500 text-white hover:bg-blue-600 hover:transform hover:scale-105';
    }

    return (
        <div
            className={seatClass}
            onClick={() => !isNumberRow && onSeatClick(seat)}
        >
            {seat.soGhe}
        </div>
    );
};

export default Seat;