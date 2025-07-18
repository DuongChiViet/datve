import React from "react";
import Seat from "./Seat";
import { useBooking } from "../hooks/useBooking";
const SeatRow = ({ rowData }) => {
    const { toggleSeat } = useBooking();

    return (
        <div className="flex items-center justify-center mb-2">
            {rowData.hang && (
                <div className="w-8 h-8 flex items-center justify-center font-bold text-gray-700 mr-2">
                    {rowData.hang}
                </div>
            )}
            <div className="flex">
                {rowData.danhSachGhe.map((seat, index) => (
                    <Seat
                        key={index}
                        seat={seat}
                        rowLabel={rowData.hang}
                        onSeatClick={toggleSeat}
                    />
                ))}
            </div>
        </div>
    );
};

export default SeatRow;