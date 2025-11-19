import { useEffect } from "react";

export default function GlobalStyles() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--gold", "#D4AF37");
    root.style.setProperty("--gold-30", "rgba(212,175,55,0.3)");
    root.style.setProperty("--glass-border", "rgba(255,255,255,0.18)");
  }, []);
  return null;
}
