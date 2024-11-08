import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact us form",
};

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-4/12 p-7 rounded-10">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <div className="flex flex-col gap-y-5 mt-8">
          <div className="w-full flex gap-x-6">
            <div className="w-6/12">
              <label className="text-sm" htmlFor="">
                First Name
              </label>
              <span className="ml-2 text-green-700">*</span>
              <input
                className="border-[1px] border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 hover:border-primary focus:border-primary"
                type="text"
              />
            </div>
            <div className="w-6/12">
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
              <label className="text-sm" htmlFor="">
                Query Type
              </label>
              <span className="ml-2 text-green-700">*</span>
            </div>
            <div className="flex gap-x-6">
              <div className="w-6/12">
                <input
                  className="border-[1px] border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 hover:border-primary focus:border-primary"
                  type="text"
                />
              </div>
              <div className="w-6/12">
                <input
                  className="border-[1px] border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 hover:border-primary focus:border-primary"
                  type="text"
                />
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
    </div>
  );
}
