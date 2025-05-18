import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  return (
    <>
       <footer>
			<div className="container">

				<div className="social-btns">
					<a href="#">
						<Image src="/facebook.svg" alt="facebook" width={100} height={100} priority /> Facebook
					</a>
					<a href="#">
						<Image src="/instagram.svg" alt="instagram" width={100} height={100} priority /> Instagram
					</a>
					<a href="#">
						<Image src="/linkedin.svg" alt="linkedin" width={100} height={100} priority /> Linkedin
					</a>
					<a href="#">
						<Image src="/youtube.svg" alt="youtube" width={100} height={100} priority /> YouTube
					</a>
				</div>

				<div className="footer-bootom">
					<div className="logo-site">
						<Image src="/logo.png" alt="pro search" width={100} height={100} priority />
						<div>
						<a href="#" className="call">(972) 214-5450</a>
						<a href="#" className="mail">Priya@priyarealestate.com</a>
						</div>
					</div>
					<div className="mid-cont">
						<p>Texas Law requires all real estate license holders to provide the TREC Information about Brokerage Services and Consumer Protection Notice to all prospective clients.<br /><br />
						<a href="">Consumer Protection Notice</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="">Information About Brokerage Service</a></p>
					</div>
					<div className="right-cont">
						<Image src="/EHO.png" alt="eho" width={100} height={100} priority />
						<Image src="/realtor.png" alt="realtor" width={100} height={100} priority />
					</div>
				</div>
			</div>
		</footer> 
    </>
  );
}