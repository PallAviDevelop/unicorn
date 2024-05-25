import React from "react";
import Image from "next/image";
//import Link from 'next/link'
// import { Link } from "react-router-dom";
//import StarRatings from "react-star-ratings";
import Filters from "../components/layout/Filters";
import HeaderBanner from "../components/layout/HeaderBanner";
import { productItem } from "../data/data.js";

const Products = () => {
  return (
    <div className="products" >
      <HeaderBanner />
      <section className="py-12">
        <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row -mx-4">
        {/* <Filters /> */}
        </div>
          <div className="flex flex-col md:flex-row -mx-4">
            

            <main className="md:w-2/3 lg:w-full px-3">
            {productItem.map((item, i) => (
              <article key={i} className="overflow-hidden shadow-sm mb-5 bg-[#F3FBFF] w-full">
              <div className="flex flex-col md:flex-row container max-w-screen-xl mx-auto px-4">
                <div className="md:w-1/4 flex p-3">
                  <div
                    style={{
                      width: "80%",
                      height: "70%",
                      position: "relative",
                    }}
                  >
                    <Image
                className="items-center w-full h-full"
                src={item.imgproductItem}
                width={240}
                height={240}
                alt="product"
              />
                    
                  </div>
                </div>
                <div className="md:w-2/4">
                  <div className="mt-5 mb-32">
                    {/* <Link to={`/`} className="hover:text-blue-600">
                      Lorem Ipsum is simply dummy text
                    </Link> */}
                    <div className="flex flex-wrap items-center space-x-2 mb-2">
                      <div className="ratings">
                        <div className="my-1">
                          {/* <StarRatings
                            rating={5}
                            starRatedColor="#ffb829"
                            numberOfStars={5}
                            starDimension="18px"
                            starSpacing="1px"
                            name="rating"
                          /> */}
                        </div>
                      </div>
                     </div>
                    <div className="col-span-1"><a className="text-skin-base text-2xl font-semibold leading-5 min-h-[30px] line-clamp-2 mb-1.5 hover:text-skin-primary" href="/products/{id}">{item.title}</a><div className="text-12px sm:text-sm mt-auto text-gray-400 mb-2">{item.descrip}</div></div>
                    
                    </div>
                    <div className="flex gap-2">certificates
                  <span> <Image className="w-full h-full" 
                      src={"/images/certi1.png"}
                      alt="product anme"
                      height="27"
                      width="23"
                    /></span><span> <Image
                    src={"/images/certi2.png"}
                    alt="product anme"
                    height="23"
                    width="26"
                  /></span>
                  <span> <Image className="w-full h-full" src={"/images/certi3.png"}
                    alt="product anme"
                    height="23"
                    width="26"
                  /></span>
                  <span> <Image className="w-full h-full"
                    src={"/images/certi4.png"}
                    alt="product anme"
                    height="23"
                    width="26"
                  /></span>
                    </div>
                </div>
                <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                  <div className="p-5">
                  <h3>Price range</h3>
                    <span className="text-xl font-semibold text-black">
                    {item.pricerange}
                    </span>

                    <p className="text-gray-500">To access price, send request
to supplier</p>
                    <div className="my-3">
                      <a className="px-4 py-2 inline-block text-white bg-[#0D86C2] border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                        {" "}
                        Request Price{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            ))}
             
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
