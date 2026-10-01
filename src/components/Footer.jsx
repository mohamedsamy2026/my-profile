import { IDS, Toggles } from './Navbar.jsx'
import social from '../data/social.js'
export default function Footer(p) {
  return (
    <footer className="border-t border-bd py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:text-start">
        <div className="flex items-center gap-3"><img src="/assets/logo.svg" alt="MS" className="h-10 w-10" /><div><b>{p.t.first === 'MOHAMED' ? 'Mohamed Samy' : 'محمد سامي'}</b><div className="text-xs text-mu">{p.t.role}</div></div></div>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-mu">{IDS.map((id, i) => <li key={id}><a href={`#${id}`} className="hover:text-ac">{p.t.nav[i]}</a></li>)}</ul>
        <div className="flex flex-col items-center gap-3"><Toggles {...p} />
          <div className="flex gap-3 text-xs text-mu">{social.links.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer" className="hover:text-ac">{n}</a>)}</div></div>
      </div>
      <p className="mt-8 text-center text-xs text-mu">{p.t.rights}</p>
    </footer>
  )
}
