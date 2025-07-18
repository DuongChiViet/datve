import React from "react";
import { useBooking } from "../hooks/useBooking";
const BookingInfo = () => {
    const { selectedSeats, totalPrice, bookSeats, resetSelection } = useBooking();

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Thông tin đặt vé</h3>
            
            <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Ghế đã chọn:</p>
                <div className="flex flex-wrap gap-2">
                    {selectedSeats.length > 0 ? (
                        selectedSeats.map(seat => (
                            <span key={seat.soGhe} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                {seat.soGhe}
                            </span>
                        ))
                    ) : (
                        <span className="text-gray-500 italic">Chưa chọn ghế nào</span>
                    )}
                </div>
            </div>

            <div className="mb-4">
                <p className="text-sm text-gray-600">Số lượng ghế: <span className="font-bold">{selectedSeats.length}</span></p>
                <p className="text-lg font-bold text-blue-600">
                    Tổng tiền: {totalPrice.toLocaleString('vi-VN')} VNĐ
                </p>
            </div>

            <div className="flex gap-3">
                <button
                    onClick={resetSelection}
                    className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
                    disabled={selectedSeats.length === 0}
                >
                    Hủy chọn
                </button>
                <button
                    onClick={bookSeats}
                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                    disabled={selectedSeats.length === 0}
                >
                    Đặt vé
                </button>
            </div>
        </div>
    );
};

export default BookingInfo;