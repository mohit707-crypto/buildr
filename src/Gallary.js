import React, {useState, useEffect} from 'react'
import { client } from './client';

function Gallary() {

const [bannerData, setBannerData] = useState([]);

useEffect(() => {
    client.getEntries("5nTBB6Kyjd3x7aBmI3W2Ho")
           .then ((entry)=> {
              setBannerData(entry.items);
              console.log(entry)
           })
           .catch(console.error);
}, []);

console.log("mack >>",
    bannerData[5]?.fields?.sectionImage[0]?.fields?.file?.url
)
console.log("mack >>",
    bannerData[5]?.fields?.sectionImage[1]?.fields?.file?.url
)
console.log("mack >>",
    bannerData[5]?.fields?.sectionImage[2]?.fields?.file?.url
)
console.log("mack >>",
    bannerData[5]?.fields?.sectionImage[3]?.fields?.file?.url
)
console.log("mack >>",
    bannerData[5]?.fields?.sectionImage[4]?.fields?.file?.url
)


    return (
        <div>
              <section className="sectionImgGallary">
            <div className="sliderWrapper">
                <div className="gallarySlider">
                    <div className="item">
                        <div className="imgWrapper">
                            <img src={bannerData[5]?.fields?.sectionImage[0]?.fields?.file?.url} className="img-fluid" alt="Image"/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="imgWrapper">
                            <img src={ bannerData[5]?.fields?.sectionImage[1]?.fields?.file?.url} className="img-fluid" alt="Image"/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="imgWrapper">
                            <img src={bannerData[5]?.fields?.sectionImage[2]?.fields?.file?.url} className="img-fluid" alt="Image"/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="imgWrapper">
                            <img src={bannerData[5]?.fields?.sectionImage[3]?.fields?.file?.url} className="img-fluid" alt="Image"/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="imgWrapper">
                            <img src={bannerData[5]?.fields?.sectionImage[4]?.fields?.file?.url} className="img-fluid" alt="Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Gallary
