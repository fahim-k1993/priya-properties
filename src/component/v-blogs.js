"use client";
import Image from "next/image";
// Import Swiper React components
import { Navigation,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


export default function VideoBlogs() {
  return (
    <>
      <section className="v-blogs">
        <div className="container">
          <div className="heading">
            <h3 className="heading-text">Video <strong>Blogs</strong></h3>
          </div>
        </div>
			

				<div  id="v-blog">

				<Swiper
					// install Swiper modules
					modules={[Navigation, A11y]}
					spaceBetween={15}
					slidesPerView={3}
					navigation
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
					>
						<SwiperSlide>
						
							<div className="vb-card">
								<Image src="/demo.jpg" width={'100'} height={'100'} alt="Amazing stories from around the globes" />
								<div className="play-icon">
									<Image src="/play.svg" width={'100'} height={'100'} alt="icon" />
								</div>
							</div>
							<p>Amazing stories from around the globes</p>
						</SwiperSlide>
						<SwiperSlide>
						
							<div className="vb-card">
								<Image src="/demo.jpg" width={'100'} height={'100'} alt="Amazing stories from around the globes" />
								<div className="play-icon">
									<Image src="/play.svg" width={'100'} height={'100'} alt="icon" />
								</div>
							</div>
							<p>Amazing stories from around the globes</p>
						</SwiperSlide>
						<SwiperSlide>
						
							<div className="vb-card">
								<Image src="/demo.jpg" width={'100'} height={'100'} alt="Amazing stories from around the globes" />
								<div className="play-icon">
									<Image src="/play.svg" width={'100'} height={'100'} alt="icon" />
								</div>
							</div>
							<p>Amazing stories from around the globes</p>
						</SwiperSlide>
						<SwiperSlide>
						
							<div className="vb-card">
								<Image src="/demo.jpg" width={'100'} height={'100'} alt="Amazing stories from around the globes" />
								<div className="play-icon">
									<Image src="/play.svg" width={'100'} height={'100'} alt="icon" />
								</div>
							</div>
							<p>Amazing stories from around the globes</p>
						</SwiperSlide>	
					</Swiper>
					
				</div>
		  </section>
    </>
  );
}

