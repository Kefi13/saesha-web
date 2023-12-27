import React from "react";
import './magzine.css'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import magzine1 from "../../assets/magzine1.jpeg";
import magzine2 from "../../assets/magzine2.jpeg";
import magzine3 from "../../assets/magzine3.jpeg";
import magzine4 from "../../assets/magzine4.jpeg";
const Magzine= ()=>{
    const NextArrow = ({ onClick }) => (
        <div className="arrow-m next-m" onClick={onClick}>
          <KeyboardArrowRightIcon/>
        </div>
      );  
    
      const PrevArrow = ({ onClick }) => (
        <div className="arrow-m prev-m" onClick={onClick}>
          <KeyboardArrowLeftIcon/>
        </div>
      );
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Display 3 images at a time
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

      };

      const images = [
        magzine1,
        magzine2,
        magzine3,
        magzine4
        
        // Add more image URLs as needed
      ];  
      
     
    return(
        <section id='magzine'>
        <div className="magzine-container">
            <text className="magzine-heading"> Magzine </text>
    
           

        <Slider {...settings} className="slider-container">
                
                {images.map((image, index) => (
                  <div key={index}>
                    <img className="magzine-image" src={image} alt={`slide ${index + 1}`} />
                  </div>
                ))}
              
              </Slider>
              
        
            


        </div>
        </section>
    );
}


export default Magzine;