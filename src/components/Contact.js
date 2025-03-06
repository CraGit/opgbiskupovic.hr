"use client";

import React, { useState } from "react";
import * as prismic from "@prismicio/client";

export default function Contact({ heading, subtitle, button_text, settings }) {
  const data = settings?.data || {};
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      // Here you would typically send the form data to your backend
      // This is a placeholder for the actual form submission logic
      console.log("Form submitted:", formData);
      
      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="context-sec pt-24 pb-12 relative bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
          <h2 className="heading max-lg:text-center">
            {heading || "Contacts"}
          </h2>
          <p className="text-2xl font-prata leading-loose tracking-wide text-s_black max-lg:text-center">
            {subtitle || "Questions, or feature requests? Then just email us!"}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="">
            {data.phone_number && (
              <div className="grid grid-cols-1 lg:grid-cols-3 mb-8 lg:mb-16">
                <div className="font-medium text-sm tracking-wide text-s_proj max-lg:text-center">
                  Phone Number:
                </div>
                <div className="font-raleway font-semibold col-span-2 text-base text-s_black tracking-wider max-lg:text-center">
                  {data.phone_number}
                </div>
              </div>
            )}
            
            {data.email && (
              <div className="grid grid-cols-1 lg:grid-cols-3 mb-8 lg:mb-16">
                <div className="font-medium text-sm tracking-wide text-s_proj max-lg:text-center">
                  E-mail:
                </div>
                <div className="font-raleway font-semibold col-span-2 text-base text-s_black tracking-wider max-lg:text-center">
                  {data.email}
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-8 lg:mb-16">
              <div className="font-medium text-base tracking-wide text-s_proj max-lg:text-center">
                Social:
              </div>
              <div className="flex items-center max-lg:justify-center max-md:w-full gap-4 col-span-2">
                {data.facebook && (
                  <a 
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-s_black flex items-center justify-center transition-all duration-500 hover:bg-s_skin hover:border-s_skin"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.4314 10.1834L12.7739 8.03988H10.6645V6.64657C10.6645 6.06044 10.959 5.4877 11.9007 5.4877H12.8732V3.66233C12.3068 3.57335 11.7346 3.52522 11.161 3.51831C9.4249 3.51831 8.29146 4.54655 8.29146 6.40541V8.03988H6.367V10.1834H8.29146V15.3682H10.6645V10.1834H12.4314Z"
                        fill="#111827"
                      />
                    </svg>
                  </a>
                )}
                
                {data.instagram && (
                  <a 
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-s_black flex items-center justify-center transition-all duration-500 hover:bg-s_skin hover:border-s_skin"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.43179 9.44337C7.43179 8.25215 8.41139 7.28621 9.62011 7.28621C10.8288 7.28621 11.809 8.25215 11.809 9.44337C11.809 10.6346 10.8288 11.6005 9.62011 11.6005C8.41139 11.6005 7.43179 10.6346 7.43179 9.44337ZM6.24853 9.44337C6.24853 11.2785 7.75799 12.7661 9.62011 12.7661C11.4822 12.7661 12.9917 11.2785 12.9917 9.44337C12.9917 7.60821 11.4822 6.12061 9.62011 6.12061C7.75799 6.12061 6.24853 7.60821 6.24853 9.44337ZM12.3372 5.98886C12.3372 6.14244 12.3833 6.29259 12.4699 6.42032C12.5564 6.54806 12.6794 6.64763 12.8234 6.70646C12.9673 6.76529 13.1257 6.78073 13.2786 6.75083C13.4314 6.72093 13.5719 6.64703 13.6821 6.53847C13.7923 6.42992 13.8674 6.29159 13.8979 6.14097C13.9284 5.99035 13.9128 5.83421 13.8532 5.6923C13.7937 5.55039 13.6927 5.42907 13.5632 5.3437C13.4336 5.25832 13.2813 5.21272 13.1255 5.21266H13.1252C12.9163 5.21275 12.716 5.29455 12.5682 5.44009C12.4205 5.58563 12.3374 5.783 12.3372 5.98886V5.98886ZM6.96743 14.7106C6.32727 14.6818 5.97933 14.5768 5.7481 14.488C5.44154 14.3704 5.22281 14.2303 4.99284 14.0039C4.76288 13.7776 4.62052 13.5623 4.5017 13.2602C4.41157 13.0324 4.30493 12.6894 4.27583 12.0585C4.244 11.3764 4.23764 11.1715 4.23764 9.44342C4.23764 7.71537 4.24453 7.51104 4.27583 6.82838C4.30499 6.19749 4.41241 5.85515 4.5017 5.6267C4.62105 5.32458 4.76319 5.10902 4.99284 4.88238C5.2225 4.65574 5.44102 4.51545 5.7481 4.39835C5.97922 4.30952 6.32727 4.20443 6.96743 4.17575C7.65955 4.14438 7.86745 4.13812 9.62011 4.13812C11.3728 4.13812 11.5809 4.1449 12.2736 4.17575C12.9137 4.20448 13.2611 4.31035 13.4929 4.39835C13.7995 4.51545 14.0182 4.65605 14.2482 4.88238C14.4781 5.10871 14.62 5.32458 14.7393 5.6267C14.8294 5.85447 14.9361 6.19749 14.9652 6.82838C14.997 7.51104 15.0034 7.71537 15.0034 9.44342C15.0034 11.1715 14.997 11.3758 14.9652 12.0585C14.936 12.6894 14.8289 13.0323 14.7393 13.2602C14.62 13.5623 14.4778 13.7778 14.2482 14.0039C14.0185 14.2301 13.7995 14.3704 13.4929 14.488C13.2618 14.5768 12.9137 14.6819 12.2736 14.7106C11.5815 14.7419 11.3736 14.7482 9.62011 14.7482C7.86667 14.7482 7.65934 14.7419 6.96743 14.7106Z"
                        fill="#111827"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="relative w-full mb-8 lg:mb-12 before:contents-[''] before:absolute before:bottom-0 before:w-full before:z-[5] before:h-[1px] before:bg-s_proj group transition-all duration-500">
                <input 
                  type="text"
                  className="w-full relative z-[2] bg-transparent border-none outline-0 pt-4 pb-2.5 text-base font-medium leading-loose tracking-widest text-justify text-s_proj"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label className={`absolute ${formData.name ? '-top-2' : 'top-1.5'} left-0 z-[1] m-0 transition-all duration-500 ease-out text-base font-medium leading-loose text-justify text-s_proj tracking-wider group-focus:top-0 group-focus-within:-top-2`}>
                  Name
                </label>
                <div className="absolute w-0 h-0.5 left-1/2 bottom-0 bg-s_black transition-all duration-500 group-focus-within:w-full group-focus-within:left-0">
                </div>
              </div>
              
              <div className="relative w-full mb-8 lg:mb-12 before:contents-[''] before:absolute before:bottom-0 before:w-full before:h-[1px] before:bg-s_proj group transition-all duration-500">
                <input 
                  type="email"
                  className="w-full relative z-[2] bg-transparent border-none outline-0 pt-4 pb-2.5 text-base font-medium leading-loose tracking-widest text-justify text-s_proj"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className={`absolute ${formData.email ? '-top-2' : 'top-1.5'} left-0 z-[1] m-0 transition-all duration-500 ease-out text-base font-medium leading-loose text-justify text-s_proj tracking-wider group-focus:top-0 group-focus-within:-top-2`}>
                  Email
                </label>
                <div className="absolute w-0 h-0.5 left-1/2 bottom-0 bg-s_black transition-all duration-500 group-focus-within:w-full group-focus-within:left-0">
                </div>
              </div>
              
              <div className="relative w-full mb-8 lg:mb-12 before:contents-[''] before:absolute before:bottom-0 before:w-full before:h-[1px] before:bg-s_proj group transition-all duration-500">
                <textarea
                  className="w-full relative z-[2] bg-transparent border-none outline-0 pt-4 pb-2.5 text-base font-medium leading-loose tracking-widest text-justify text-s_proj resize-none"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label className={`absolute ${formData.message ? '-top-2' : 'top-1.5'} left-0 z-[1] m-0 transition-all duration-500 ease-out text-base font-medium leading-loose text-justify text-s_proj tracking-wider group-focus:top-0 group-focus-within:-top-2`}>
                  Write here
                </label>
                <div className="absolute w-0 h-0.5 left-1/2 bottom-0 bg-s_black transition-all duration-500 group-focus-within:w-full group-focus-within:left-0">
                </div>
              </div>
              
              {submitSuccess && (
                <div className="text-green-600 mb-4 font-medium">
                  Your message has been sent successfully!
                </div>
              )}
              
              {submitError && (
                <div className="text-red-600 mb-4 font-medium">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[150px] h-12 max-lg:mx-auto rounded-full outline-0 border-none relative z-20 bg-white flex items-center justify-center gap-2 group"
              >
                <span className="relative z-10 font-raleway px-4 font-semibold text-base">
                  {isSubmitting ? "SENDING..." : (button_text || "SUBMIT")}
                </span>
                <svg
                  className="relative z-10"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute h-12 w-12 aspect-square rounded-full -z-0 top-0 right-0 bg-s_skin transition-all duration-500 group-hover:w-full"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
