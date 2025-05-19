"use client";

import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from "next/image";
import '../../styles/global.scss';
import Header from '../../component/header';
import Footer from '../../component/inner-footer';
import CurrentList from '../../component/current-list';


// import PageBanner from '../../component/page-banner';
import Breadcrumbs from '../../component/breadcrumb';
// import Modal from '../../component/video-modal';
import 'swiper/css';
import 'swiper/css/navigation';


const pagedata = {
  pageName: 'Product Name',
};

export default function Consumtion() {
  // const [isModalOpen, setModalOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const properties = {
    id: 1,
    status: 'New',
    title: 'Gas Filling Station',
    image: '/demo.jpg',
    vidUrl: 'hhhhhhhhhhhhhhhhhhhhhhh',
    location: 'West Flaminggo Road, Las Vegas',
    price: '12,72,000',
  }


  return (
    <>
      <div id="wrapper" className="inner-page">
        <Header />
        <div className='container'>
          <div className='product-top'>
            <div className='product-image-side'>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <Image width={400} height={500} alt="product img" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image width={400} height={500} alt="product img" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image width={400} height={500} alt="product img" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image width={400} height={500} alt="product img" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <video width="100%" height="100%" controls>
                    <source src="../../banner.webm" type="video/webm" />
                    <source src="../../banner.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image width={100} height={125} alt="product img" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image width={100} height={125} alt="product img" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image width={100} height={125} alt="product img" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image width={100} height={125} alt="product img" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image width={100} height={125} alt="product img" src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className='product-info-side'>
              <div className="brief-desc-content-box">
                <div className="sec-title style3">
                  <div className="sub-title">
                    <h4>Modern &amp; Luxury Villa</h4>
                  </div>
                  <h2>Brief Description</h2>
                </div>
                <div className="inner-content">
                  <div className="text">
                    <p>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit eiusmod tempor. Incididunt labore dolore magna aliqua.</p>
                  </div>
                  <ul>
                    <li>
                      <div className="inner">
                        <div className="icon">
                          <span className="icon-icon25 thm_clr1">
                            <Image width={60} height={60} alt='' src="./house-map.svg" />
                          </span>
                        </div>
                        <div className="title">
                          <h5>Total Space</h5>
                          <h3>945<sup>m2</sup></h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="icon">
                          <span className="icon-icon34 thm_clr1">
                            <Image width={60} height={60} alt='' src="./t-ruler.svg" />
                          </span>
                        </div>
                        <div className="title">
                          <h5>Living Area</h5>
                          <h3>892<sup>m2</sup></h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="icon">
                          <span className="icon-icon28 thm_clr1">
                            <Image width={60} height={60} alt='' src="./bedroom.svg" />
                          </span>
                        </div>
                        <div className="title">
                          <h5>Bedrooms</h5>
                          <h3>5</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="icon">
                          <span className="icon-icon35 thm_clr1">
                            <Image width={60} height={60} alt='' src="./toilet.svg" />
                          </span>
                        </div>
                        <div className="title">
                          <h5>Bathrooms</h5>
                          <h3>8</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="icon">
                          <span className="icon-icon33 thm_clr1">
                            <Image width={60} height={60} alt='' src="./kitchen.svg" />
                          </span>
                        </div>
                        <div className="title">
                          <h5>Kitchen</h5>
                          <h3>2</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="icon">
                          <span className="icon-icon36 thm_clr1">
                            <Image width={60} height={60} alt='' src="./floors.svg" />
                          </span>
                        </div>
                        <div className="title">
                          <h5>Floor Space</h5>
                          <h3>120<sup>m2</sup></h3>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="button-box">
                    <a className="btn" href="#"><span className="txt">Get In Touch</span></a>
                  </div>

                </div>
              </div>
            </div>    
          </div>
          <div className="apartments-details">
              <div className="sec-title">
                <h2>With Outstanding Facilities</h2>
                <h3>Immediate Occupancy Available</h3>
              </div>

              <div className="inner-content">
                <div className="text">
                  <div className="top-text">
                    <p>Proidents suntin culpa qui officia desmolit anim id estya laborum orem ipsum dolor sit amet sed ipsum dolor conse ctetur irure pariaturs. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse aliqua cillum.</p>
                </div>
                <ul>
                  <li>Cupidatat proidin culpa sed ipsum qui officia</li>
                  <li>Mollit anim est laborum sed perspiciatis </li>
                  <li>Omnis ate natus error sit voluptatem</li>
                  <li>Dolore mque laudantium totam re aperiam</li>
                </ul>
                <div className="bottom-text">
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                </div>
              </div>

              <div className="facilities-content-box">
                <div className="row">

                  <div className="set">
                    <div className="single-facilities-box">
                      <div className="icon">
                        <span className="icon-icon41">
                          <Image width={40} height={40} alt='' src="./entertainment.svg" />
                        </span>
                      </div>
                      <div className="title">
                        <h3><a href="#">Entertainment</a></h3>
                        <p>Get Mini Home Theatre</p>
                      </div>
                    </div>
                  </div>


                  <div className="set">
                    <div className="single-facilities-box">
                      <div className="icon">
                        <span className="icon-icon44">
                          <Image width={40} height={40} alt='' src="./security-cam.svg" />
                        </span>
                      </div>
                      <div className="title">
                        <h3><a href="#">Fully Secured</a></h3>
                        <p>CCTV Security Cameras</p>
                      </div>
                    </div>
                  </div>


                  <div className="set">
                    <div className="single-facilities-box">
                      <div className="icon">
                        <span className="icon-icon43">
                          <Image width={40} height={40} alt='' src="./restaurent.svg" />
                        </span>
                      </div>
                      <div className="title">
                        <h3><a href="#">Chef &amp; Cooking</a></h3>
                        <p>Kids Chair, Coffee Maker...</p>
                      </div>
                    </div>
                  </div>



                  <div className="set">
                    <div className="single-facilities-box">
                      <div className="icon">
                        <span className="icon-icon39">
                          <Image width={40} height={40} alt='' src="./hills.svg" />
                        </span>
                      </div>
                      <div className="title">
                        <h3><a href="#">Outside View</a></h3>
                        <p>Garden, Roofed Patio</p>
                      </div>
                    </div>
                  </div>


                  <div className="set">
                    <div className="single-facilities-box">
                      <div className="icon">
                        <span className="icon-icon42 ">
                          <Image width={40} height={40} alt='' src="./spa.svg" />
                        </span>
                      </div>
                      <div className="title">
                        <h3><a href="#">Spa &amp; Gym</a></h3>
                        <p>Unheated Outdoor Pool</p>
                      </div>
                    </div>
                  </div>


                  <div className="set">
                    <div className="single-facilities-box">
                      <div className="icon">
                        <span className="icon-icon40">
                          <Image width={40} height={40} alt='' src="./basin.svg" />
                        </span>
                      </div>
                      <div className="title">
                        <h3><a href="#">Sanitary Items</a></h3>
                        <p>Hair Dryer, Towels, Tub</p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

            </div>
        </div>
        <CurrentList />
        <Footer />
      </div>
    </>
  );
}
