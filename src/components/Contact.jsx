import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
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
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_uljboci",
        "template_8p33929",
        {
          from_name: form.name,
          to_name: "Saad",
          from_email: form.email,
          to_email: "muhammadibrahimibnmaqsood@gmail.com",
          message: form.message,
        },
        "fcId4OtRzeL5gU33v"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex gap-10 flex-col-reverse overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#111111] p-8 rounded-[15px] border border-white/5 shadow-2xl relative"
      >
        {/* Decorative corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ffc3]/30" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ffc3]/30" />

        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[1px] bg-[#00ffc3]" />
          <p className="text-[#00ffc3] font-mono tracking-[0.3em] uppercase text-sm">
            Get in touch
          </p>
        </div>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase mb-8">
          Con<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffc3] to-slate-500">tact.</span>
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-2">
              01. Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Saad"
              className="bg-[#0a0a0a] py-4 px-6 placeholder:text-slate-700 text-white rounded-sm border border-white/10 font-mono outline-none focus:border-[#00ffc3] transition-all duration-300"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-2">
              02. Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@provider.com"
              className="bg-[#0a0a0a] py-4 px-6 placeholder:text-slate-700 text-white rounded-sm border border-white/10 font-mono outline-none focus:border-[#00ffc3] transition-all duration-300"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-2">
              03. Message
            </span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="bg-[#0a0a0a] py-4 px-6 placeholder:text-slate-700 text-white rounded-sm border border-white/10 font-mono outline-none focus:border-[#00ffc3] transition-all duration-300 resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-[#00ffc3] py-4 px-10 outline-none w-fit text-black font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:shadow-[0_0_20px_#00ffc3] transition-all duration-300 active:scale-95"
          >
            {loading ? "Transmitting..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");