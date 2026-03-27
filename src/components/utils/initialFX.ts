import { gsap } from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.2,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.inOut",
      delay: 0.5,
    }
  );

  gsap.fromTo(
    [".landing-h2-info-1", ".landing-h2-1", ".landing-h2-2"],
    { opacity: 0, y: 50, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  gsap.fromTo(
  ".landing-role-top",
  { opacity: 0, y: 80 },
  {
    opacity: 1,
    y: 10,
    duration: 1,
    ease: "power3.out",
  }
);

gsap.fromTo(
  ".landing-role-bottom",
  { opacity: 0, y: 80 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
  }
);
}

