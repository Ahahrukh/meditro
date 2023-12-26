import  LightGallery  from 'lightgallery/react'
import React, { Component } from 'react'
//Styles
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

export default class Gallery extends Component {

  render() {
    
    return (
      <div class="gallery">
            <LightGallery 
              elementClassNames="custom-wrapper-class"
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              <a href={pic1} className="gallery-item">
                   <img src={pic1}  alt="" style={{"width":"430px" , "height":"300px" , margin:"100px 10px 10px 10px" }}/>
              </a> 
              <a href={pic2} class="image-container">
                <img src={pic2}  alt="" style={{"width":"430px" , "height":"300px" , margin:"100px 10px 10px 10px"}}/>
              </a>
              <a href={pic3} class="image-container">
                <img src={pic3}  alt="" style={{"width":"430px" , "height":"300px" , margin:"100px 10px 10px 10px"}}/>
              </a>
              <a href={pic4} class="image-container">
                <img src={pic4}  alt="" style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}}/>
              </a>
              <a href={pic5} class="image-container">
                <img src={pic5}  alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}}/>
              </a>
              <a href={pic6} class="image-container">
                <img src={pic6}  alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}}/>
              </a>
              <a href={pic7} class="image-container">
                <img src={pic7}  alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}}/>
              </a>
              <a href={pic8} class="image-container">
                <img src={pic8}  alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}}/>
              </a>
              <a href={pic9} class="image-container">
                <img src={pic9}  alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}}/>
              </a>
              <a href={pic10} class="image-container">
                <img src={pic10} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic11} class="image-container">
                <img src={pic11} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic12} class="image-container">
                <img src={pic12} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic13} class="image-container">
                <img src={pic13} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic14} class="image-container">
                <img src={pic14} alt=""  style={{"width":"430px" , "height":"300px" , "margin":"auto"}} />
              </a>
              <a href={pic15} class="image-container">
                <img src={pic15} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic16} class="image-container">
                <img src={pic16} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic17} class="image-container">
                <img src={pic17} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic18} class="image-container">
                <img src={pic18} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic19} class="image-container">
                <img src={pic19} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic20} class="image-container">
                <img src={pic20} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic21} class="image-container">
                <img src={pic21} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic22} class="image-container">
                <img src={pic22} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
              <a href={pic23} class="image-container">
                <img src={pic23} alt=""  style={{"width":"430px" , "height":"300px" , margin:"10px 10px 10px 10px"}} />
              </a>
            </LightGallery>
      </div>
    )
  }
}
