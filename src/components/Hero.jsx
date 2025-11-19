import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Golden particles */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <circle key={i} cx={Math.random()*100+"%"} cy={Math.random()*100+"%"} r={Math.random()*60+10} fill="url(#g)" />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wide text-black dark:text-white"
        >
          በክብር እና በሰላም እንኳን በደህና መጡ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-black/70 dark:text-white/80"
        >
          Ethiopian Orthodox Tewahedo Church — reverent worship, sacred tradition, and living faith.
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#library" className="group inline-flex items-center rounded-full border border-[color:var(--gold-30)] bg-white/70 dark:bg-black/40 px-5 py-2.5 text-sm font-medium text-black dark:text-white shadow-[inset_0_0_0_1px_rgba(255,215,0,.15)] hover:shadow-[inset_0_0_0_1px_rgba(255,215,0,.35)] transition">
            Explore Library
          </a>
          <a href="#ministries" className="group inline-flex items-center rounded-full bg-[color:var(--gold)] text-black px-5 py-2.5 text-sm font-semibold hover:bg-[#e6c200] transition">
            Join Ministries
          </a>
        </div>
      </div>
    </section>
  );
}
