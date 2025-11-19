import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

export default function MusicPlayer({ tracks = [] }) {
  const audioRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    playing ? audio.play() : audio.pause();
  }, [playing, index]);

  function onTimeUpdate() {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  }

  function seek(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setProgress(pct);
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    audio.currentTime = (pct / 100) * audio.duration;
  }

  function next() {
    setIndex((i) => (i + 1) % Math.max(tracks.length, 1));
    setPlaying(true);
  }
  function prev() {
    setIndex((i) => (i - 1 + Math.max(tracks.length, 1)) % Math.max(tracks.length, 1));
    setPlaying(true);
  }

  const current = tracks[index] || { src: "", title: "No track", artist: "" };

  return (
    <section id="music" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-[color:var(--gold-30)] bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-[0_0_1px_rgba(212,175,55,.6),0_0_30px_rgba(212,175,55,.08)_inset]">
          <div className="p-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-sm font-medium text-black dark:text-white truncate">{current.title}</div>
              <div className="text-xs text-black/60 dark:text-white/70 truncate">{current.artist}</div>
            </div>

            <div className="flex items-center gap-2 text-[color:var(--gold)]">
              <button aria-label="Previous" onClick={prev} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><SkipBack size={18} /></button>
              <button aria-label="Play/Pause" onClick={() => setPlaying((p) => !p)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
                {playing ? <Pause size={22} /> : <Play size={22} />}
              </button>
              <button aria-label="Next" onClick={next} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><SkipForward size={18} /></button>
            </div>
          </div>

          <div className="px-4 pb-4">
            <div className="group h-1.5 rounded-full bg-black/10 dark:bg-white/10 cursor-pointer" onMouseDown={seek}>
              <div className="h-full rounded-full bg-[color:var(--gold)] transition-all will-change-transform" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={current.src} onTimeUpdate={onTimeUpdate} onEnded={next} preload="metadata" />
      </div>
    </section>
  );
}
