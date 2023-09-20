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
        <div>
            <div onSubmit={(e) => handleSubmit(e)}>
                <form ref={form} onSubmit={sendEmail} >
                    <label>Name</label>
                    <input name="user_name"
                        value={formValues.user_name}
                        onChange={(e) =>
                            setFormValues({ ...formValues, user_name: e.target.value })
                        }
                    ></input>
                    <br />
                    <label>Email</label>
                    <input name="user_email" type="email"
                        value={formValues.user_email}
                        onChange={(e) =>
                            setFormValues({ ...formValues, user_email: e.target.value })
                        }
                    ></input>
                    <br />
                    <label>Message</label>
                    <textarea name="message"
                        value={formValues.message}
                        onChange={(e) =>
                            setFormValues({ ...formValues, message: e.target.value })
                        }
                    ></textarea>
                    <br />
                    <button onClick={successAlert} type="submit">Save</button>
                </form>
            </div>
        </div>


    )
}

export default From


