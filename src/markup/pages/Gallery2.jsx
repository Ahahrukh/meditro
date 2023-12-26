import React from 'react'
import  LightGallery  from 'lightgallery/react'
import '../../App.css'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
//Images
import pic1 from '../../images/gallery/1.jpg'
import pic2 from '../../images/gallery/2.jpg'
import pic3 from '../../images/gallery/3.jpg'
import pic4 from '../../images/gallery/4.jpg'
import pic5 from '../../images/gallery/5.jpg'
import pic6 from '../../images/gallery/6.jpg'
import pic7 from '../../images/gallery/7.jpg'
import pic8 from '../../images/gallery/8.jpg'
import pic9 from '../../images/gallery/9.jpg'
import pic10 from '../../images/gallery/10.jpg'
import pic11 from '../../images/gallery/11.jpg'
import pic12 from '../../images/gallery/12.jpg'
import pic13 from '../../images/gallery/2.jpg'
import pic14 from '../../images/gallery/14.jpg'
import pic15 from '../../images/gallery/15.jpg'
import pic16 from '../../images/gallery/16.jpg'
import pic17 from '../../images/gallery/17.jpg'
import pic18 from '../../images/gallery/18.jpg'
import pic19 from '../../images/gallery/19.jpg'
import pic20 from '../../images/gallery/20.jpg'
import pic21 from '../../images/gallery/21.jpg'
import pic22 from '../../images/gallery/22.jpg'
import pic23 from '../../images/gallery/23.jpg'
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
const Gallery2 = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (
    <>
        <section>
            <LightGallery 
            onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
                <a href={pic1}>
                   <img src={pic1} alt="" />
                </a> 
            </LightGallery>
        </section>
        <div class="gallery">
        <div class="image-container"  >
            <img src={pic2} />
        </div>
        <div class="image-container">
            <img src={pic3} />
        </div>
        <div class="image-container tall">
            <img src={pic4}/>
        </div>
        <div class="image-container">
            <img src={pic5}/>
        </div>
        <div class="image-container">
            <img src={pic6}/>
        </div>
        <div class="image-container tall">
            <img src={pic7}/>
        </div>
        <div class="image-container">
            <img src={pic8}/>
        </div>
        <div class="image-container">
            <img src={pic9}/>
        </div>
        <div class="image-container">
            <img src={pic10}/>
        </div>
        <div class="image-container">
            <img src={pic11} />
        </div>
        <div class="image-container tall">
            <img src={pic12} />
        </div>
        <div class="image-container tall">
            <img src={pic13} />
        </div>
        <div class="image-container">
            <img src={pic14} />
        </div>
        <div class="image-container">
            <img src={pic15} />
        </div>
        <div class="image-container tall">
            <img src={pic16} />
        </div>
        <div class="image-container tall">
            <img src={pic17} />
        </div>
        <div class="grid-item">
            <img src={pic18} />
        </div>
        <div class="image-container tall">
            <img src={pic19} />
        </div>
        <div class="image-container tall">
            <img src={pic20} />
        </div>
        <div class="image-container tall">
            <img src={pic21} />
        </div>
        <div class="image-container">
            <img src={pic22} />
        </div>
        <div class="image-container tall">
            <img src={pic23} />
        </div>
    </div>
      </>
  )
}

export default Gallery2