import React from "react";
import whatsNewImg from "../../assets/whatsNew1.jpg";
import "./whatsNew.css";

const WhatsNew = ()=>{
    return(
        <section id='whatsNew'>
        <div className="whatsNew-container">
           <img className="whatsNew-image-container" src={whatsNewImg} alt="about here " />
          
          <div className="whatsNew-text">
            <text className="whatsNew-heading"> What's New  </text>

            <p className="whatsNew-paragraph">Xesthetix is more than a label; it's a celebration of boundless creativity. 
                We go beyond conventional fashion, championing extraordinary artists 
                and providing a distinguished platform for them to showcase their creations.
                 Our brand proudly defines the intersection of art and fashion, where the 'X' 
                 symbolizes the very essence of our commitment to the artistic soul..</p>
          </div>
          
        </div>
        </section>
    );
}
export default WhatsNew