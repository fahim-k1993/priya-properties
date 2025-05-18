import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  return (
    <>
       <footer>
			<div className="container">
				<div className="profile">
					<div className="p-img">
						{/* <Image src="/priya.jpg" alt="" /> */}
                        <Image
                            className="priya"
                            src="/priya.jpg"
                            alt="hamburger"
                            width={100} height={100}
                            priority
                        />
					</div>
					<div className="p-content">
						<div className="heading">
							<h3 className="heading-text">About <strong>PRIYA</strong></h3>

							<a href="#">Get in Touch</a>
						</div>

						<p>An experienced real estate agent renowned for her knowledge, honesty, and unwavering commitment to her clients. Specializing in both commercial and residential properties, she brings unmatched expertise in gas stations, liquor stores, convenience stores, strip malls, and business franchises.<br /><br />

							With dual licenses in TX and OK, she provides seamless real estate services across both states, delivering unparalleled value to her clients.</p>
					</div>
				</div>

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
						<Image src="/logo.png" alt="priya" width={100} height={100} priority />
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
						<Image src="/realtor.png" alt="raltor" width={100} height={100} priority />
					</div>
				</div>
			</div>
		</footer> 
    </>
  );
}