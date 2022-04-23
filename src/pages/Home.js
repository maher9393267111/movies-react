import React from 'react'
import Allfilms from '../components/allfilms'
import { Link, useNavigate } from 'react-router-dom'

import Navbar from '../components/navbar'

import { getFilms } from "../api";
import { useEffect,useState } from 'react'

import Slider from "react-slick";

  
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}





export default function Home() {

const [films, setFilms] = useState([]);


useEffect(() => {
  AllFilmsFetch();
}, []);


const AllFilmsFetch = () => {
  getFilms().then((res) => {
    console.log(res, "res.data");
    setFilms(res);
  });

  console.log(films, "---------->films in home page");
};

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


  return (
    <div>

<Navbar/>




<div className='mt-[55px]  mb-[55px]'>
<Allfilms  h={400} shownumber={2}  /> 


</div>


{/* -------- slick slide  */}


<div className='slick-container  mb-[50px]'>





</div>








    </div>
  )
}
