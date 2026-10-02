import { useEffect, useState } from "react";
import T from "./data/translations.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import {
  About,
  WhatIDo,
  Skills,
  Services,
  Projects,
  Journey,
  Testimonials,
} from "./components/Sections.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const load = (k, d) => {
  try {
    return localStorage.getItem(k) || d;
  } catch {
    return d;
  }
};

export default function App() {
  const [lang, setLang] = useState(load("lang", "en"));
  const [theme, setTheme] = useState(load("theme", "dark"));
  const [ready, setReady] = useState(false);
  const t = T[lang];
  useEffect(() => {
    const d = document.documentElement;
    d.lang = lang;
    d.dir = lang === "ar" ? "rtl" : "ltr";
    d.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("lang", lang);
      localStorage.setItem("theme", theme);
    } catch {}
  }, [lang, theme]);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 900);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const observeElements = () => {
      document.querySelectorAll(".rv:not(.in)").forEach((el) => {
        io.observe(el);
      });
    };

    observeElements();

    const timer = setTimeout(observeElements, 100);

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  });

  const ui = { lang, setLang, theme, setTheme, t };
  return (
    <>
      <div
        aria-hidden
        className={`fixed inset-0 z-[100] grid place-items-center bg-bg transition-opacity duration-500 ${ready ? "opacity-0 pointer-events-none" : ""}`}
      >
        <img
          src="/assets/logo.svg"
          alt=""
          className="h-16 w-16 animate-pulse"
        />
      </div>
      <Navbar {...ui} />
      <main>
        <Hero {...ui} />
        <About {...ui} />
        <WhatIDo {...ui} />
        <Skills {...ui} />
        <Services {...ui} />
        <Projects {...ui} />
        <Journey {...ui} />
        <Testimonials {...ui} />
        <Contact {...ui} />
      </main>
      <Footer {...ui} />
    </>
  );
}
