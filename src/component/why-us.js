"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function WhyUs() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <section className="why-us">
      <div className="container">
        <div className="heading">
          <h3 className="heading-text">Why <strong>Us</strong></h3>
        </div>

        <div className="tabs">
          <button
            className={`tablinks ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            Our Services
          </button>
          <button
            className={`tablinks ${activeTab === 'transparency' ? 'active' : ''}`}
            onClick={() => setActiveTab('transparency')}
          >
            Transparency
          </button>
        </div>

        <div className="wrapper_tabcontent">
          {activeTab === 'services' && (
            <div className="tabcontent">
              <div className="wu-content">
                <div className="wu-img">
                  <Image src="/demo.jpg" width={100} height={100} alt="Service" />
                </div>
                <div className="wu-text">
                  <ul>
                    <li><strong>Commercial Real Estate:</strong> From gas stations to strip malls, find the perfect property for your business.</li>
                    <li><strong>Residential Real Estate:</strong> Helping you discover a place you’ll love to call home.</li>
                    <li><strong>Business Opportunities:</strong> Expert guidance in acquiring liquor stores, convenience stores, and franchises.</li>
                    <li><strong>Dual-State Expertise:</strong> Licensed in both TX and OK, offering seamless support across borders.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'transparency' && (
            <div className="tabcontent">
              <div className="wu-content">
                <div className="wu-img">
                  <Image src="/demo.jpg" width={100} height={100} alt="Transparency" />
                </div>
                <div className="wu-text">
                  <ul>
                    <li><strong>Transparency:</strong> We believe in open communication and honesty in all our dealings.</li>
                    <li><strong>Client-Centric Approach:</strong> Your needs and preferences are our top priority.</li>
                    <li><strong>Regular Updates:</strong> Stay informed with regular updates throughout the process.</li>
                    <li><strong>Feedback Loop:</strong> We value your feedback and continuously improve our services.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
