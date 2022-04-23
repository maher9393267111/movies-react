import React from "react";

import { useState, useEffect } from "react";
import { getFilms } from "../api";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link,useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Allfilms({h,shownumber}) {
  const [films, setFilms] = useState([]);

const navigate=useNavigate()

  useEffect(() => {
    AllFilmsFetch();
  }, []);

  // get all films

  const AllFilmsFetch = () => {
    getFilms().then((res) => {
      console.log(res, "res.data");
      setFilms(res);
    });

    console.log(films, "---------->films reaaact  in ");
  };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={shownumber}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination]}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {films.map((film, index) => {
          return (
            <SwiperSlide key={film._id}
            
            style={{
                width: "20px",
                height: `${h}px`,
                backgroundImage: `url(${film.image.secure_url})`,
              }}
            
            className=" h-[450px]">
            <div className=" poster-container relative   group  hover:block    h-full w-full ">

{/* // poster content div */}

<div className="poster-content hidden w-full h-full group-hover:block hover:opacity-[0.7] group-hover:bg-[#00afef] ">

    {/* // absolute section  */}
    <div className="all-things    absolute w-full h-full items-center  ">

    <h1 className=" transition-all    delay-100   mt-[140px] w-[200px] mx-auto  bg-blue-300 rounded-lg p-3">Satin All</h1> 

 {/* single fil page */}

   
<div className="  relative top-[11px] mb-[22px] ">
<h1 className="    mx-auto text-sm font-bold w-[166px]">{film.name}</h1>  

</div>

<div className="text-center">
  


<button onClick={() => navigate("/film/" + film._id)}>
 
                Watch Show
              </button>

              </div>
    
    </div>


</div>


                
              {/* <img src={film.image.secure_url} alt="" /> */}
            </div>

            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
