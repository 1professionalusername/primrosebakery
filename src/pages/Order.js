import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import SupportNav from "../components/SupportNav";
import SlimFooter from "../components/SlimFooter";
import SupportIcon from "../components/SupportIcon";
import emailjs from '@emailjs/browser';
import CookieCard from "../components/CookieCard";
import BrownieCard from "../components/BrownieCard";
import CupcakeCard from "../components/CupcakeCard";

export const Order = () => {
  const form = useRef();
  const {register,
        formState: {errors},
      } = useForm({
        mode: "all",
      })

  
  console.log(errors);

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
        (errors) => {
          console.log(errors.text);
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
        <input {...register("userName",{
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
          },
        })
      }
      className='nameInput' type="text" name="user_name" placeholder="Name"/>
      {errors.userName?.message}

        <label className="emailLabel">Email:</label>
        <input {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Must enter a valid email address"
          }
        })} placeholder= "Email" className='emailInput'type="email" name="user_email" required/>
        {errors.email?.message}
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
