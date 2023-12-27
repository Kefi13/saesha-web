import React from "react";
import aboutImg from "../../assets/home1.jpg";
import "./home.css";

const Home = ()=>{
    return(
      <section id='home'>
        <div className="home-container">
          
          <div className="home-text">
            <text className="home-heading"> Xesthetix </text>

            <p className="home-paragraph">Xesthetix is more than a label; it's a celebration of boundless creativity. 
                We go beyond conventional fashion, championing extraordinary artists 
                and providing a distinguished platform for them to showcase their creations.
                 Our brand proudly defines the intersection of art and fashion, where the 'X' 
                 symbolizes the very essence of our commitment to the artistic soul..</p>
          </div>
          <img className="home-image-container" src={aboutImg} alt="about here " />
        
        </div>
        </section>
    );
}
export default Home