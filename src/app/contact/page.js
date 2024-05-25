"use client";
import style from "@/app/styles/common.module.css";
import { useState } from "react";
import ContactCard from "../components/ContactCard";
import ContactCopy from "./contactCopy";

const Contact = () => {
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    phone: "",
    msg: "",
  });
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserdata((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handlesubmit = (e) => {e.preventDefault();};
  return (
    <>
     <section id="map" class="center w-full common relative h-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <div
          className="
		bg-no-repeat bg-cover bg-left-top
		bg-[url('/Vector4.png')] h-[325px]
		xl:bg-[url('/images/Vector4.png')]
"
        >
          <div className={style.bannertitle}>
            <h1 className={style.l_sec}>Get In Touch</h1>
          </div>
        </div>
      </section>
    <section class="mb-32">

    
  
  <section className="container mx-auto">
  <div class="lg:col-span-2 bg-[#EDF8FD] rounded sm:p-10 p-4 z-10 block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                    <h2 class="text-3xl text-black text-center font-extrabold mb-6">Contact Us for Enquiry</h2>
                    <div className="lg:w-[500] flex-col items-center flex mx-auto justify-center">
                    {/* <form>
                    <div className="flex flex-col md:flex-row my-3">
                        <input id="fname" type="text" className="shadow-md my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="First Name" />
                        <input id="lname" type="text" className="shadow-md my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Last Name" />
                    </div>
                    <div className="flex flex-col md:flex-row my-3">
                        <input id="fname" type="text" className="shadow-md my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email-Id" />
                        <input id="lname" type="text" className="shadow-md my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Phone No." />
                    </div>
                   
                    <div className="flex flex-col md:flex-row my-3">
                        <textarea id="message" type="text" className="shadow-md my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-full md:ml-2 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Message" />
                       </div>
                        <div className="max-w-sm space-y-4 text-start">
                           
                          
                            <button type='button'
                                className="text-[#fff] block relative bg-[#0D86C1] hover:bg-[#063774] font-semibold rounded text-sm px-6 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                    <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                                </svg>
                                Send Message
                            </button>
                        </div>
                    </form> */}
                     <ContactCard/>
                    </div>
                   
                    {/* <form>
                        <div class="max-w-sm mx-auto space-y-4">
                            <input type="text" placeholder="Name" class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none" />
                            <input type="email" placeholder="Email" class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none" />
                            <input type="email" placeholder="Phone No." class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none"/>
                            <textarea placeholder="Message" rows="6" class="w-full bg-gray-100 rounded px-6 text-sm pt-3 outline-none"/>
                            <button type="button" class="text-[#333] mx-auto block relative bg-gray-100 hover:bg-gray-200 font-semibold rounded text-sm px-6 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" class="mr-2 inline" viewBox="0 0 548.244 548.244">
                                    <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000"></path>
                                </svg>
                                Send Message
                            </button>
                        </div>
                    </form> */}
                </div>
  </section>
  <div class="container px-6 md:px-12 mx-auto">
    <div
      class="">
      <div class="flex flex-wrap">
       
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div class="flex flex-wrap">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div class="flex items-start">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg> */}
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">
                    Technical support
                  </p>
                  <p class="text-sm text-neutral-500">
                    example@gmail.com
                  </p>
                  <p class="text-sm text-neutral-500">
                    1-600-890-4567
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div class="flex items-start">
                <div class="srink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg> */}
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">
                    Address
                  </p>
                  <p class="text-sm text-neutral-500">
                    abcd, <br/>
                        xyz <br/>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
              <div class="align-start flex">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                    {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" class="w-7 h-7"
                      viewBox="0 0 111.756 122.879" enable-background="new 0 0 111.756 122.879" xml:space="preserve">
                      
                    </svg> */}

                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">Land Line</p>
                  <p class="text-neutral-500"> (0421) 431 2030
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
              <div class="align-start flex">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-sky-200 p-4 text-primary">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg> */}
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">Mobile</p>
                  <p class="text-neutral-500"> +91 123456789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
    
    </div>
 
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
      width="100%" height="480" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      </div>
  </div>
  
 
</section>

    </>
  );
};

export default Contact;
