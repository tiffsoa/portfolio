import heroImage from "./tiff.png";
import "./Hero.css";
import resume from "./resume.pdf";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenEls = sectionRef.current.querySelectorAll(".hidden");
    hiddenEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // cleanup
  }, []);

  return (
    <section id="hero" className="hero-section" ref={sectionRef}>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-text hidden">hi, I'm Tiffany</h1>
          <h3 className="hero-text hidden">i like software, design, and everything in between</h3>
          <div className="hero-resume hero-text hidden">
            <a href={resume} target="_blank">
              resume
              <ArrowUpRightIcon className="hero-arrow" />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img
            src={heroImage}
            alt="a picture of tiffany"
            className="hero-image"
          />
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Hero;
