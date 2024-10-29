'use client'
import React, { useState } from 'react';
import { ContactDotsSVG, ContactShapeSVG, ContactTopRightSVG } from '../../../public/project_images/ContactSVGs';
import Lottie from 'lottie-react';
import animationData from '../../../public/animations/contactanimation.json'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '',subject:'', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };




  return (
    <section className="relative z-10 overflow-hidden text-white py-20 px-10 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h2 className="mb-6 text-[32px] font-bold uppercase text-blue-600 sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH
              </h2>
              <p className="text-base text-justify leading-relaxed text-body-color">
                Thank you for visiting my portfolio! I&apos;m always open to discussing new
                projects, creative ideas, or opportunities to contribute to impactful
                initiatives. Whether you have a question, feedback, or would like to connect
                professionally, feel free to reach out.
              </p>

              <div className="flex w-full h-full">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className='w-full h-auto max-w-md mx-auto'
              />
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg text-black bg-white p-8 shadow-lg sm:p-12 ">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your Name"
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                     type="email"
                     id="email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     required
                     placeholder="Your Email"
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary   "
                  />
                </div>
                <div className="mb-6">
                  <input
                     type="text"
                     id="subject"
                     value={formData.subject}
                     placeholder="Subject"
                     onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary   "
                  />
                </div>
                <div className="mb-6">
                  <textarea
                   id="message"
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    placeholder="Your Message"
                    className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary   "
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <div>
                <span className="absolute -right-9 -top-10 z-[-1]">
                  <ContactShapeSVG />
                </span>
                <span className="absolute -right-10 top-[90px] z-[-1]">
                  <ContactDotsSVG />
                </span>
                <span className="absolute -bottom-7 -left-7 z-[-1]">
                  <ContactTopRightSVG />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
