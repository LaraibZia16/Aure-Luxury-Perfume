
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SignatureExperience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 901px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=110%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            ".signature-image",
            {
              scale: 1.15,
            },
            {
              scale: 1,
              duration: 1.5,
              ease: "none",
            }
          )
          .from(
            ".signature-eyebrow",
            {
              y: 35,
              opacity: 0,
              duration: 0.5,
            },
            0.2
          )
          .from(
            ".signature-title",
            {
              y: 60,
              opacity: 0,
              duration: 0.8,
            },
            0.4
          )
          .from(
            ".signature-description",
            {
              y: 30,
              opacity: 0,
              duration: 0.6,
            },
            0.8
          );
      });

      mm.add("(max-width: 900px)", () => {
        gsap.from(".signature-copy > *", {
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".signature-copy",
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
      className="signature-section"
      id="signature"
      ref={sectionRef}
    >
      <div className="signature-image" aria-hidden="true" />

      <div className="signature-overlay" />

      <div className="container signature-layout">
        <div className="signature-copy">
          <p className="signature-eyebrow">
            THE SIGNATURE EXPERIENCE
          </p>

          <h2 className="signature-title">
            More Than
            <br />
            A Fragrance.
          </h2>

          <p className="signature-description">
            A delicate balance of radiant florals,
            warm amber and timeless elegance.
            Éclat is an expression of everything
            that makes a moment unforgettable.
          </p>

          <a href="#notes" className="signature-button">
            Explore the Notes
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SignatureExperience;
