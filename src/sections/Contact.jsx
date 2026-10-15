import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Facebook,
  MessageCircle,
  Instagram,
} from "lucide-react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { site } from "../data/site";
import emailjs from "@emailjs/browser";

const empty = { name: "", email: "", subject: "", message: "" };
const inputClass =
  "w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-white placeholder:text-muted/60 focus:border-accent focus:outline-none";

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (!v.subject.trim()) e.subject = "Enter a subject.";
  if (v.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);
    setStatus("");

    if (Object.keys(found).length > 0) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_iqa032b",
        "template_v8z1hvh",
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        {
          publicKey: "YkC-jRrTygksNvPcX",
        },
      );

      setStatus("success");
      setValues(empty);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    ["name", "Name", "text"],
    ["email", "Email", "email"],
    ["subject", "Subject", "text"],
  ];

  return (
    <Section id="contact">
      <div className="rounded-4xl border border-accent/20 bg-linear-to-br from-card to-[#171717] p-8 sm:p-14">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal
              as="h2"
              className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              Let's Make Your Idea Look Expensive{" "}
              <span className="animate-pulse hover:animate-none cursor-pointer">
                🚀
              </span>
            </Reveal>
            <Reveal as="p" delay={120} className="mt-4 text-lg text-muted">
              Have a project or opportunity in mind? Send me a message and let's
              talk about it.
            </Reveal>

            {/* My Social */}
            <Reveal delay={240} className="mt-8 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors duration-300 hover:text-accent"
              >
                <Mail className="text-accent" />
                Mail Me
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-accent"
              >
                <Github className="text-accent" />
                My Github
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-accent"
              >
                <Linkedin className="text-accent" />
                LinkedIn
              </a>

              <a
                href="https://www.facebook.com/moali3850"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-accent"
              >
                <Facebook className="text-accent" />
                Facebook
              </a>

              <a
                href="https://www.instagram.com/moali3850"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-accent"
              >
                <Instagram className="text-accent" />
                Instagram
              </a>

              <a
                href="https://wa.me/201012435235"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-accent"
              >
                <MessageCircle className="text-accent" />
                WhatsApp
              </a>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              {fields.map(([name, label, type]) => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="mb-1 block text-sm text-muted"
                  >
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={values[name]}
                    onChange={onChange}
                    className={inputClass}
                    aria-invalid={!!errors[name]}
                  />
                  {errors[name] && (
                    <p role="alert" className="mt-1 text-sm text-red-400">
                      {errors[name]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={values.message}
                  onChange={onChange}
                  className={`${inputClass} resize-none`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p role="alert" className="mt-1 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-accent px-7 py-3 font-bold text-black transition hover:brightness-110 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p role="status" className="text-sm text-accent">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p role="alert" className="text-sm text-red-400">
                  Failed to send. Please try again.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
