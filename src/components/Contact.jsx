import { useState } from "react";
import social from "../data/social.js";

export default function Contact({ t }) {
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (f.name.trim().length < 2) er.name = t.errs.name;
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = t.errs.email;
    if (f.msg.trim().length < 10) er.msg = t.errs.msg;
    setErr(er);
    if (!Object.keys(er).length) setDone(true);
  };
  const field = (k, label, area) => {
    const C = area ? "textarea" : "input";
    return (
      <label className="block text-sm">
        {label}
        <C
          rows={area ? 5 : undefined}
          value={f[k]}
          onChange={(e) => setF({ ...f, [k]: e.target.value })}
          aria-invalid={!!err[k]}
          className="mt-1 w-full rounded-lg border border-bd bg-bg px-3 py-2.5 outline-none focus:border-ac"
        />
        {err[k] && <span className="text-xs text-red-500">{err[k]}</span>}
      </label>
    );
  };
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <div className="rv">
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t.contactT}</h2>
          <p className="mt-3 text-mu">{t.contactP}</p>
          <ul className="mt-6 space-y-2 text-sm" dir="ltr">
            <li>
              📞 <a href={`tel:${social.phone}`}>{social.phone}</a>
            </li>
            <li>
              ✉ <a href={`mailto:${social.email}`}>{social.email}</a>
            </li>
            <li>
              ✈{" "}
              <a href={social.telegram} target="_blank" rel="noreferrer">
                @mohamed1_2_3_4
              </a>
            </li>
            <li>📍 Beni Suef, Egypt</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {social.links.map(([n, u]) => (
              <a
                key={n}
                href={u}
                target="_blank"
                rel="noreferrer"
                className="btn !px-4 !py-2 text-sm"
              >
                {n}
              </a>
            ))}
          </div>
        </div>
        <div className="card rv p-6">
          {done ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-ac text-2xl text-white">
                ✓
              </div>
              <h3 className="text-xl font-bold">{t.ok}</h3>
              <p className="mt-2 text-sm text-mu">{t.okP}</p>
              <button
                className="btn mt-5"
                onClick={() => {
                  setDone(false);
                  setF({ name: "", email: "", msg: "" });
                }}
              >
                {t.again}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4">
              {field("name", t.name)}
              {field("email", t.email)}
              {field("msg", t.msg, true)}
              <button className="btn btn-p w-full justify-center">
                {t.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
