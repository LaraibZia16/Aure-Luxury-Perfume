
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { perfumes } from "../data/perfumes";

gsap.registerPlugin(ScrollTrigger);

function Collection() {
  const collectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".collection-heading", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".collection-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".perfume-card", {
        y: 65,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".perfume-grid",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: collectionRef }
  );

  return (
    <section
      className="collection-section"
      id="collection"
      ref={collectionRef}
    >
      <div className="container">
        <div className="collection-heading">
          <p className="section-eyebrow">
            THE AURÉ COLLECTION
          </p>

          <h2>Discover Your Signature Scent</h2>

          <p>
            Four distinctive fragrances. Each one crafted
            to leave an unforgettable impression.
          </p>
        </div>

        <div className="perfume-grid">
          {perfumes.map((perfume) => (
            <article className="perfume-card" key={perfume.id}>
              <div className="perfume-image">
                <img
                  src={perfume.image}
                  alt={`AURÉ ${perfume.name} perfume`}
                  loading="lazy"
                />
              </div>

              <div className="perfume-details">
                <span className="perfume-category">
                  {perfume.category}
                </span>

                <h3>AURÉ {perfume.name}</h3>

                <p>{perfume.description}</p>

                <div className="perfume-bottom">
                  <span className="perfume-price">
                    ${perfume.price}
                  </span>

                  <a
                    href="#contact"
                    className="perfume-link"
                    aria-label={`Discover AURÉ ${perfume.name}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collection;
