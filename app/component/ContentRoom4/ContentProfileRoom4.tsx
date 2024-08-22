import React from "react";
import { FaCompass } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
const ContentProfileRoom4 = () => {
  return (
    <div className="text-center">
      <div className="ml-10">
        <a href="" className="text-black hover:text-amber-800 text-[35px]">
          Deluxe Room
        </a>
        <div className="flex justify-center items-center mt-4 gap-7">
          <div className="flex">
            <div className="text-xl">
              <FaCompass />
            </div>
            <p className="pl-2 text-base">25m2</p>
          </div>
          <div className="flex">
            <div className="text-2xl">
              <IoBedOutline />
            </div>
            <p className="pl-2 text-base">2 beds</p>
          </div>
          <div className="flex">
            <div className="text-xl">
              <GiBathtub />
            </div>

            <p className="pl-2 text-base">1 bathroom</p>
          </div>
        </div>
        <p className="text-base break-words  mt-4 opacity-70 text-center">
          Phòng Deluxe Room là lựa chọn tuyệt vời cho du khách muốn tận hưởng
          khung cảnh núi non hùng vĩ của Sapa. Phòng có diện tích 25 m², được
          trang bị đầy đủ tiện nghi như giường đôi hoặc hai giường đơn, tivi
          LCD, minibar, bàn làm việc, két sắt và phòng tắm riêng. Phòng có ban
          công rộng rãi hướng ra núi, cho bạn cảm giác thư thái và hòa mình vào
          thiên nhiên
        </p>
      </div>
    </div>
  );
};

export default ContentProfileRoom4;
