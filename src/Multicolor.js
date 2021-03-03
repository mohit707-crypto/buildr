import React, { useState, useEffect } from 'react'
import { client } from './client';



function Multicolor() {
    
const [bannerData, setBannerData] = useState([]);

useEffect(() => {
    client.getEntries("2fnoYKdfLysypLgNec2FJv")
           .then ((entry)=> {
              setBannerData(entry.items);
              console.log(entry)
           })
           
}, []);






    return (
        <div>
             <section class="sectionColor">
            <div class="container largeContainer">
                <div class="contentWrapper">
                    <div class="content">
                        <h2 class="sectionTitle">
                            Multi-Colors 
                        </h2>
                        <p class="sectionText">
                            Make endless 3D figures with the multi colored Magnetic Sticks and Balls.
                        </p>
                        <div class="bgImage d-block d-md-none">
                            <img data-src="images/lpg-multicolorImg.jpg" class="img-fluid lazyload" alt="Image"/>
                        </div>
                        <div class="paymentBtnWrapper">
                            <a href="#CTASection" class="custom-btn scrollTo nonStickyBtn">
                                <span class="handIcon">👉</span> get your magnets
                            </a>
                            <div class="paymentIcon">
                                <img data-src="images/lpg-paymentIcons.jpg" class="img-fluid lazyload" alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div class="bgImage d-none d-md-block">
                        <img data-src="images/lpg-multicolorImg.jpg" class="img-fluid lazyload" alt="Image"/>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Multicolor
