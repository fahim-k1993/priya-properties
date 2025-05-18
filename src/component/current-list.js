"use client";
import Image from "next/image";
// Import Swiper React components
import { Navigation,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function CurrentList() {
  return (
    <>
        <section className="current-list">
			<div className="container">
				<div className="heading">
					<h3 className="heading-text">Current <strong>Listings</strong></h3>
				</div>

				<div id="current-list">
				<Swiper
					// install Swiper modules
					modules={[Navigation, A11y]}
					spaceBetween={15}
					slidesPerView={3}
					navigation
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
					>
					
						<SwiperSlide className="swiper-slide">
							<div className="cl-card">
								<div className="status new">
									New
								</div>
								<div className="cl-card-img">
									<Image src="/demo.jpg" width={'100'} height={'100'} alt="property" />
								</div>
								<div className="cl-card-heading">
									Gas Filling Station
								</div>
								<div className="cl-card-body">
									<p><Image src="/pin.svg" width={'100'} height={'100'} alt="icon" /> West Flaminggo Road, Las Vegas</p>
									<p><Image src="/doller.svg" width={'100'} height={'100'} alt="icon" /> <strong>12,72,000</strong></p>
									<a href="#">See Details </a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="cl-card">
								<div className="status new">
									New
								</div>
								<div className="cl-card-img">
									<Image src="/demo.jpg" width={'100'} height={'100'} alt="property" />
								</div>
								<div className="cl-card-heading">
									Gas Filling Station
								</div>
								<div className="cl-card-body">
									<p><Image src="/pin.svg" width={'100'} height={'100'} alt="icon" /> West Flaminggo Road, Las Vegas</p>
									<p><Image src="/doller.svg" width={'100'} height={'100'} alt="icon" /> <strong>12,72,000</strong></p>
									<a href="#">See Details </a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="cl-card">
								<div className="status new">
									New
								</div>
								<div className="cl-card-img">
									<Image src="/demo.jpg" width={'100'} height={'100'} alt="property" />
								</div>
								<div className="cl-card-heading">
									Gas Filling Station
								</div>
								<div className="cl-card-body">
									<p><Image src="/pin.svg" width={'100'} height={'100'} alt="icon" /> West Flaminggo Road, Las Vegas</p>
									<p><Image src="/doller.svg" width={'100'} height={'100'} alt="icon" /> <strong>12,72,000</strong></p>
									<a href="#">See Details </a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="cl-card">
								<div className="status new">
									New
								</div>
								<div className="cl-card-img">
									<Image src="/demo.jpg" width={'100'} height={'100'} alt="property" />
								</div>
								<div className="cl-card-heading">
									Gas Filling Station
								</div>
								<div className="cl-card-body">
									<p><Image src="/pin.svg" width={'100'} height={'100'} alt="icon" /> West Flaminggo Road, Las Vegas</p>
									<p><Image src="/doller.svg" width={'100'} height={'100'} alt="icon" /> <strong>12,72,000</strong></p>
									<a href="#">See Details </a>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
    </>
  );
}

