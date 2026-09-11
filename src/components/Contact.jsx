import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields before submitting." });
      return;
    }

    setLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            to_name: "Madas Johnson",
            from_email: form.email,
            to_email: "jovialjohn4054@gmail.com",
            message: form.message,
          },
          publicKey
        )
        .then(
          () => {
            setLoading(false);
            setStatus({ type: "success", text: "Thank you! Your message has been sent successfully." });
            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            console.error("EmailJS Error:", error);
            // Fallback dispatch via mailto URL
            triggerMailtoFallback();
          }
        );
    } else {
      // Fallback dispatch if EmailJS environment keys are not configured
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    setLoading(false);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nSender Email: ${form.email}\nSender Name: ${form.name}`);
    window.location.href = `mailto:jovialjohn4054@gmail.com?subject=${subject}&body=${body}`;
    setStatus({
      type: "success",
      text: "Opening your default email client to send the message to jovialjohn4054@gmail.com.",
    });
    setForm({ name: "", email: "", message: "" });
  };


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Direct Contact Links for Fast Recruiter Access */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          <a
            href="mailto:jovialjohn4054@gmail.com"
            className="flex items-center gap-2 bg-tertiary px-4 py-2.5 rounded-xl border border-white/10 text-white hover:border-[#915EFF] transition-all"
          >
            <span>✉️</span> jovialjohn4054@gmail.com
          </a>
          <a
            href="https://github.com/johnny1786"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-tertiary px-4 py-2.5 rounded-xl border border-white/10 text-white hover:border-[#915EFF] transition-all"
          >
            <span>💻</span> github.com/johnny1786
          </a>
          <a
            href="https://drive.google.com/file/d/109oTgFsE9AyqJxcfm8KNNwQT6DGPdYSs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-tertiary px-4 py-2.5 rounded-xl border border-white/10 text-white hover:border-[#915EFF] transition-all"
          >
            <span>📄</span> Resume
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-white/5 font-medium focus:border-[#915EFF]/50'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-white/5 font-medium focus:border-[#915EFF]/50'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='How can I help you?'
              className='bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-white/5 font-medium focus:border-[#915EFF]/50'
              required
            />
          </label>

          {status && (
            <div
              className={`p-4 rounded-xl text-sm font-medium border ${
                status.type === "success"
                  ? "bg-green-500/10 text-green-300 border-green-500/30"
                  : "bg-red-500/10 text-red-300 border-red-500/30"
              }`}
            >
              {status.text}
            </div>
          )}

          <button
            type='submit'
            disabled={loading}
            className='bg-[#915EFF] hover:bg-[#7b46e6] disabled:opacity-50 py-3.5 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#915EFF]/25 transition-all cursor-pointer'
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
