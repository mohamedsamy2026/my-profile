import { useEffect, useState } from 'react'
export const IDS = ['home','about','skills','services','projects','journey','contact']

export function Toggles({ lang, setLang, theme, setTheme }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="rounded-lg border border-bd px-2.5 py-1.5 text-xs font-semibold" aria-label="Toggle language">
        <span className={lang === 'en' ? 'text-ac' : 'text-mu'}>EN</span> / <span className={lang === 'ar' ? 'text-ac' : 'text-mu'}>AR</span>
      </button>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="grid h-8 w-8 place-items-center rounded-lg border border-bd" aria-label="Toggle theme">{theme === 'dark' ? '☀' : '☾'}</button>
    </div>
  )
}

export default function Navbar(p) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const f = () => {
      setScrolled(scrollY > 20)
      let cur = 'home'
      IDS.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 140) cur = id })
      setActive(cur)
    }
    f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-bd bg-bg/70 backdrop-blur-xl' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-bold"><img src="/assets/logo.svg" alt="MS logo" className="h-9 w-9" /><span className="hidden sm:inline">Mohamed Samy</span></a>
        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {IDS.map((id, i) => <li key={id}><a href={`#${id}`} className={`transition-colors hover:text-ac ${active === id ? 'text-ac font-semibold' : 'text-mu'}`}>{p.t.nav[i]}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <Toggles {...p} />
          <a href="#contact" className="btn btn-p hidden !py-2 text-sm md:inline-flex">{p.t.cta}</a>
          <button className="grid h-9 w-9 place-items-center rounded-lg border border-bd lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">{open ? '✕' : '☰'}</button>
        </div>
      </nav>
      <div className={`overflow-hidden border-b border-bd bg-bg/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${open ? 'max-h-96' : 'max-h-0 border-0'}`}>
        <ul className="px-5 py-3">
          {IDS.map((id, i) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={`block py-3 ${active === id ? 'text-ac' : ''}`}>{p.t.nav[i]}</a></li>)}
        </ul>
      </div>
    </header>
  )
}
