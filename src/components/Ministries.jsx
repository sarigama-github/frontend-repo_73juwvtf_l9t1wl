import { BookText, Music2, Library, ScrollText } from "lucide-react";

const items = [
  { title: "Sunday School", icon: BookText, desc: "Faith formation for all ages." },
  { title: "Song Study", icon: Music2, desc: "Hymns and spiritual songs." },
  { title: "Bible Study", icon: ScrollText, desc: "Scripture in community." },
  { title: "Geez Study", icon: Library, desc: "Classical Ge'ez language." },
];

export default function Ministries() {
  return (
    <section id="ministries" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-black dark:text-white mb-8">Ministries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl border border-[color:var(--gold-30)] bg-white/40 dark:bg-black/40 backdrop-blur-md p-6 shadow-[0_0_1px_rgba(212,175,55,.6),0_0_30px_rgba(212,175,55,.08)_inset] hover:shadow-[0_0_1px_rgba(212,175,55,.9),0_0_50px_rgba(212,175,55,.15)_inset] transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-black/5 dark:bg-white/10 text-[color:var(--gold)]"><Icon size={20} /></div>
                <div className="text-black dark:text-white font-medium">{title}</div>
              </div>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
