import React from "react";
import { FaCompass } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
const ContentProfileRoom2 = () => {
  return (
    <div className="text-center">
      <div className="ml-10">
        <a href="" className="text-black hover:text-amber-800 text-[35px]">
          Connecting Room
        </a>
        <div className="flex justify-center items-center mt-4 gap-7">
          <div className="flex">
            <div className="text-xl">
              <FaCompass />
            </div>
            <p className="pl-2 text-base">53m2</p>
          </div>
          <div className="flex">
            <div className="text-2xl">
              <IoBedOutline />
            </div>
            <p className="pl-2 text-base">3 beds</p>
          </div>
          <div className="flex">
            <div className="text-xl">
              <GiBathtub />
            </div>

            <p className="pl-2 text-base">2 bathroom</p>
          </div>
        </div>
        <p className="text-base break-words  mt-4 opacity-70 text-center">
          Phòng Connecting Room là lựa chọn lý tưởng cho gia đình hoặc nhóm bạn
          khi đến với Amazing Hotel Sapa. Phòng gồm hai phòng ngủ riêng biệt,
          mỗi phòng có giường đôi hoặc hai giường đơn, tivi LCD, minibar, bàn
          làm việc, két sắt và phòng tắm riêng. Phòng có ban công rộng rãi hướng
          ra núi, cho bạn cảm giác thư thái và hòa mình vào thiên nhiên. Phòng
          Connecting Room có diện tích 53 m², có thể chứa tối đa 4 người lớn và
          2 trẻ em
        </p>
      </div>
    </div>
  );
};

export default ContentProfileRoom2;
