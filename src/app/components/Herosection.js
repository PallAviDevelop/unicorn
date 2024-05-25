"use client";
//import Bgnetwork from "../video/rain.mp4"

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import style from "@/app/styles/common.module.css";
import { bestseller } from "../data/data.js";
import CertificateSlide from "./certificateSlide/page.js";
// import fish from "./../images/Fish1.png";

const Herosection = ({ title, heading1, heading2, des1, des2, des3 }) => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <>
      <section className="center w-full hero">
        <div className={style["outerBanner"]}>
          <div className="mx-auto flex max-w-7xl items-center justify-between xl:p-5 lg:px-8 px-6 py-5">
            <div className="w-[100%] md:w-[100%] xl:mt-[2rem] md:mt-[3rem] xl:mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[3rem] xl:py-10">
              <div className="u-max-w-[480px] u-space-y-2 u-leading-tight">
                <h1 className="--font-minion xl:mt-4 xl:text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl sm:leading-[3.5rem]">
                  {title}
                </h1>
                <h1
                  style={{ color: "#0D86C1" }}
                  className="--font-minion xl:text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl sm:leading-[3.5rem]"
                >
                  {heading1}
                </h1>
                <h1
                  style={{ color: "#0D86C1" }}
                  className="--font-minion xl:text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl sm:leading-[3.5rem]"
                >
                  {heading2}
                </h1>
                <p className="text-xs raleway block antialiased font-sans xl:text-xl font-normal leading-relaxed text-white lg:pr-32">
                  {des1}
                </p>
                <p className="text-xs raleway block antialiased font-sans xl:text-xl font-normal leading-relaxed text-white lg:pr-32">
                  {des2}
                </p>
                <p className="text-xs raleway block antialiased font-sans xl:text-xl font-normal leading-relaxed text-white lg:pr-32">
                  {des3}
                </p>
                <div className="sm:max-w-none flex sm:flex-row sm:justify-start xl:mt-6">
                  <span className="inline-block rounded-full text-sm font-normal mb-2 py-1">
                    <button
                      style={{ backgroundColor: "#0D86C1" }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-normal xl:py-2 py-1 px-2 xl:px-10 border border-blue-700 rounded xl:text-2xl text-1xl"
                    >
                      Buyers
                    </button>
                  </span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm mr-2 mb-2">
                    <button
                      style={{ backgroundColor: "#0D86C1" }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-normal xl:py-2 py-1 px-2 xl:px-10 border border-blue-700 rounded xl:text-2xl text-1xl"
                    >
                      Sellers
                    </button>
                  </span>
                </div>
              </div>
              <div className={style.r_sec}>
                <Image
                  className="items-center w-full h-full mx-auto"
                  src="/images/Fish-Plate.png"
                  width={736}
                  height={557}
                  alt="imgseller"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto cm seller">
        <h2 className="mt-[1.5rem] text-center text-[28px] text-black font-semibold mb-4">
          Best Seller Products
        </h2>
        <ul className="w-[100%] md:w-[100%] mt-[2rem] md:mt-[3rem] mb-[3rem] mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem] px-4">
          {bestseller.map((item, i) => (
            <li className="bg-base-300 card mb-4" key={i}>
              <div className="img-box">
                <Image
                  className="items-center w-full h-full"
                  src={item.imgseller}
                  width={252}
                  height={291}
                  alt="imgseller"
                />
                <div className="img-caption">
                  <ul className="box-holder">
                    <li>title 1</li>
                    <li>title 2</li>
                    <li>title 3</li>
                    <li>title 4</li>
                  </ul>
                </div>
              </div>
              <h3 className={style.Cattitle}>{item.name}</h3>
            </li>
          ))}
        </ul>
      </section>
<section>
<div id="bestseller" class="wrapperSeller">
  <div class="cardSeller"><img src="/images/Black Pomfret.png"/>
    <div class="infoSeller">
      <h1>Mountain</h1>
      <ul>
     <li> <p>Lorem Ipsum is simply </p></li>
     <li> <p>Lorem Ipsum is simply dummy </p></li>
     </ul>
    </div>
  </div>
  <div class="cardSeller"><img src="/images/Ribbon Fish.png"/>
    <div class="infoSeller">
      <h1>Road</h1>
      <ul>
     <li> <p>Lorem Ipsum is simply </p></li>
     <li> <p>Lorem Ipsum is simply dummy </p></li>
     </ul>
     
    </div>
  </div>
  <div class="cardSeller"><img src="/images/Seabass.png"/>
    <div class="infoSeller">
      <h1>Protester</h1>
      <ul>
     <li> <p>Lorem Ipsum is simply </p></li>
     <li> <p>Lorem Ipsum is simply dummy </p></li>
     </ul>
     
    </div>
  </div>
</div>
</section>
      <section className={style.mapwrap}>
      
      <div className="w-full mx-auto">
      <h2 className="titlenetwork mt-[1.5rem] text-center text-[28px] text-white font-semibold mb-4">
              Network
            </h2>
      <video src="UnicornNetwork.mp4" ref={vidRef} muted autoPlay loop className="video"/>
            </div>
      </section>

      <section className="w-full py-10 cm choose-sec">
        <h2 className="mt-[1rem] text-center text-[28px] text-black font-semibold mb-4">
          Why Choose Us
        </h2>
        <div
          data-aos="fade-down"
          className="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden aos-init aos-animate"
          data-v-b444fb2c=""
        >
          <div className="col-span-12 lg:col-span-7 py-12" data-v-b444fb2c="">
            <div className="w-full" data-v-b444fb2c="">
              <Image
                className="py-12 mx-auto"
                src="/Why-Choose-us-Fish.png"
                width={500}
                height={470}
                alt="logo"
              />
            </div>
          </div>{" "}
          <div
            className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20"
            data-v-b444fb2c=""
          >
            <ul className="space-y-4 sm:space-y-2" data-v-b444fb2c="">
              <li className="space-y-2" data-v-b444fb2c="">
                <div className="flex items-center space-x-2">
                  <span>
                    <span className="text-sky-500 i">At Unicorn Seafoods</span>,
                    we transcend the ordinary to offer an extraordinary seafood
                    experience. Our commitment to excellence starts from the
                    source, with direct partnerships ensuring the freshest catch
                    from fishermen and farmers worldwide.
                  </span>
                </div>{" "}
              </li>{" "}
              <li className="space-y-2" data-v-b444fb2c="">
                <div className="flex items-center space-x-2">
                  <span>
                    With state-of-the-art facilities meeting USA and EU
                    standards, we guarantee quality and safety in every bite.
                    But it's not just about the products, it's about the
                    journey. Our seamless platform connects buyers and sellers,
                    offering real-time inventory and transparent transactions.
                    With zero buying agent commission, service charges, or
                    hidden costs, we prioritize fairness and trust.
                  </span>
                </div>{" "}
              </li>{" "}
              <li className="space-y-2" data-v-b444fb2c="">
                <div className="flex items-center space-x-2">
                  <span>
                    We don't just deliver seafood; we deliver exceptional
                    service. Choose Unicorn Seafoods for an unparalleled seafood
                    experience that goes beyond the plate.
                  </span>
                </div>{" "}
              </li>
            </ul>{" "}
          </div>
        </div>
      </section>
      <section className="container cm certificate">
        <div className="w-[90%] md:w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <h2 className="--font-minion mt-[1rem] text-center text-[28px] text-black font-semibold mb-4">
          Certifications
          </h2>
          <p className="raleway mt-[1rem] text-black text-opacity-60 text-center">
            We ensure the products are certified with necessary quality
            assurance required as per the, buying country standards. Our
            products also undergo a thorough inspection by our local quality
            agents.
          </p>
          <div>
            <CertificateSlide />
          </div>
        </div>
      </section>
      <section className="mx-auto w-full sched">
        <div className={style.bgNavyBlue}>
          <span className="w-[90%] md:w-[90%] mb-[3rem] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem] container">
            <h2>Need help? Contact our experts.</h2>
            <button className={style.btn}>Schedule a Call </button>
          </span>
        </div>
      </section>
    </>
  );
};

export default Herosection;
