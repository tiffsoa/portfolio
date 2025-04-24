import "./About.css";
import { useEffect, useRef } from "react";

function About() {
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
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="top">
        <h1 className="title hidden">about me</h1>
        <h3 className="descri hidden">
          I'm a second year software engineering student at Concordia
          University, with a passion for music and science. I enjoy learning and
          discovering new experiences. I also love designing posters and
          websites in my free time.
        </h3>
      </div>
      <div className="bottom">
        <div className="about-container one">
          <h2>education</h2>
          <h3>
            BEng in Software Engineering, Concordia University
            <br />
            (2024-2028)
          </h3>
        </div>
        <div className="about-container two">
          <h2>skills</h2>
          <h3>Java, Python, HTML/CSS, JavaScript</h3>
        </div>
        <div className="about-container three">
          <h2>interests</h2>
          <h3>Web Development, UI/UX Design, Machine Learning</h3>
        </div>
      </div>
      <hr></hr>
    </section>
  );
}

export default About;
