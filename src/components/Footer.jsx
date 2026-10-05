import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IDS, Toggles } from "./Navbar.jsx";
import social from "../data/social.js";

export default function Footer(p) {
  return (
    <footer className="border-t border-bd py-10">
      <div className="mx-auto grid lg:max-w-[90%]  gap-8 px-5 lg:grid-cols-3 items-center">
        {/* Brand */}
        <div className="flex w-full items-center justify-center gap-3">
          <img src="/assets/logo.svg" alt="MS" className="h-10 w-10" />

          <div>
            <b>{p.t.first === "MOHAMED" ? "Mohamed Samy" : "محمد سامي"}</b>
            <div className="text-xs text-mu">{p.t.role}</div>
          </div>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          {IDS.map((id, i) => (
            <li key={id}>
              <a href={`#${id}`} className="font-bold text-tx hover:text-ac">
                {p.t.nav[i]}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls + Social */}
        <div className="flex flex-col items-center gap-7">
          <Toggles {...p} />

          <div className="flex gap-4">
            {social.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.name}
                className="grid w-10 h-10 flex justify-center items-center rounded-full bg-bd hover:bg-ac hover:-translate-y-[5px] duration-300 text-lg"
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-mu">{p.t.rights}</p>
    </footer>
  );
}
