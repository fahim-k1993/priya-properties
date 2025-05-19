import Link from 'next/link';
import Image from "next/image";

export default function Banner({pageData}) {
  return (
    <>  
        <div className='breadcrumb'>
                <Link href="/">Home</Link>/<span>{pageData.pageName}</span>
        </div>
    </>
  );
}