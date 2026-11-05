
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OurStory() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".story-image-frame", {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.3,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".story-layout",
            start: "top 80%",
            once: true,
          },
        });

        gsap.from(".story-content > *", {
          y: 45,
          opacity: 0,
          duration: 0.85,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-content",
            start: "top 85%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="story-section"
      id="story"
      ref={sectionRef}
    >
      <div className="container story-layout">
        <div className="story-image-frame">
          <img
            src="/images/aure-story.png"
            alt="AURÉ perfume craftsmanship and ingredients"
            loading="lazy"
          />
        </div>

        <div className="story-content">
          <p className="story-eyebrow">
            OUR STORY
          </p>

          <h2>
            The Art of
            <br />
            <em>Timeless Perfumery.</em>
          </h2>

          <p>
            At AURÉ, we believe fragrance is more than
            something you wear. It is a reflection of
            individuality, memory and emotion.
          </p>

          <p>
            Inspired by the beauty of nature and the
            elegance of traditional perfumery, every
            composition is imagined with care and
            crafted to leave a lasting impression.
          </p>

          <a href="#discovery" className="story-link">
            Explore Our World
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
