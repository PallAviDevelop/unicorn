// import  styles from "@/app/styles/common.module.css"
// import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
// import Link from "next/link";

// const ContactCard = () => {
//     return (
//         <div className={styles.cardoutter}>
//             <div className={styles.cardbox}>
                
//                     <div className={styles["card-box"]}>
//                         <i> <MdEmail /> </i>
//                         <h2>Email</h2>
//                         <p>Monday to Friday Expected </p>
//                         <p className={styles.last_para}>response time: 72 hours </p>
//                         <Link href="/">  Send Email <span>-&gt;</span></Link>
//                     </div>

//                     <div className={styles["card-box"]}>
//                         <i> <MdVoiceChat /> </i>
//                         <h2>Live Chat</h2>
//                         <p>Weekdays: 9 AM — 6 PM ET</p>
//                         <p className={styles.last_para}>Weekends: 9 AM — 5 PM ET </p>
//                         <Link href="/" >  Chat Now <span>-&gt;</span></Link>
//                     </div>

//                     <div className={styles["card-box"]}>
//                         <i> <MdForum /> </i>
//                         <h2>Community Forum</h2>
//                         <p>Monday to Friday Expected </p>
//                         <p className={styles.last_para}>response time: 72 hours </p>
//                         <Link href="/" className={styles.anchorLink}>  Ask The Community <span>-&gt;</span></Link>
//                     </div>

//                 </div>
//             </div>
      
//     );
// };

// export default ContactCard;

"use client";

import { useState } from "react";

export default function ContactCard() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("First name: ", firstname);
    console.log("Last name: ", lastname);
    console.log("Phone number: ", phone);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        phone,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFirstname("");
      setLastname("");
      setPhone("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div className="flex flex-col md:flex-row my-3">
          {/* <label htmlFor="firstname">First Name</label> */}
          <input className="shadow-md my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            type="text"
            id="firstname"
            placeholder="John"
          />
           <input className="shadow-md my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            type="text"
            id="lastname"
            placeholder="Doe"
          />
        </div>
       
        <div className="flex flex-col md:flex-row my-3">
          {/* <label htmlFor="phone">Phone Number</label> */}
          <input
          className="shadow-md my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="tel"
            id="phone"
            placeholder="7398789728"
          />
          <input className="shadow-md my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
          />
          
        </div>

       

        <div className="flex flex-col md:flex-row my-3">
          {/* <label htmlFor="message">Your Message</label> */}
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="shadow-md my-2 py-2 px-4 rounded-md bg-white text-gray-300 w-full md:w-full md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <div className="max-w-sm space-y-4 text-start">
                           
                          
                           <button type='submit'
                               className="text-[#fff] block relative bg-[#0D86C1] hover:bg-[#063774] font-semibold rounded text-sm px-6 py-3">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                   <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                               </svg>
                               Send Message
                           </button>
                       </div>
        {/* <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button> */}
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}