import React from "react";

const ContentImage4 = () => {
  return (
    <div>
      <section className="bg-white py-20 dark:bg-dark mt-10">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Rooms_31-scaled-1920x650.jpg"
                alt="gallery image"
                className="w-full object-cover object-center h-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_38-scaled-500x500.jpg"
                alt="gallery image"
                className="w-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_36-scaled-500x500.jpg"
                alt="gallery image"
                className="w-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://amazinghotel.com.vn/wp-content/uploads/2021/06/Room_35-scaled.jpg"
                alt="gallery image"
                className="w-full object-cover object-center h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentImage4;
