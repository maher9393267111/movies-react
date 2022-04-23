import React from 'react'
import {    useState, useEffect } from 'react'

import { getFilmById } from '../api/index'

import Navbar from '../components/navbar'
// all films component

import Allfilms from '../components/allfilms'

import { useParams,useNavigate } from 'react-router-dom'
export default function SingleFilm() {

const [film, setFilm] = useState({})

// show fragment state
const [showfragment, setShow] = useState(false)

const id=useParams().id
console.log(id)


useEffect(()=>{

  // axios fech film by id

  getFilmById(id).then(res=>{
    console.log(res)
    setFilm(res)
  }

  )

  

},[id])


  












  return (
    <div className='single-film  mb-[100px]'>

{/* backgroundImage: `url(${film.image.secure_url})`, */}

<div className='header-container bg-cover bg-center  bg-size h-[600px]  w-full  object-cover' style={{  backgroundImage: `url(${film?.image?.secure_url})`,}}>
   
<div className='header-all-wrapper  container  w-full h-full'>
  


{/* // nav component desk  */}
<div className='  relative top-[77px]'>
  
<Navbar/>
</div>



{/* // -----nav component end ------ */}



{/* // second section name and button  */}


<div  className='second-section  relative top-[77px]'>
  





<div className=' relative left-[44px] relative top-[199px]    text-white hover:text-amber-400 hover:text-2xl text-red-200  font-bold text-2xl'>

<h1 >{film.name}</h1>

<button onClick={()=>setShow(true)} type="submit "  className=' mt-[22px] bg-blue-400  rounded-xl p-[8px] text-white'> show fragment </button>

</div>



</div>

</div>






<div>
  


</div>









 </div>


{/* // info film section */}


{/* // videofragment */}

{showfragment && <div className=' video-overlay   b overflow-auto  absolute top-0 bottom-0 left-0 right-0'>

<div>
  {/* click to close */}

<p className='bg-white  text-black  p-2 ' onClick={()=>setShow(false)}>close Fragment</p>

</div>

  <iframe  webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" frameborder="0"  className=' video max-w-[70%] mx-auto h-[333px]' src={film?.fragmentURL}></iframe>
</div>}













<div className='info-container container  mt-[100px]'> 
  

<div className='ozet-wrapper  mb-[40px] text-blue-400 text-2xl font-bold '>
  
<h1 className=' h-undrline relative border-b-4  border-b-slate-300 pb-[33px]'>Ozet  </h1>

</div>


{/* // image and desc section */}



<div className='grid-container grid sm:grid-cols-1  md:grid-cols-12 '>
  
{/* // image div */}

<div className='image-contaienr col-span-4 mr-[40px]'>

<img src={film?.image?.secure_url} alt=""/>

  
</div>

{/* // desc div */}


<div className=' desc-container col-span-6'>
  
  <div className='desc-header'>
    
    <h1>{film.name}</h1>
  </div>


  <div className='desc-content  text-2xl font-normal'>

    <p >{film.desc}</p>



    {/* // tags */}

    <div className='tags-wrapper   justify-between mt-[50px] flex'>

{film?.tags&& film.tags.length >0 &&   film.tags.map(tag=>{

  return(
    <div className='tag-item items-center bg-blue-400 w-[200px] rounded-xl p-[8px] text-white'>

      <p>
        {tag}
      </p>
  
    </div>
  )

}

)}


      </div>


{/* // oyuncular sec */}


<div className='oyuncular-section flex justify-between mt-[50px]'>
  
{film.oyuncular&&film.oyuncular.length>0 && film.oyuncular.map(actor=>{


  return(
    <div className='oyuncular-item p-[7px] items-center rounded-2xl   shadow-lg  shadow-slate-300 bg-orange-300 w-[122px] text-white font-bold items-center flex'>
     
      <p className='ml-[10px]'>{actor}</p>
    </div>
  )


}

)}



</div>






    </div>





</div>




</div>



{/* // cinamalar show film section **********************************/}


<div  className='show-film-conatiner container  mt-[77px]'>

 {/* ------header----- */}

<div className='header-show-film h-auto'>
  
<h1 className='h-show  relative  pb-[26px] bordre-b-4 text-[#034d68] font-bold  border-b-slate-300'>Cinamalar</h1>


</div>


{/* // show film info section */}
{/* {film?.FilmShows?.length} */}

<div className='show-info-map  mt-[77px] text-xl  font-bold'>
  
{film?.FilmShows&&film?.FilmShows.length>0 && film?.FilmShows.map(show=>{


return(

<div className='show-info-item grid grid-cols-12  '>

 {/* placeName */}

<div className='place col-span-4  '>

<p className='translate-y-[30%]'>
{ show?.placeName}
</p>
 


</div>


{/* // show day  */}
<div className='col-span-4'>
  
<p className='translate-y-[35%]'> {show?.showDay}</p>

</div>


{/* // show salon and hours  */}

<div className='col-span-4'>
  
{/* salon */}

<div className='salon text-center'>

 <p>salonNumber: {show?.salonNumber}</p> 

</div>

{/* hours */}
<div >
  

<p className=' grid grid-cols-2 text-center'>{show?.showTime?.map(time=>{


return (

<p className='p-[4px] w-[55px] bg-slate-200  rounded-lg font-bold' >

  {time}
</p>


)


})}</p>

</div>


</div>



</div>

)




}

)}


</div>




</div>


{/* ------- all films component ------------ */}


<Allfilms/>




</div>






    </div>
  )
}
