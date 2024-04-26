import React from 'react';
import './Contact.css';
import mail from '../../assets/email.png';
import phone from '../../assets/phone.png';
import location from '../../assets/location.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "73a06225-88ed-42d6-a7aa-5c084be567d2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <><div>
      <h2 className="title">Contact Us</h2>
      <p className="subtitle">Get in Touch</p>
    </div><div className='contact'>
        <div className='contact-col'>
          <h3>Send Us A Message</h3>
          <p>Feel free to reach out through contact from or find our contact information below. Your Feedback, Questions, and
            sugggestens are  always welcome. We will get back to you as soon as possible.
          </p>
          <ul>
            <li> <img src={mail} alt="" />HotdogCart21@gmail.com</li>
            <li>  <img src={phone} alt=""/>+85 12 376 3445</li>
            <li>  <img src={location} alt=""/>205/6 B <br /> Baker roade <br />London</li>
          </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter Your Name'required/>
            <label>Phone Number</label>
            <input type="tel" name='Phone' placeholder='Enter Your Mobile Number'required/>
            <label>Write Your Message Here</label>
            <textarea name="message" rows="6" placeholder='Write Your Message Here'required></textarea>
            <button type = 'Submit'className='btn dark-btn'>Submit Now</button>
          </form>
          <span>{result}</span>
        </div>

      </div></>
  );
}

export default Contact;
