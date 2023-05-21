import React from "react";
import "./contact.css";

import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-warrper">
        <div className="c-left">
          <h1 className="c-tittle">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 748 9544 556
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              vishalpanwar455@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              H-48,Jawahar Margh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b> What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="xyz@gmail.com" name="user_email" />
            <textarea name="Message" rows="5" placeholder="Message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
