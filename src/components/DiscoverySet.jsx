
import { useRef } from "react";
import { ArrowUpRight, Gift, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DiscoverySet() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".discovery-content > *", {
          y: 45,
          opacity: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".discovery-content",
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(".discovery-image", {
          x: 70,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".discovery-layout",
            start: "top 80%",
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
      className="discovery-section"
      id="discovery"
      ref={sectionRef}
    >
      <div className="container discovery-layout">
        <div className="discovery-content">
          <p className="discovery-eyebrow">
            THE DISCOVERY COLLECTION
          </p>

          <h2>
            A Little Luxury.
            <br />
            <em>A Lasting Impression.</em>
          </h2>

          <p className="discovery-description">
            Experience the world of AURÉ with four
            beautifully curated miniature fragrances.
            Discover the scent that feels uniquely yours,
            or share the pleasure of fragrance with
            someone special.
          </p>

          <div className="discovery-features">
            <div>
              <Sparkles size={19} />
              <span>Four signature fragrances</span>
            </div>

            <div>
              <Gift size={19} />
              <span>Elegant gift-ready presentation</span>
            </div>
          </div>

          <div className="discovery-action">
            <span className="discovery-price">$65</span>

            <a href="#contact" className="discovery-button">
              Discover the Set
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="discovery-image">
          <img
            src="/images/aure-discovery.png"
            alt="AURÉ luxury perfume discovery gift set"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default DiscoverySet;
