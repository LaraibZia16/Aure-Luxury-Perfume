
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero-eyebrow", {
          y: 25,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".hero-title",
          {
            y: 65,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.4"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        );
    },
    { scope: heroRef }
  );

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-content container">
        <p className="hero-eyebrow">
          Luxury Perfume House
        </p>

        <h1 className="hero-title">
          A Scent That
          <br />
          Stays With You.
        </h1>

        <p className="hero-description">
          Exquisite fragrances crafted with the world's
          finest ingredients. Discover a scent that
          becomes part of your story.
        </p>

        <a href="#collection" className="hero-button">
          Shop Collection
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
