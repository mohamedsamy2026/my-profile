import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobileScreenButton,
  faCode,
  faWandMagicSparkles,
  faArrowUpRightFromSquare,
  faBookOpen,
  faCompass,
  faLaptopCode,
  faUsers,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useEffect, useState } from "react";
import skills from "../data/skills.js";
import services from "../data/services.js";
import projects from "../data/projects.js";
import testimonials from "../data/testimonials.js";

const journeyIcons = [
  faBookOpen,
  faCode,
  faCompass,
  faLaptopCode,
  faUsers,
  faRocket,
];

const Sec = ({ id, title, children, alt, accentTitle }) => (
  <section id={id} className={`py-20 ${alt ? "bg-sf/40" : ""}`}>
    <div className="mx-auto max-w-6xl px-5">
      {title && (
        <h2
          className={`rv mb-10 text-3xl font-extrabold sm:text-4xl ${
            accentTitle ? "text-ac" : ""
          }`}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

export const About = ({ t }) => (
  <Sec id="about" alt title={`1 — ${t.about}`} accentTitle>
    <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
      <div className="rv">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{t.aboutT}</h2>
        <p className="mt-4 text-mu">{t.aboutP}</p>
      </div>
      <div className="grid  grid-cols-1 xs:grid-cols-3 gap-3">
        {t.stats.map(([n, l, d]) => (
          <div
            key={l}
            className="card rv p-6 text-center cursor-pointer flex flex-col justify-between"
          >
            <div className="text-3xl font-extrabold text-ac">{n}</div>
            <div className="mt-1 text-xs text-mu">{l}</div>
            <div className="mt-3 text-xs text-mu font-semibold">{d}</div>
          </div>
        ))}
      </div>
    </div>
  </Sec>
);

export const WhatIDo = ({ t }) => (
  <Sec id="what" title={`2 — ${t.what}`}>
    <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
      {t.whatItems.map(([h, d], i) => (
        <div key={h} className="card rv p-6 cursor-pointer">
          <span className="text-[16.5px] text-tx font-bold">{i + 1}</span>
          <div className="my-3 text-[28px] text-ac">
            <FontAwesomeIcon
              icon={
                [faDesktop, faMobileScreenButton, faCode, faWandMagicSparkles][
                  i
                ]
              }
            />
          </div>
          <h3 className="font-bold">{h}</h3>
          <p className="mt-2 text-sm text-mu">{d}</p>
        </div>
      ))}
    </div>
  </Sec>
);

export const Skills = ({ t, theme }) => (
  <Sec id="skills" title={`3 — ${t.skills}`} alt>
    <div
      dir="ltr"
      className="group overflow-hidden py-[3.9px] [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused] cursor-pointer">
        {[...skills, ...skills].map((s, i) => (
          <div
            key={i}
            className="card flex items-center gap-3 whitespace-nowrap !rounded-xl px-5 py-4"
          >
            <img
              src={s.icon || (theme === "dark" ? s.iconDark : s.iconLight)}
              alt=""
              className="h-8 w-8 object-contain"
            />{" "}
            <span className="text-sm font-semibold">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  </Sec>
);

export const Services = ({ t, lang }) => (
  <Sec id="services" title={`4 — ${t.services}`}>
    <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => (
        <div key={i} className="card rv py-5 px-3 cursor-pointer">
          <div className="flex items-center justify-between">
            <span
              className="grid h-10 w-10 text-[22.5px] place-items-center rounded-lg bg-ac/15 text-ac"
              dir="ltr"
            >
              <FontAwesomeIcon icon={s.icon} />
            </span>
            <span className="text-[16.5px] text-tx font-bold">{i + 1}</span>
          </div>
          <h3 className="mt-4 font-bold">{s[lang][0]}</h3>
          <p className="mt-1 font-medium text-sm text-mu">{s[lang][1]}</p>
        </div>
      ))}
    </div>
  </Sec>
);

function Shot({ src, label }) {
  const [bad, setBad] = useState(false);
  return bad ? (
    <div className="grid aspect-video place-items-center bg-gradient-to-br from-ac/20 t o-transparent text-xs text-mu">
      Replace {src}
    </div>
  ) : (
    <img
      src={src}
      alt={label}
      loading="lazy"
      onError={() => setBad(true)}
      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
    />
  );
}

export const Projects = ({ t, lang }) => (
  <Sec id="projects" title={`5 — ${t.projects}`} alt>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <article
          key={i}
          className="card rv group overflow-hidden cursor-pointer"
        >
          <div className="overflow-hidden">
            <Shot src={p.img} label={p[lang][0]} />
          </div>
          <div className="p-5">
            <h3 className="font-bold">
              {i + 1} — {p[lang][0]}
            </h3>
            <p className="mt-2.5 text-sm text-mu">{p[lang][1]}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((g) => (
                <span
                  key={g}
                  className="rounded-full border-[2px] border-bd px-2.5 py-1 text-xs font-bold text-mu"
                >
                  {g}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-5 text-sm font-semibold text-ac">
              <a
                href={p.live}
                target="_blank"
                className="inline-flex items-center gap-1.5 duration-300 border border-ac rounded-lg py-1.5 px-3 hover:bg-ac hover:text-white"
              >
                {t.demo}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <a
                href={p.github}
                target="_blank"
                className="inline-flex items-center gap-1.5 duration-300 border border-ac rounded-lg py-1.5 px-3 hover:bg-ac hover:text-white"
              >
                GitHub
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </Sec>
);

export const Journey = ({ t }) => (
  <Sec id="journey" title={`6 — ${t.journey}`}>
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
      {t.journeyItems.map((j, i) => (
        <li
          key={i}
          className="card rv flex items-center gap-4 p-5 cursor-pointer"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ac text-[18px] font-bold text-ac">
            {i + 1}
          </span>

          <span className="font-medium">{j}</span>
          <FontAwesomeIcon
            icon={journeyIcons[i]}
            className="text-[19px] text-ac"
          />
        </li>
      ))}
    </ol>
  </Sec>
);

export const Testimonials = ({ t, lang }) => (
  <Sec id="testimonials" title={`7 — ${t.testi}`} alt>
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((x, k) => (
        <figure key={k} className="card rv p-6 cursor-pointer">
          <span className="text-[30px] text-ac">“</span>

          <blockquote className="text-mu">{x.text[lang]}</blockquote>

          <figcaption className="mt-4 text-sm flex flex-col gap-1">
            <b>{x.name[lang]}</b>
            <span className="text-mu">{x.role[lang]}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  </Sec>
);
