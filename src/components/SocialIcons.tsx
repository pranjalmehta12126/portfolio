import { FaInstagram } from "react-icons/fa6";
import { FaArtstation } from "react-icons/fa"; // ✅ NEW
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    if (!social) return;

    const handlers: ((e: MouseEvent) => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      if (!link) return;

      let mouseX = elem.offsetWidth / 2;
      let mouseY = elem.offsetHeight / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      handlers.push(onMouseMove);

      updatePosition();
    });

    return () => {
      handlers.forEach((handler) => {
        document.removeEventListener("mousemove", handler);
      });
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">

        {/* Instagram */}
        <span>
          <a
            href="https://www.instagram.com/prnjl.fx_.3d?igsh=OTV6cG5xN2E2czR5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </span>

        {/* ✅ ArtStation (NEW ADDED) */}
        <span>
          <a
            href="https://pranjal1200.artstation.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaArtstation />
          </a>
        </span>

      </div>

      {/* RESUME BUTTON */}
      <a
        className="resume-button"
        href="https://drive.google.com/drive/folders/1pMB2Mw6m0Wpy1qGEurQRKHP12wEEhcvG"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;