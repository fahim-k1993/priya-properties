"use client";

import { useState } from 'react';
import Image from "next/image";

import '../../styles/global.scss';
import Header from '../../component/header';
import Footer from '../../component/inner-footer';
import PageBanner from '../../component/page-banner';
import Breadcrumbs from '../../component/breadcrumb';


const pagedata = {
  pageName: 'Contact us',
};

export default function vLogos() {


  return (
    <>
      <div id="wrapper" className="inner-page">
        <Header />
        <PageBanner pageData={pagedata} />
        <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510578851!2d76.76355803886992!3d28.644287347036204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1747489352803!5m2!1sen!2sin" width="100%" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="container contact-outer">
          <Breadcrumbs pageData={pagedata} />
          <div className="contact-form-outer-box ">
            <div className="contact-inner-box ">
              <div className="contact-image-box">
                <Image width={570} height={765} alt='contact' src="/contact-image.jpg" />
              </div>
              <div className="contact-form">
                <div className="sec-title">
                  <div className="title-icon">
                    <span className="icon-design"></span>
                  </div>
                  <div className="heading"><h3 className="heading-text">Get In <strong>Touch</strong></h3></div>
                </div>
                <form id="contact-form" name="contact_form" className="default-form2" action="assets/inc/sendmail.php" method="post" noValidate="novalidate">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="input-box">
                        <input type="text" name="form_name" defaultValue="" placeholder="Your name" required="" aria-required="true" />
                      </div>
                      <div className="input-box">
                        <input type="email" name="form_email" defaultValue="" placeholder="Email address" required="" aria-required="true" />
                      </div>
                      <div className="input-box">
                        <input type="text" name="form_phone" defaultValue="" placeholder="Phone number" />
                      </div>
                      <div className="input-box">
                        <input type="text" name="form_subject" defaultValue="" placeholder="Subject" />
                      </div>
                      <div className="input-box">
                        <textarea name="form_message" placeholder="Write message" required="" aria-required="true"></textarea>
                      </div>
                      <div className="button-box">
                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" defaultValue="" />
                          <button className="btn" type="submit" data-loading-text="Please wait...">
                            <span className="txt">Send Message</span>
                          </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              

            </div>
          </div>
        </div>
        <div className="container">
          <ul className="contact-info-box">
            <li className="single-contact-info-box">
              <div className="icon">
                <span className="icon-icon68">
                  <Image src="/mobile.svg" width={120} height={120} alt="Phone us" />
                </span>
              </div>
              <div className="text">
                <h3>Phone Us</h3>
                <p><a href="tel:123456789">+1 (258) 985 703</a></p>
                <p><a href="tel:123456789">+1 (258) 985 808</a></p>
              </div>
            </li>
            <li className="single-contact-info-box">
              <div className="icon">
                <span className="icon-icon67">
                  <Image src="/map.svg" width={120} height={120} alt="Visit us" />
                </span>
              </div>
              <div className="text">
                <h3>Visit Us</h3>
                <p>31 Camden Place, High Mills<br /> Newyork - USA 10930</p>
              </div>
            </li>
            <li className="single-contact-info-box">
              <div className="icon">
                <span className="icon-icon66">
                  <Image src="/mail.svg" width={120} height={120} alt="Email us" />
                </span>
              </div>
              <div className="text">
                <h3>Email Us</h3>
                <p><a href="mailto:logistic@email.com">support@pp.com</a><br /> <a href="tel:123456789">info@domain.com</a></p>
              </div>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}
