'use client'; // If you're using App Router

import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) { // adjust scroll threshold here
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    <header className={`header ${scrolled ? 'add-bg' : ''}`}>
        <div className="container navbar">
            <div className="toggle-btn">
                <Image
                          className="logo"
                          src="/hamburger-menu.svg"
                          alt="hamburger"
                          width={32}
                          height={32}
                          priority
                        />
            </div>
            <div className="logo">
                <Image
                          className="logo-img"
                          src="/logo.png"
                          alt="Next.js logo"
                          width={180}
                          height={38}
                          priority
                        />
            </div>
            <nav id="mainNav">
                <Link href="/">Home</Link>
                <Link href="/about">About Priya</Link>
                <Link href="/current-sold-listing">Current and Sold</Link>
                {/* <Link href="#">Current Listings</Link> */}
                <Link href="/v-logs">V Blogs</Link>
                <Link href="/videos">Videos</Link>
                <Link href="/contact" className="nav-btn">Contact Us</Link>
            </nav>
            <Link href="#" className="call-btn">
                <Image
                          className="logo"
                          src="/call-img.png"
                          alt="Next.js logo"
                          width={180}
                          height={38}
                          priority
                        />
            </Link>
        </div>
    </header>
    </>
  );
}