import React from "react";
const Legend = () => (
    <div className="flex justify-center items-center gap-6 mb-6 p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded"></div>
            <span className="text-sm">Ghế trống</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded"></div>
            <span className="text-sm">Ghế đã chọn</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-500 rounded"></div>
            <span className="text-sm">Ghế đã đặt</span>
        </div>
    </div>
);

export default Legend;