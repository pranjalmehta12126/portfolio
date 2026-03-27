import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.killTweensOf("*");

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
  isSplit?: boolean;
}


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  // const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(
  ".title:not(.landing-info-h2):not(.landing-h2-1):not(.landing-h2-2):not(.landing-h2-info):not(.landing-h2-info-1)"
);

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para) => {
    para.classList.add("visible");

    if (para.split) {
      para.split.revert();
      para.split = undefined;
    }

    if (para.anim) {
      para.anim.kill();
      para.anim = undefined;
    }

    para.split = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  titles.forEach((title) => {
    if (title.split) {
      title.split.revert();
      title.split = undefined;
    }

    if (title.anim) {
      title.anim.kill();
      title.anim = undefined;
    }

    title.split = new SplitText(title, {
      type: "chars",
    });

    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.03,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  ScrollTrigger.refresh();
}