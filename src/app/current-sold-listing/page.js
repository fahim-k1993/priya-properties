"use client";

import { useState } from 'react';
import Image from "next/image";
import '../../styles/global.scss';
import Header from '../../component/header';
import Footer from '../../component/inner-footer';
import PageBanner from '../../component/page-banner';
import Breadcrumbs from '../../component/breadcrumb';

const pagedata = {
  pageName: 'Our Best Deals',
};

export default function CurrentSoldListing() {
  const [filter, setFilter] = useState('All');

  const properties = [
    {
      id: 1,
      status: 'New',
      title: 'Gas Filling Station',
      location: 'West Flaminggo Road, Las Vegas',
      price: '12,72,000',
      image: '/demo.jpg',
    },
    {
      id: 2,
      status: 'Hot',
      title: 'Gas Filling Station',
      location: 'West Flaminggo Road, Las Vegas',
      price: '12,72,000',
      image: '/demo.jpg',
    },
    {
      id: 3,
      status: 'Sold',
      title: 'Gas Filling Station',
      location: 'West Flaminggo Road, Las Vegas',
      price: '12,72,000',
      image: '/demo.jpg',
    },
    {
        id: 4,
        status: 'New',
        title: 'Gas Filling Station',
        location: 'West Flaminggo Road, Las Vegas',
        price: '12,72,000',
        image: '/demo.jpg',
    },
    {
        id: 5,
        status: 'Hot',
        title: 'Gas Filling Station',
        location: 'West Flaminggo Road, Las Vegas',
        price: '12,72,000',
        image: '/demo.jpg',
    },
    {
        id: 6,
        status: 'Sold',
        title: 'Gas Filling Station',
        location: 'West Flaminggo Road, Las Vegas',
        price: '12,72,000',
        image: '/demo.jpg',
    },
  ];

  const statuses = ['All', 'New', 'Hot', 'Sold'];

  const filtered = filter === 'All'
    ? properties
    : properties.filter(item => item.status === filter);

  return (
    <>
      <div id="wrapper" className="inner-page">
        <Header />
        <PageBanner pageData={pagedata} />

        <div className="container">
          <Breadcrumbs pageData={pagedata} />

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {statuses.map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={filter === status ? 'active' : ''}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="project-list">
            {filtered.map(property => (
              <div className="set" key={property.id}>
                <div className="cl-card">
                  <div className={`status ${property.status.toLowerCase()}`}>
                    {property.status}
                  </div>
                  <div className="cl-card-img">
                    <Image
                      src={property.image}
                      width={300}
                      height={200}
                      alt={property.title}
                      layout="responsive"
                    />
                  </div>
                  <div className="cl-card-heading">{property.title}</div>
                  <div className="cl-card-body">
                    <p>
                      <Image src="/pin.svg" width={16} height={16} alt="Location" />{' '}
                      {property.location}
                    </p>
                    <p>
                      <Image src="/doller.svg" width={16} height={16} alt="Price" />{' '}
                      <strong>{property.price}</strong>
                    </p>
                    <a href="#">See Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
