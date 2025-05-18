"use client";

import Image from "next/image";
import '../../styles/global.scss';
import Header from '../../component/header';
import Footer from '../../component/inner-footer';
import PageBanner from '../../component/page-banner';
import Breadcrumbs from '../../component/breadcrumb';
import SocialStatus from '../../component/social-status';

// Import Swiper React components
import { Navigation,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const pagedata = {
    pageName: 'About Us',
};

export default function About() {
  return (
  <>
    <div id="wrapper" className="inner-page">
      <Header />
        <PageBanner pageData={pagedata} />

        <div className="container">
            <Breadcrumbs pageData={pagedata} />

            <div className="a-com">
                <div className="img-side">
                    <Image src="/demo.jpg" width={300} height={300} alt="Priya" />
                </div>
                <div className="contant-side">
                    <h1>A New One That Suits <span>You Life</span> Classic</h1>
                    <p>
                        Welcome to Priya Properties, a striking new landmark redefining the cityscape. A masterful fusion of visionary architecture and thoughtfully crafted interiors, each residence is a testament to refined living.

                        With its sleek design and upscale finishes, Priya Properties offers what few others can: expansive living spaces, seamless comfort, and a vibrant community atmosphere. Enjoy exclusive access to over 10,000 square feet of curated indoor and outdoor amenities, designed to elevate everyday life and reflect the dynamic energy of the city.
                    </p>
                </div>
            </div>
        </div>
        <SocialStatus />
        <div className="our-story">
            <div className="container">
                <div className="heading">
                    <h3 className="heading-text">
                        Our <strong>Story</strong>
                    </h3>
                </div>

                <div className="our-story-inner">
                    <div className="img-side">
                        <Image src="/demo.jpg" width={300} height={300} alt="Our story" />
                    </div>
                    <div className="contant-side">
                        <h3>A New One That Suits <span>You Life</span> Classic</h3>
                        <p>
                            Welcome to Priya Properties, a striking new landmark redefining the cityscape. A masterful fusion of visionary architecture and thoughtfully crafted interiors, each residence is a testament to refined living.

                            With its sleek design and upscale finishes, Priya Properties offers what few others can: expansive living spaces, seamless comfort, and a vibrant community atmosphere. Enjoy exclusive access to over 10,000 square feet of curated indoor and outdoor amenities, designed to elevate everyday life and reflect the dynamic energy of the city.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="heading">
                <h3 className="heading-text">
                    Our <strong>Team</strong>
                </h3>
            </div>
            <div className="our-team">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    
                    <SwiperSlide>
                        <div className="emp-card">
                            <div className="emp-card-img">
                                <Image src="/priya.jpg" width={'100'} height={'100'} alt="Our story" />
                            </div>
                            <div className="emp-card-heading">
                                Priya
                                <span>Director, Priya Properties</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="emp-card">
                            <div className="emp-card-img">
                                <Image src="/priya.jpg" width={'100'} height={'100'} alt="Our story" />
                            </div>
                            <div className="emp-card-heading">
                                Priya
                                <span>Director, Priya Properties</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="emp-card">
                            <div className="emp-card-img">
                                <Image src="/priya.jpg" width={'100'} height={'100'} alt="Our story" />
                            </div>
                            <div className="emp-card-heading">
                                Priya
                                <span>Director, Priya Properties</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="emp-card">
                            <div className="emp-card-img">
                                <Image src="/priya.jpg" width={'100'} height={'100'} alt="Our story" />
                            </div>
                            <div className="emp-card-heading">
                                Priya
                                <span>Director, Priya Properties</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="emp-card">
                            <div className="emp-card-img">
                                <Image src="/priya.jpg" width={'100'} height={'100'} alt="Our story" />
                            </div>
                            <div className="emp-card-heading">
                                Priya
                                <span>Director, Priya Properties</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
      <Footer />
    </div>
  </>
  );
}