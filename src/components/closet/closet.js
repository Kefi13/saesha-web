import React from "react";
import './closet.css'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import closet1 from "../../assets/closet1.jpg";
import closet2 from "../../assets/closet2.jpg";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Closet= ()=>{
    const NextArrow = ({ onClick }) => (
        <div className="arrow next" onClick={onClick}>
          <KeyboardArrowRightIcon/>
        </div>
      );
    
      const PrevArrow = ({ onClick }) => (
        <div className="arrow prev" onClick={onClick}>
          <KeyboardArrowLeftIcon/>
        </div>
      );
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display 3 images at a time
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

      };

      const images = [
        closet1,
        closet2,
        closet1,
        closet2,
        closet1
        
        // Add more image URLs as needed
      ];  
      
     
    return(
        <div className="Closet-container">
            <text className="closet-heading"> Closet </text>
    
           

        <Slider {...settings} className="slider-container">
                
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`slide ${index + 1}`} />
                  </div>
                ))}
              
              </Slider>
              
        
            


        </div>
    );
}


export default Closet;