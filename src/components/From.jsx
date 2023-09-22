import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const From = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_col123h', 'template_z0ktny5', form.current, 'HLJjgMOe-RolOfJEM')
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Submitted it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Submitted!',
          'Your file has been submitted.',
          'Success'
        );
      };
    }
    );
    e.target.reset()
  };

  const successAlert = () => {
   
  };

  return (
    <div className='min-vh-100 d-flex align-items-center justify-content-center '>
      <div className='container_box p-5  position-relative z-2 '>
        <div className='small_box'>
          <form ref={form} onSubmit={sendEmail} className='d-flex flex-column p-4'>
            <label className='text-white py-2'>Name</label>
            <input required placeholder='Name' type="text" name="user_name" />
            <label className='text-white py-2'>Email</label>
            <input required placeholder='Email' type="email" name="user_email" />
            <label className='text-white py-2'>Message</label>
            <textarea className='resizetext' name="message" />
            <input className='mt-3' required placeholder='Message' onClick={successAlert} type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default From