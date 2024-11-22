import { ChangeEvent, MouseEvent, useState } from 'react';
import { z } from 'zod';

interface IFormField {
  [key: string]: string | boolean;
}

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  queryType: z.string().min(1, 'Query type is required'),
  message: z.string().min(1, 'Message is required'),
  confirm: z.boolean().refine((val) => val === true, 'You must agree to be contacted'),
});

const ContactForm = () => {
  const [formFields, setFormFields] = useState<IFormField>({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    Message: '',
    confirm: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const { value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleQueryTypeClick = (name: string, value: string) => {
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>, name: string) => {
    const { value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const { checked } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse(formFields);

    if (!result.success) {
      const validationErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        validationErrors[err.path[0] as string] = err.message;
      });
      setErrors(validationErrors);
      return;
    }

    setErrors({});
  };

  return (
    <div className="bg-white sm:w-11/12 md:w-8/12 lg:w-5/12 p-7 rounded-10">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <div className="flex flex-col gap-y-5 mt-8">
        <div className="w-full flex gap-x-6">
          <div className="md:w-6/12 sm:w-full relative">
            <label className="text-sm" htmlFor="">
              First Name
            </label>
            <span className="ml-1 text-green-700">*</span>
            <input
              className={`border border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 ${
                errors.firstName
                  ? 'border-red'
                  : 'focus:border-primary hover:border-primary'
              }`}
              onChange={(e) => handleInputChange(e, 'firstName')}
              type="text"
            />
            {errors.firstName && (
              <div className="absolute top-full left-1 text-red text-xs">
                {errors.firstName}
              </div>
            )}
          </div>
          <div className="md:w-6/12 sm:w-full relative">
            <label className="text-sm" htmlFor="">
              Last Name
            </label>
            <span className="ml-1 text-green-700">*</span>
            <input
              className={`border border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 ${
                errors.lastName
                  ? 'border-red'
                  : 'focus:border-primary hover:border-primary'
              }`}
              onChange={(e) => handleInputChange(e, 'lastName')}
              type="text"
            />
            {errors.lastName && (
              <div className="absolute top-full left-1 text-red text-xs">
                {errors.lastName}
              </div>
            )}
          </div>
        </div>
        <div className="w-full relative">
          <label className="text-sm" htmlFor="">
            Email
          </label>
          <span className="ml-1 text-green-700">*</span>
          <input
            className={`border border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 ${
              errors.email ? 'border-red' : 'focus:border-primary hover:border-primary'
            }`}
            onChange={(e) => handleInputChange(e, 'email')}
            type="text"
          />
          {errors.email && (
            <div className="absolute top-full left-1 text-red text-xs">
              {errors.email}
            </div>
          )}
        </div>
        <div className="w-full relative">
          <div>
            <span className="text-sm cursor-default">Query Type</span>
            <span className="ml-1 text-green-700">*</span>
          </div>
          <div className="flex gap-x-6 mt-1">
            <div
              className="flex items-center w-6/12 border border-gray-800 py-2 px-6 rounded-[5px] cursor-pointer duration-200 hover:border-primary"
              onClick={() => handleQueryTypeClick('queryType', 'General Enquiry')}
            >
              <div className="p-2 rounded-full border border-gray-800"></div>
              <div className="ml-3">General Enquiry</div>
            </div>
            <div
              className="flex items-center w-6/12 border border-gray-800 py-2 px-6 rounded-[5px] cursor-pointer duration-200 hover:border-primary"
              onClick={() => handleQueryTypeClick('queryType', 'Support Request')}
            >
              <div className="p-2 rounded-full border-[1px] border-gray-800"></div>
              <div className="ml-3">Support Request</div>
            </div>
          </div>
          {errors.queryType && (
            <div className="absolute top-full left-1 text-red text-xs">
              {errors.queryType}
            </div>
          )}
        </div>
        <div className="w-full relative">
          <label className="text-sm" htmlFor="">
            Message
          </label>
          <span className="ml-1 text-green-700">*</span>
          <textarea
            className={`border border-gray-800 outline-none py-2 px-4 w-full rounded-[5px] mt-1 cursor-pointer duration-200 ${
              errors.message ? 'border-red' : 'focus:border-primary hover:border-primary'
            }`}
            onChange={(e) => handleTextareaChange(e, 'message')}
          ></textarea>
          {errors.message && (
            <div className="absolute top-full left-1 text-red text-xs">
              {errors.message}
            </div>
          )}
        </div>
        <div className="w-full flex items-center relative">
          <div>
            <input
              className="border-[1px] border-gray-800 outline-none py-2 px-4 rounded-[5px] mt-1 cursor-pointer duration-200 hover:border-primary focus:border-primary"
              onChange={(e) => handleCheckboxChange(e, 'confirm')}
              type="checkbox"
              id="checkbox"
            />
          </div>
          <label htmlFor="checkbox" className="ml-4 text-sm">
            I consent to being contacted by the team
          </label>
          <span className="ml-1 text-green-700">*</span>
          {errors.confirm && (
            <div className="absolute top-full left-1 text-red text-xs">
              {errors.confirm}
            </div>
          )}
        </div>
        <div className="w-full mt-3">
          <button
            className="w-full bg-primary text-white py-3 rounded-[5px] tracking-widest duration-200 hover:bg-green-dark"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
