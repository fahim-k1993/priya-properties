import Link from 'next/link';
import Image from "next/image";

export default function Banner({ pageData }) {
  //if (!pageData) return null; // Optional safeguard
  return (
    <>
        <div className='inner-banner'>
            <Image src="/demo2.jpg" fill alt="banner" />
            <h3>{pageData.pageName}</h3>
        </div>
    </>
  );
}