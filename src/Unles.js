import React,{useState, useEffect} from 'react'
import { client } from './client';

function Unles() {
    const [bannerData, setBannerData] = useState([]);
    useEffect(() => {
      client
        .getEntries("78D6ob7GrYO7s07u9E7J9o")
        .then((entry) => {
          setBannerData(entry.items);
          console.log(entry)
        })
        .catch(console.error);
    }, []);
    
      console.log("jack >>>",
      bannerData[2]?.fields?.sectionImage[0].fields?.file?.url
      )
    return (
        <div>
              <section className="sectionUnleashMind">
            <div className="container largeContainer">
                <h2 className="sectionTitle text-center">
                    Unleash Your Mind
                </h2>
                <p className="sectionText text-center">
                    You can create buildings, shapes, geometric patterns, etc., the possibilities are endless!
                </p>
                <div className="paymentBtnWrapper">
                    <a href="#CTASection" className="custom-btn scrollTo nonStickyBtn">
                        <span className="handIcon">👉</span> get your magnets
                    </a>
                    <div className="paymentIcon">
                        <img src={bannerData[2]?.fields?.sectionImage[0].fields?.file?.url} className="img-fluid lazyload" alt="Image"/>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Unles;
