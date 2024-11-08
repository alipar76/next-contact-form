import { useState } from 'react';

const ContactForm = () => {
  const [formFields, setFormFields] = useState({});

  return (
    <div className="bg-white sm:w-11/12 md:w-8/12 lg:w-5/12 p-7 rounded-10">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <div className="flex flex-col gap-y-5 mt-8">
        <div className="w-full flex gap-x-6">
          <div className="md:w-6/12 sm:w-full relative">
            <label className="text-sm" htmlFor="">
              First Name
            </label>
            <span className="ml-2 text-green-700">*</span>
            <input
              className="border-[1px] border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 hover:border-primary focus:border-primary"
              type="text"
            />
            {/* <div className="absolute top-full text-red-600 text-xs">
            This field is required
          </div> */}
          </div>
          <div className="md:w-6/12 sm:w-full">
            <label className="text-sm" htmlFor="">
              Last Name
            </label>
            <span className="ml-2 text-green-700">*</span>
            <input
              className="border-[1px] border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 hover:border-primary focus:border-primary"
              type="text"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-sm" htmlFor="">
            Email
          </label>
          <span className="ml-2 text-green-700">*</span>
          <input
            className="border-[1px] border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 hover:border-primary focus:border-primary"
            type="text"
          />
        </div>
        <div className="w-full">
          <div>
            <span className="text-sm cursor-default">Query Type</span>
            <span className="ml-2 text-green-700">*</span>
          </div>
          <div className="flex gap-x-6 mt-1">
            <div className="flex items-center w-6/12 border-[1px] border-gray-800 py-2 px-6 rounded-[5px] cursor-pointer duration-200 hover:border-primary">
              <div className="p-2 rounded-full border-[1px] border-gray-800"></div>
              <div className="ml-3">General Enquiry</div>
            </div>
            <div className="flex items-center w-6/12 border-[1px] border-gray-800 py-2 px-6 rounded-[5px] cursor-pointer duration-200 hover:border-primary">
              <div className="p-2 rounded-full border-[1px] border-gray-800"></div>
              <div className="ml-3">Support Request</div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <label className="text-sm" htmlFor="">
            Message
          </label>
          <span className="ml-2 text-green-700">*</span>
          <textarea className="border-[1px] border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 hover:border-primary focus:border-primary"></textarea>
        </div>
        <div className="w-full flex items-center">
          <div>
            <input
              className="border-[1px] border-gray-800 outline-none py-2 px-4 rounded-[5px] mt-1 cursor-pointer duration-200 hover:border-primary focus:border-primary"
              type="checkbox"
              id="checkbox"
            />
          </div>
          <label htmlFor="checkbox" className="ml-4 text-sm">
            I consent to being contacted by the team
          </label>
          <span className="ml-2 text-green-700">*</span>
        </div>
        <div className="w-full">
          <button className="w-full bg-primary text-white py-3 rounded-[5px] tracking-widest duration-200 hover:bg-green-dark">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
