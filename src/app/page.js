import Image from "next/image";
// import styles from "./page.module.css";
import '../styles/global.scss';
import Header from '../component/header';
import Footer from '../component/footer';

import Banner from '../component/banner';
import SocialStatus from '../component/social-status';
import WhyUs from '../component/why-us';
import CurrentList from '../component/current-list';
import Gallery from '../component/gallery';
import VideoBlogs from '../component/v-blogs';
import HowWorks from '../component/h-works';



export default function Home() {
  return (
  <>
    <div id="wrapper">
      <Header />
      <Banner />
      <SocialStatus />
      <WhyUs />
      <CurrentList />
      <Gallery />
      <VideoBlogs />
      <HowWorks />

      <Footer />
    </div>
  </>
  );
}