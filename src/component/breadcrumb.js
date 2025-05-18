import Link from 'next/link';
import Image from "next/image";

export default function Banner({pageData}) {
  return (
    <>  
        <div className='breadcrumb'>
                <a href="/">Home</a>/<span>{pageData.pageName}</span>
        </div>
    </>
  );
}