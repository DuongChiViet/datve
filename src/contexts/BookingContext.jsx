import React, { createContext, useState } from "react";
import { initialSeatData } from "../data/seatData";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [seatData, setSeatData] = useState(initialSeatData);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const totalPrice = selectedSeats.reduce((total, seat) => total + seat.gia, 0);

    const toggleSeat = (seatInfo) => {
        if (seatInfo.daDat) return;

        const isSelected = selectedSeats.some(seat => seat.soGhe === seatInfo.soGhe);

        if (isSelected) {
            setSelectedSeats(selectedSeats.filter(seat => seat.soGhe !== seatInfo.soGhe));
        } else {
            setSelectedSeats([...selectedSeats, seatInfo]);
        }
    };

    const bookSeats = () => {
        if (selectedSeats.length === 0) {
            alert('Vui lòng chọn ghế!');
            return;
        }

        if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        const updatedSeatData = seatData.map(row => ({
            ...row,
            danhSachGhe: row.danhSachGhe.map(seat => {
                const isBooked = selectedSeats.some(selected => selected.soGhe === seat.soGhe);
                return isBooked ? { ...seat, daDat: true } : seat;
            })
        }));

        setSeatData(updatedSeatData);
        setSelectedSeats([]);
        setCustomerInfo({ name: '', email: '', phone: '' });

        alert(`Đặt vé thành công! Tổng tiền: ${totalPrice.toLocaleString('vi-VN')} VNĐ`);
    };

    const resetSelection = () => {
        setSelectedSeats([]);
    };

    const value = {
        seatData,
        selectedSeats,
        customerInfo,
        totalPrice,
        toggleSeat,
        bookSeats,
        resetSelection,
        setCustomerInfo
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
};