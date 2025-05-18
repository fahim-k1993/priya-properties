import Image from "next/image";

export default function Gallery() {
  return (
    <>
        <section className="gallery">
          <div className="container">
            <div className="heading">
              <h3 className="heading-text">Closed <strong>Transaction</strong></h3>
            </div>

            <div className="gallery-mess">
              <div className="div1 im-4x3"> <div className="imgbot"><Image src="/demo.jpg" fill alt="gallery" /></div></div>
              <div className="div2 im-4x3"> <div className="imgbot"><Image src="/demo.jpg" fill alt="gallery" /></div></div>
              <div className="div3 im-4x3"> <div className="imgbot"><Image src="/demo.jpg" fill alt="gallery" /></div></div>
              <div className="div4 im-4x6"> <div className="imgbot"><Image src="/demo3.jpg" fill alt="gallery" /></div></div>
              <div className="div5 im-6x3"> <div className="imgbot"><Image src="/demo2.jpg" fill alt="gallery" /></div></div>
              <div className="div6 im-4x3"> <div className="imgbot"><Image src="/demo.jpg" fill alt="gallery" /></div></div>
              <div className="div7 im-4x6"> <div className="imgbot"><Image src="/demo3.jpg" fill alt="gallery" /></div></div>
              <div className="div8 im-6x3"> <div className="imgbot"><Image src="/demo2.jpg" fill alt="gallery" /></div></div>
            </div>
          </div>
        </section>
    </>
  );
}

