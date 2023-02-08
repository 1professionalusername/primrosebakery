import React, { useRef } from "react";
import SupportNav from "../components/SupportNav";
import SlimFooter from "../components/SlimFooter";
import SupportIcon from "../components/SupportIcon";
import emailjs from '@emailjs/browser';
import CookieCard from "../components/CookieCard";
import BrownieCard from "../components/BrownieCard";
import CupcakeCard from "../components/CupcakeCard";

export const Order = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_z13awel",
        "template_waegdqh",
        form.current,
        "-Y8FA7i0qNIn9cMP_"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="body">
      <SupportNav />
      <SupportIcon />
      <div className="orderPageWrapper">
        <div className="orderHere">Order Here</div>
      <CookieCard />
        <BrownieCard />
        <CupcakeCard />
      <form className='form'ref={form} onSubmit={sendEmail}>
        <label className="nameLabel">Name:</label>
        <input className='nameInput'type="text" name="user_name" required/>
        <label className="emailLabel">Email:</label>
        <input className='emailInput'type="email" name="user_email" required/>
        <label className="messageLabel1">Dessert selection & quantity:</label>
        <textarea className='messageInput1'name="message" required/>
        <label className="messageLabel2">Special requests:</label>
        <textarea className='messageInput2'name="message"/>
        <div className="orderSubmitButtonContainer"><input className='orderSubmitButton' type="submit" value="Place Order" /></div>
      </form>
      </div>
      <SlimFooter />
    </div>
  );
};
export default Order;
