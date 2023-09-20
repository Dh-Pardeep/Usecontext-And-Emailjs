import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const From = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u3rfs9t', 'template_376noek', form.current, 'Z_KOGol0vj7O5N-Ni')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    const successAlert = () => {
        Swal.fire({
            title: 'Thank you for submitted',
            text: 'You clicked the button.',
            icon: 'success'
        });
    };
    // const questionAlert = () => {
    //     Swal.fire({  
    //         title: 'Do you have a problem to solve?!',  
    //         text: 'Ask us on dirask',
    //         icon: 'question'
    //       }); 
    // }

    // const customImageAlert = () => {
    //   Swal.fire({
    //     text: "your custom image",
    //     imageUrl: 'https://i.ibb.co/LktzszD/dirask.png'
    //   });
    // }
    const [formValues, setFormValues] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });
    const [records, setRecords] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setRecords([...records, formValues]);
        setFormValues({
            user_name: "",
            user_email: "",
            message: ""
        });
    };
    return (
        <div className="container_box mx-auto p-4 d-flex justify-content-center align-items-center">
            <div className="small_box w-100   d-flex justify-content-center align-items-center">
                <div onSubmit={(e) => handleSubmit(e)}>
                    <form ref={form} onSubmit={sendEmail} >
                        <label className='text-white pt-4'>Name</label>
                        <input placeholder='Name' name="user_name"
                            className=' w-100'
                            value={formValues.user_name}
                            onChange={(e) =>
                                setFormValues({ ...formValues, user_name: e.target.value })
                            }
                        ></input>
                        <br />
                        <label className='text-white'>Email</label>
                        <input  placeholder='Email' name="user_email" type="email"
                            className=' w-100'
                            value={formValues.user_email}
                            onChange={(e) =>
                                setFormValues({ ...formValues, user_email: e.target.value })
                            }
                        ></input>
                        <br />
                        <label className='text-white'>Message</label>
                        <textarea  placeholder='Message' name="message"
                            className=' w-100'
                            value={formValues.message}
                            onChange={(e) =>
                                setFormValues({ ...formValues, message: e.target.value })
                            }
                        ></textarea>
                        <br />
                        <button onClick={successAlert} className='mb-4 text-white inline-block bg-black' type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>



    )
}

export default From


