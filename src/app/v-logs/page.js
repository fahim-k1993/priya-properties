"use client";

import { useState } from 'react';
import Image from "next/image";
import '../../styles/global.scss';
import Header from '../../component/header';
import Footer from '../../component/inner-footer';
import PageBanner from '../../component/page-banner';
import Breadcrumbs from '../../component/breadcrumb';
import Modal from '../../component/video-modal';

const pagedata = {
  pageName: 'Our Video Logs',
};

export default function Vlogos() {
	const [isModalOpen, setModalOpen] = useState(false);

  const properties = [
    {
      id: 1,
      status: 'New',
      title: 'Gas Filling Station',
      image: '/demo.jpg',
      vidUrl: 'hhhhhhhhhhhhhhhhhhhhhhh',
      location: 'West Flaminggo Road, Las Vegas',
      price: '12,72,000',
    },
    {
      id: 2,
      status: 'Hot',
      title: 'Gas Filling Station',
      image: '/demo.jpg',
      vidUrl: 'hhhhhhhhhhhhhhhhhhhhhhh',
      location: 'West Flaminggo Road, Las Vegas',
      price: '12,72,000',
    },
    {
      id: 3,
      status: 'Sold',
      title: 'Gas Filling Station',
      image: '/demo.jpg',
      vidUrl: 'hhhhhhhhhhhhhhhhhhhhhhh',
      location: 'West Flaminggo Road, Las Vegas',
      price: '12,72,000',
    },
    {
        id: 4,
        status: 'New',
        title: 'Gas Filling Station',
        image: '/demo.jpg',
        vidUrl: 'hhhhhhhhhhhhhhhhhhhhhhh',
        location: 'West Flaminggo Road, Las Vegas',
        price: '12,72,000',
    },
    {
        id: 5,
        status: 'Hot',
        title: 'Gas Filling Station',
        image: '/demo.jpg',
        vidUrl: 'hhhhhhhhhhhhhhhhhhhhhhh',
        location: 'West Flaminggo Road, Las Vegas',
        price: '12,72,000',
    },
    {
        id: 6,
        status: 'Sold',
        title: 'Gas Filling Station',
        image: '/demo.jpg',
        vidUrl: 'hhhhhhhhhhhhhhhhhhhhhhh',
        location: 'West Flaminggo Road, Las Vegas',
        price: '12,72,000',
    },
  ];

  return (
    <>
      <div id="wrapper" className="inner-page">
        <Header />
        <PageBanner pageData={pagedata} />

        <div className="container">
          <Breadcrumbs pageData={pagedata} />

          <div className="project-list">
            {properties.map(property => (
              <div className="set video" key={property.id}>
                <div className="cl-card">
                  <div className="cl-card-img">
                    <div onClick={() => setModalOpen(true)} className='play-icon' data-url={property.vidUrl}>
                      <Image src="./play.svg" alt="icon" width={60} height={60}  />
                    </div>
                    <Image
                      src={property.image}
                      width={300}
                      height={200}
                      alt={property.title}
                      layout="responsive"
                    />
                  </div>
                  <div className='cl-card-body'>

                    <div className="cl-card-heading">{property.title}</div>
                    <p>
                      <Image src="/pin.svg" width={16} height={16} alt="Location" />{' '}
                      {property.location}
                    </p>
                    <p>
                      <Image src="/doller.svg" width={16} height={16} alt="Price" />{' '}
                      <strong>{property.price}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <video width="320" height="240" autoPlay loop muted>
            <source src="../../banner.webm" type="video/webm" />
            <source src="../../banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal>
        <Footer />
      </div>
    </>
  );
}
