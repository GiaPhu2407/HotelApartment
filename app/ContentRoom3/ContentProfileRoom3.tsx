import React from "react";
import { FaCompass } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
const ContentProfileRoom3 = () => {
  return (
    <div className="text-center">
      <div className="ml-10">
        <a href="" className="text-black hover:text-amber-800 text-[35px]">
          Deluxe Family
        </a>
        <div className="flex justify-center items-center mt-4 gap-7">
          <div className="flex">
            <div className="text-xl">
              <FaCompass />
            </div>
            <p className="pl-2 text-base">32m2</p>
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
          Phòng Deluxe Family là lựa chọn hoàn hảo cho gia đình có trẻ nhỏ khi
          đến với Amazing Hotel Sapa. Phòng có diện tích 32 m², gồm một giường
          đôi và một giường đơn, có thể chứa tối đa 3 người lớn và 1 trẻ em.
          Phòng được thiết kế hiện đại và ấm cúng, có tivi LCD, minibar, bàn làm
          việc, két sắt và phòng tắm riêng với đầy đủ tiện nghi. Phòng có ban
          công rộng rãi hướng ra núi, cho bạn cảm giác thư thái và hòa mình vào
          thiên nhiên
        </p>
      </div>
    </div>
  );
};

export default ContentProfileRoom3;
