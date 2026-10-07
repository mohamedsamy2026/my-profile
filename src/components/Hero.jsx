import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationDot,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
const code = [
  "const dev = {",
  "  responsive: true,",
  "  clean: true,",
  "  modern: true",
  "}",
];
export default function Hero({ t }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 lg:pt-36"
    >
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div
        className="absolute -top-20 end-0 h-96 w-96 rounded-full bg-ac/25 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
        <div className="rv in">
          <p className="mb-0 text-[18px] font-bold text-ac">{t.hi}</p>
          <h1 className="text-5xl font-extrabold leading-[1.05] sm:text-7xl">
            {t.first}
            <br />
            <span className="text-ac">{t.last}</span>
          </h1>
          <p className="mt-5 text-2xl font-medium">{t.role}</p>{" "}
          <p className="mt-3 max-w-md text-mu">{t.tag}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-p">
              {t.work} <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a
              href="/Mohamed_Samy_CV.pdf"
              download="Mohamed_Samy_CV.pdf"
              className="btn border border-2 border-red-500"
            >
              {t.talk}
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
          <p className="mt-6 text-[16px] text-mu font-bold">
            <FontAwesomeIcon icon={faLocationDot} /> {t.based}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-3xl border-2 border-bd shadow-2xl shadow-ac/20">
            <img
              src="/assets/mohamed-samy-hero.webp"
              alt="Mohamed Samy, frontend developer, at his desk"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <pre
            dir="ltr"
            className="cursor-pointer card absolute -start-4 top-6 hidden animate-float p-3 text-[11px] leading-4 text-ac backdrop-blur sm:block"
            aria-hidden
          >
            {code.join("\n")}
          </pre>
          <div
            className="card absolute -end-3 bottom-8 animate-float p-3 text-xs [animation-delay:2s]"
            dir="ltr"
          >
            <div className="flex flex-col gap-1 cursor-pointer">
              <b>&lt;/&gt; Frontend Developer</b>
              <span className="text-mu font-bold">
                React · JavaScript · Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
