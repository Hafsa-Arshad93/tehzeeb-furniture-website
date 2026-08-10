import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_abnlx4i",
        "template_tf9o38d",
        form.current,
        "6aVQDwqCfJ3G71pj1"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <div>
      <section className="text-zinc-950 body-font relative ">
        <h1 className="leading-relaxed text-yellow-600  text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-dancing tracking-widest sm:tracking-wider [word-spacing:15px] text-center py-4">
     ~ Contact Us ~
    </h1>
<div className="bg-white container mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 px-5 py-4">
          {/* Map Section */}
          <div className="w-full lg:w-[65%] bg-[#eee7db] rounded-lg border border-zinc-300 overflow-hidden p-6 flex flex-col shadow-lg min-h-[600px]">         
               <div className="relative w-full h-94 border border-zinc-300 mb-4 rounded overflow-hidden ">
            <iframe
              width="100%"
              height="100%"
              frameBorder={0}
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Peshawar,+Pakistan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              }}
            />
          </div>


            <div className="bg-[#faf7f0] flex flex-col sm:flex-row flex-wrap justify-between border border-zinc-300 py-4 rounded shadow-md text-center sm:text-left">


              <div className="w-full sm:w-1/2 px-4 mb-4 sm-0">
                <h2 className="title-font font-semibold text-[#6b4423] tracking-widest text-xs">
                  ADDRESS
                </h2>

                <p className="mt-1 text-sm break-words text-zinc-700">
                  University Road, Peshawar, Khyber Pakhtunkhwa, Pakistan
                </p>
              </div>



              <div className="w-full sm:w-1/2 px-4 mt-4 lg:mt-0 text-center sm:text-left break-words">

                <h2 className="title-font font-semibold text-[#6b4423] tracking-widest text-xs">
                  EMAIL
                </h2>


                <a
                  href="mailto:tehzeebfurniture40@gmail.com"
                  className="text-[#8b5e34] leading-relaxed text-sm break-all"
                >
                  tehzeebfurniture40@gmail.com
                </a>



                <h2 className="title-font font-semibold text-[#6b4423] tracking-widest text-xs mt-4">
                  PHONE
                </h2>


                <p className="leading-relaxed text-sm text-zinc-700">
                  +92-311-9146635
                </p>

              </div>


            </div>
          </div>



          {/* Feedback Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:w-[32%] bg-[#d8c7ae] border border-zinc-300 flex flex-col p-6 rounded-lg shadow-lg min-h-[600px]"          >


            <h2 className="text-zinc-900 text-xl mb-1 font-medium title-font">
              Send Us Your Feedback
            </h2>


            <p className="leading-relaxed mb-4 text-zinc-800 text-lg">
              We’d love to hear your thoughts! Share your experience with our
              products or website.
            </p>



            <div className="relative mb-3">

              <label
                htmlFor="name"
                className="leading-7 text-base text-zinc-900"
              >
                Name
              </label>


              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Your full name"
                required
                className="w-full bg-[#faf7f0] border border-zinc-300 rounded focus:border-[#8b5e34] focus:ring-2 focus:ring-[#d8c7ae] text-base outline-none text-zinc-800 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out"
              />

            </div>



            <div className="relative mb-3">

              <label
                htmlFor="email"
                className="leading-7 text-base text-zinc-900"
              >
                Email
              </label>


              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Your email address"
                required
                className="w-full bg-[#faf7f0] border border-zinc-300 rounded focus:border-[#8b5e34] focus:ring-2 focus:ring-[#d8c7ae] text-base outline-none text-zinc-800 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out"
              />

            </div>




            <div className="relative mb-3">

              <label
                htmlFor="message"
                className="leading-7 text-base text-zinc-900"
              >
                Message
              </label>


              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                required
                className="w-full bg-[#faf7f0] border border-zinc-300 rounded focus:border-[#8b5e34] focus:ring-2 focus:ring-[#d8c7ae] h-24 text-base outline-none text-zinc-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />

            </div>



            <button
              type="submit"
              className="text-white bg-[#8b5e34] border-0 py-2 px-6 hover:bg-[#6b4423] rounded text-lg mb-2 cursor-pointer"
            >
              Submit
            </button>



            <p className="text-sm text-zinc-800 mt-1">
              Your feedback helps us improve and serve you better!
            </p>


          </form>


        </div>
      </section>
    </div>
  );
}

export default Contact;