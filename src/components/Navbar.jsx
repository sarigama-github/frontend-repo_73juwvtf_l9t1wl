import { Moon, Sun, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-[color:var(--gold-30)]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden text-black/70 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <Menu size={20} />
          </button>
          <div className="font-semibold tracking-widest text-black dark:text-white">
            <span className="mr-1">⟨</span>
            <span className="text-[color:var(--gold)]">ቅዱስ</span>
            <span className="ml-1">⟩</span>
            <span className="ml-2 hidden sm:inline">Ethiopian Orthodox</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-black/70 dark:text-white/80">
          <a href="#hero" className="hover:text-[color:var(--gold)] transition">Home</a>
          <a href="#library" className="hover:text-[color:var(--gold)] transition">Library</a>
          <a href="#ministries" className="hover:text-[color:var(--gold)] transition">Ministries</a>
          <a href="#music" className="hover:text-[color:var(--gold)] transition">Music</a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="relative inline-flex items-center gap-2 rounded-full border border-[color:var(--gold-30)] bg-white/70 dark:bg-black/40 px-3 py-1.5 text-xs font-medium text-black/80 dark:text-white/80 shadow-[inset_0_0_0_1px_rgba(255,215,0,.15)] hover:shadow-[inset_0_0_0_1px_rgba(255,215,0,.35)] transition"
          >
            {dark ? <Sun size={16} className="text-[color:var(--gold)]"/> : <Moon size={16} className="text-[color:var(--gold)]"/>}
            <span>{dark ? "Light" : "Dark"} Mode</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[color:var(--gold-30)] bg-white/80 dark:bg-black/60 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2 text-black/80 dark:text-white/80">
            <a href="#hero" className="hover:text-[color:var(--gold)]" onClick={() => setOpen(false)}>Home</a>
            <a href="#library" className="hover:text-[color:var(--gold)]" onClick={() => setOpen(false)}>Library</a>
            <a href="#ministries" className="hover:text-[color:var(--gold)]" onClick={() => setOpen(false)}>Ministries</a>
            <a href="#music" className="hover:text-[color:var(--gold)]" onClick={() => setOpen(false)}>Music</a>
          </div>
        </div>
      )}
    </header>
  );
}
