import { useState } from "react";

import social from "../data/social.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";

const contactItems = [
  {
    icon: faPhone,
    text: social.phone,
    href: `tel:${social.phone}`,
  },
  {
    icon: faWhatsapp,
    text: social.phone,
    href: `https://wa.me/20${social.phone.slice(1)}`,
    external: true,
  },
  {
    icon: faTelegram,
    text: "@mohamed1_2_3_4",
    href: social.telegram,
    external: true,
  },
  {
    icon: faEnvelope,
    text: social.email,
    href: `mailto:${social.email}`,
  },

  {
    icon: faLocationDot,
    text: "Beni Suef, Egypt",
  },
];

const pill =
  "flex w-full max-w-xs items-center gap-3 rounded-lg bg-ac px-4 py-3 font-medium text-white";

export default function Contact({ t }) {
  const [f, setF] = useState({ name: "", email: "", phone: "", msg: "" });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (f.name.trim().length < 2) er.name = t.errs.name;
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = t.errs.email;
    if (f.msg.trim().length < 10) er.msg = t.errs.msg;
    if (!/^\d{8,15}$/.test(f.phone.replace(/[\s-]/g, "")))
      er.phone = t.errs.phone;
    setErr(er);
    if (!Object.keys(er).length) setDone(true);
  };

  const field = (k, label, area) => {
    const C = area ? "textarea" : "input";
    return (
      <div>
        <label htmlFor={`f-${k}`} className="mb-1.5 block text-sm font-medium">
          {label}
        </label>
        <C
          id={`f-${k}`}
          rows={area ? 5 : undefined}
          type={
            !area && k === "email" ? "email" : k === "phone" ? "tel" : undefined
          }
          inputMode={k === "phone" ? "numeric" : undefined}
          placeholder={label}
          value={f[k]}
          onChange={(e) => setF({ ...f, [k]: e.target.value })}
          aria-invalid={!!err[k]}
          aria-describedby={err[k] ? `e-${k}` : undefined}
          className={`w-full rounded-lg border-2 bg-bg px-3.5 py-[15px] text-sm text-tx outline-none transition placeholder:text-mu/60 rtl:text-right  ${
            area ? "resize-none" : ""
          } ${err[k] ? "border-red-500" : "border-bd"}`}
        />
        {err[k] && (
          <p id={`e-${k}`} role="alert" className="mt-1.5 text-xs text-red-500">
            {err[k]}
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-6xl items-start  gap-12 px-5 lg:grid-cols-2">
        <div className="rv">
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t.contactT}</h2>
          <p className="mt-3 max-w-md text-mu">{t.contactP}</p>

          <ul className="mt-8 space-y-5 text-sm">
            {contactItems.map((item, i) => (
              <li key={i}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer noopener" : undefined}
                    className={`${pill} transition duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-ac/30 rtl:hover:-translate-x-2`}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="w-5 text-lg text-white"
                    />
                    <span className="truncate">{item.text}</span>
                  </a>
                ) : (
                  <div className={pill}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="w-5 text-lg text-white"
                    />
                    <span>{item.text}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="card rv p-6 sm:p-8">
          {done ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-ac text-2xl text-white cursor-pointer">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <h3 className="text-xl font-bold">{t.ok}</h3>
              <p className="mt-2 text-sm text-mu">{t.okP}</p>
              <a
                href={`https://wa.me/20${social.phone.slice(1)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-p mt-6"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              {field("name", t.name)}
              {field("phone", t.phone)}
              {field("email", t.email)}
              {field("msg", t.msg, true)}
              <button className="btn btn-p w-full justify-center py-3.5 active:translate-y-0">
                {t.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
