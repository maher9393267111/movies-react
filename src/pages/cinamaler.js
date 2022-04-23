import React from 'react'

import Navbar from '../components/navbar'

import { useEffect,useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default function Cinamaler() {

const [isopen, setIsopen] = useState(false);

const [photoIndex, setphotoIndex] = useState(0);


const images =[

    'https://www.cinemarine.com.tr/upload/gallery/1590413738IMG_6603.jpg',
    'https://www.cinemarine.com.tr/upload/gallery/1590413749IMG_6617.jpg',
    'https://www.cinemarine.com.tr/upload/gallery/1590413749IMG_6625.jpg',
    'https://www.cinemarine.com.tr/upload/gallery/1590413749IMG_6632.jpg' ,
    'https://www.cinemarine.com.tr/upload/gallery/1590413738IMG_6603.jpg'



]


  return (
    <div>

{/* <Navbar/>
 */}


<div className='images-container'>

<button className='  bg-orange-200' type="button" onClick={()=>setIsopen(true)}>
          Open Lightbox
        </button>


        {isopen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setIsOpen( false )}
            onMovePrevRequest={() =>
              setphotoIndex(
                 (photoIndex + images.length - 1) % images.length,
              )
            }
            onMoveNextRequest={() =>
              setphotoIndex(
                 (photoIndex + 1) % images.length,
              )
            }
          />
        )}



</div>


<div  className=' container  grid grid-cols-4'>
    

{images.map((image,index)=>{

return (

    <div onClick={()=>setIsopen(!isopen)}  className='  mr-[10px]  mt-[10px]'>
    <img src={image} alt=""/>
    </div>


)


}

)}

</div>

    </div>
  )
}
