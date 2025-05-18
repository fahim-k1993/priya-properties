import Link from 'next/link';
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <section className="banner">
        <video width="320" height="240" autoPlay loop muted>
          <source src="../../banner.webm" type="video/webm" />
          <source src="../../banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
}