
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const notes = [
  {
    number: "01",
    type: "TOP NOTES",
    name: "Bergamot & Citrus",
    description:
      "A bright and refreshing opening that awakens the senses.",
    image: "/images/notes-top.png",
  },
  {
    number: "02",
    type: "HEART NOTES",
    name: "Rose & Jasmine",
    description:
      "A floral heart that brings elegance and romantic depth.",
    image: "/images/notes-heart.png",
  },
  {
    number: "03",
    type: "BASE NOTES",
    name: "Sandalwood & Amber",
    description:
      "A warm, sensual finish that lingers beautifully.",
    image: "/images/notes-base.png",
  },
];

function FragranceNotes() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".notes-heading", {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".notes-heading",
            start: "top 85%",
            once: true,
          },
        });

        gsap.from(".note-card", {
          y: 70,
          opacity: 0,
          duration: 0.85,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".notes-grid",
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
      className="notes-section"
      id="notes"
      ref={sectionRef}
    >
      <div className="container">
        <div className="notes-heading">
          <p className="notes-eyebrow">
            THE ART OF FRAGRANCE
          </p>

          <h2>A Journey Through the Notes</h2>

          <p>
            A carefully layered composition that unfolds
            beautifully over time, from a fresh opening
            to a warm, lasting embrace.
          </p>
        </div>

        <div className="notes-grid">
          {notes.map((note) => (
            <article className="note-card" key={note.number}>
              <div className="note-image">
                <img
                  src={note.image}
                  alt={`${note.name} fragrance ingredients`}
                  loading="lazy"
                />
              </div>

              <div className="note-content">
                <span className="note-number">
                  {note.number} / {note.type}
                </span>

                <h3>{note.name}</h3>

                <p>{note.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="notes-action">
          <a href="#collection" className="notes-button">
            Discover the Collection
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FragranceNotes;
