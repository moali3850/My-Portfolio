import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#home"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`
      group fixed bottom-6 right-6 z-40 rounded-full bg-accent p-3 text-black shadow-lg transition-all
      duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 hover:shadow-xl hover:shadow-accent/30 active:scale-95
      ${visible ? "opacity-100" : "pointer-events-none opacity-0"}
      `}
    >
      <ArrowUp
        className="transition-transform duration-300 ease-out group-hover:-translate-y-1"
        size={25}
      />
    </a>
  );
}
