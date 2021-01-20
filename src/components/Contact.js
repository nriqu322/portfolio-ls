import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {
  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_57ao26a', 'portfolio_template', e.target, 'user_HRrz3g2IoVn9uQDnFiLKI')
      .then(result => {
        toast.success(`Form sent!, Status: ${result.text}`, {
          position: 'bottom-right',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
        });
      }, error => {
        toast.error(`Form failed to send! Error: ${error.text}`, {
          position: 'bottom-right',
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback fail',
        });
      });
    e.target.reset();
  };

  return (
    <>
      <h1 className="section-title">Contact Me</h1>
      <div className="about-container d-md-flex justify-content-between">
        <div className="about-info mx-auto">
          I&apos;m always Interested in hearing about new projects,
          so if you&apos;d like to chat please fill the form
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <input className="about-input my-2 col-12 col-sm-6" id="firstname-input" placeholder="First Name" name="firstname" type="text" required />
          <input className="about-input my-2 col-12 col-sm-6" id="lastname-input" placeholder="Last Name" name="lastname" type="text" required />
          <input className="about-input my-2 col-12" id="email-input" placeholder="Email" name="email" type="text" required />
          <textarea className="about-input my-2 col-12" id="message-input" placeholder="Message" name="message" type="textarea" required />
          <input className="details-btn mt-3 btn btn-success" type="submit" value="Get in touch" />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
