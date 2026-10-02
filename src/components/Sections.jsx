import { useEffect, useState } from "react";
import skills from "../data/skills.js";
import services from "../data/services.js";
import projects from "../data/projects.js";
import testimonials from "../data/testimonials.js";

const Sec = ({ id, title, children, alt }) => (
  <section id={id} className={`py-20 ${alt ? "bg-sf/40" : ""}`}>
    <div className="mx-auto max-w-6xl px-5">
      {title && (
        <h2
          className={`rv mb-10 text-3xl font-extrabold sm:text-4xl ${alt ? "text-ac" : ""}`}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

export const About = ({ t }) => (
  <Sec id="about" alt title={`1 — ${t.about}`}>
    <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
      <div className="rv">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{t.aboutT}</h2>
        <p className="mt-4 text-mu">{t.aboutP}</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {t.stats.map(([n, l],i) => (
          <div key={l} className="card rv p-4 text-center cursor-pointer">
            <div className="text-3xl font-extrabold text-ac">{n}</div>
            <div className="mt-1 text-xs text-mu">{l}</div>
          </div>
        ))}
      </div>
    </div>
  </Sec>
);

export const WhatIDo = ({ t }) => (
  <Sec id="what" title={`2 — ${t.what}`}>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {t.whatItems.map(([h, d], i) => (
        <div key={i} className="card rv p-6">
          <span className="text-sm text-ac">0{i + 1}</span>
          <div className="my-3 text-2xl">{["◈", "▭", "⚙", "✦"][i]}</div>
          <h3 className="font-bold">{h}</h3>
          <p className="mt-2 text-sm text-mu">{d}</p>
        </div>
      ))}
    </div>
  </Sec>
);

export const Skills = ({ t }) => (
  <Sec id="skills" title={`03 — ${t.skills}`} alt>
    <div
      dir="ltr"
      className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {[...skills, ...skills].map((s, i) => (
          <span
            key={i}
            className="card whitespace-nowrap !rounded-full px-6 py-3 text-sm font-semibold"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </Sec>
);

export const Services = ({ t, lang }) => (
  <Sec id="services" title={`04 — ${t.services}`}>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => (
        <div key={i} className="card rv p-5">
          <div className="flex items-center justify-between">
            <span
              className="grid h-10 w-10 place-items-center rounded-lg bg-ac/15 text-ac"
              dir="ltr"
            >
              {s.icon}
            </span>
            <span className="text-xs text-mu">0{i + 1}</span>
          </div>
          <h3 className="mt-4 font-bold">{s[lang][0]}</h3>
          <p className="mt-1 text-sm text-mu">{s[lang][1]}</p>
        </div>
      ))}
    </div>
  </Sec>
);

function Shot({ src, label }) {
  const [bad, setBad] = useState(false);
  return bad ? (
    <div className="grid aspect-video place-items-center bg-gradient-to-br from-ac/20 to-transparent text-xs text-mu">
      Replace {src}
    </div>
  ) : (
    <img
      src={src}
      alt={label}
      loading="lazy"
      onError={() => setBad(true)}
      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export const Projects = ({ t, lang }) => (
  <Sec id="projects" title={`05 — ${t.projects}`} alt>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <article key={i} className="card rv group overflow-hidden">
          <div className="overflow-hidden">
            <Shot src={p.img} label={p[lang][0]} />
          </div>
          <div className="p-5">
            <h3 className="font-bold">
              0{i + 1} — {p[lang][0]}
            </h3>
            <p className="mt-2 text-sm text-mu">{p[lang][1]}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((g) => (
                <span
                  key={g}
                  className="rounded-full border border-bd px-2.5 py-0.5 text-xs text-mu"
                >
                  {g}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm font-semibold text-ac">
              <a href={p.live}>{t.demo} ↗</a>
              <a href={p.github}>GitHub</a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </Sec>
);

export const Journey = ({ t }) => (
  <Sec id="journey" title={`06 — ${t.journey}`}>
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {t.journeyItems.map((j, i) => (
        <li key={i} className="card rv flex items-center gap-4 p-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ac text-sm font-bold text-ac">
            0{i + 1}
          </span>
          <span className="font-medium">{j}</span>
        </li>
      ))}
    </ol>
  </Sec>
);

export const Testimonials = ({ t, lang }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setI((x) => (x + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <Sec id="testimonials" title={`07 — ${t.testi}`} alt>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((x, k) => (
          <figure
            key={k}
            className={`card rv p-6 ${k === i ? "border-ac" : "max-md:hidden"} ${k === i ? "max-md:block" : ""}`}
          >
            <span className="text-3xl text-ac">“</span>
            <blockquote className="text-mu">{x.text[lang]}</blockquote>
            <figcaption className="mt-4 text-sm">
              <b>{x.name[lang]}</b>
              <br />
              <span className="text-mu">{x.role[lang]}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-2 md:hidden">
        {testimonials.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Testimonial ${k + 1}`}
            className={`h-2 rounded-full ${k === i ? "w-6 bg-ac" : "w-2 bg-bd"}`}
          />
        ))}
      </div>
    </Sec>
  );
};
