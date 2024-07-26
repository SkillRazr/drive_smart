import React, { FormEvent, useState } from "react";
import { saveContacts } from "../services/api";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const saveContact = async (e: FormEvent) => {
    console.log("submit event", e);
    e.preventDefault();

    await saveContacts({ name, email: email, details: message });
    // saveContact service method
    console.log("form data", name);
  };

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const messageHandler = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <section id="contact-us" className="bg-blue-100 p-8 pb-12 mb-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="bg-white p-6 rounded shadow-md" onSubmit={saveContact}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={emailHandler}
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={messageHandler}
              id="message"
              name="message"
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
            />
          </div>
          <button
            onClick={() => {
              alert("button clicked");
            }}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
