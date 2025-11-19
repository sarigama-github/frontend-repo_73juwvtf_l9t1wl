import { useMemo, useState } from "react";
import { Download, BookOpen, Lightbulb } from "lucide-react";

const bookData = [
  {
    id: "andemta",
    title: "መጽሐፈ አንድምታ (Andemta)",
    author: "Tradition",
    pdf: "/andemta.pdf",
    preview:
      "መጽሐፈ አንድምታ በተለያዩ መጽሐፍት ላይ የተሰጠ አስተርጓሚ ማብራሪያ ነው። ከመለኮታዊ ምሥጢሮች እስከ ታሪካዊ ትርጓሜዎች ድረስ በግልፅ እና በክብር ቀርቧል።",
  },
];

export default function Library() {
  const [active, setActive] = useState(null);
  const [lightsOn, setLightsOn] = useState(false);

  const shelves = useMemo(() => [bookData], []);
  const current = useMemo(() => bookData.find((b) => b.id === active) || null, [active]);

  return (
    <section id="library" className="relative py-20">
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {lightsOn && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_60%)] transition" />
        )}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-black dark:text-white">Digital Library</h2>
            <p className="text-black/70 dark:text-white/70">Explore sacred texts with reverence and clarity.</p>
          </div>

          <button
            onClick={() => setLightsOn((v) => !v)}
            className={`relative inline-flex items-center gap-2 rounded-full border border-[color:var(--gold-30)] px-4 py-2 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,215,0,.15)] transition ${
              lightsOn ? "bg-black/50 text-white" : "bg-white/70 text-black"
            }`}
            aria-pressed={lightsOn}
          >
            <Lightbulb size={16} className="text-[color:var(--gold)]" />
            <span>{lightsOn ? "Lights On" : "Lights Off"}</span>
          </button>
        </div>

        {/* Glassmorphic bookshelf */}
        <div className="relative rounded-3xl p-6 sm:p-8 border border-[color:var(--gold-30)] bg-white/30 dark:bg-black/30 backdrop-blur-xl shadow-[0_0_1px_rgba(212,175,55,.6),0_10px_60px_rgba(0,0,0,.25)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 perspective-[1200px]">
            {shelves[0].map((book) => (
              <button
                key={book.id}
                onClick={() => setActive(book.id)}
                className="group relative h-40 sm:h-48 md:h-56 [transform-style:preserve-3d]"
                style={{ perspective: 1200 }}
                aria-label={`Open ${book.title}`}
              >
                {/* Spine */}
                <div className={`absolute inset-y-0 left-0 w-10 sm:w-12 md:w-14 rounded-l-lg border border-[color:var(--gold-30)] bg-gradient-to-b from-black/70 via-black/60 to-black/80 dark:from-black/80 dark:to-black/90 text-[color:var(--gold)] shadow-[inset_0_0_0_1px_rgba(255,215,0,.15),0_10px_30px_rgba(212,175,55,0.08)] group-hover:shadow-[inset_0_0_0_1px_rgba(255,215,0,.35),0_10px_40px_rgba(212,175,55,0.25)] transition-transform duration-300 group-hover:-translate-y-1`}>
                  <div className="absolute inset-0 flex items-center justify-center rotate-180 [writing-mode:vertical-rl] tracking-wider text-xs sm:text-sm font-semibold">
                    {book.title}
                  </div>
                </div>
                {/* Cover (glass) */}
                <div className={`absolute inset-0 ml-10 sm:ml-12 md:ml-14 rounded-r-lg border border-[color:var(--gold-30)] bg-white/20 dark:bg-white/5 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,215,0,.08)] group-hover:shadow-[inset_0_0_0_1px_rgba(255,215,0,.2)] transition`}></div>
                {/* Glow */}
                <div className={`absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition ${lightsOn ? "bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,.25),transparent_40%)]" : ""}`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {current && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <button className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setActive(null)} aria-label="Close" />
          <div className="relative w-full max-w-2xl rounded-3xl border border-[color:var(--gold-30)] bg-white/70 dark:bg-black/60 backdrop-blur-xl shadow-[0_0_1px_rgba(212,175,55,.6),0_10px_60px_rgba(0,0,0,.25)] animate-in">
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">{current.title}</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">{current.author}</p>
                </div>
                <a
                  href={current.pdf}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] text-black px-4 py-2 text-sm font-semibold hover:bg-[#e6c200] transition"
                >
                  <Download size={16} /> Download PDF
                </a>
              </div>
              <p className="mt-4 text-sm leading-7 text-black/80 dark:text-white/80">{current.preview}</p>
              <div className="mt-6">
                <a href={current.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold-30)] px-4 py-2 text-sm font-medium text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition">
                  <BookOpen size={16} /> Read Inline
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
