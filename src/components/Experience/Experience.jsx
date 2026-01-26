import "./Experience.css";
import Card from "./Card";
import { useEffect, useRef } from "react";

function Experience() {
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
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="top">
        <h1>experience</h1>
        <h3>my professional journey</h3>
      </div>
      <div className="bottom-exp">
        <span className="hidden">
          <Card
            job="Referential Data Analyst"
            location="BNP Paribas CIB (Sept 2025 - Dec 2025)"
            description="Coursework in Data Structure, Algorithms, 
                Web Development, Software Process and Practices, Software Requirements and Documentation."
          />
        </span>

        <span className="hidden">
          <Card
            job="Junior Functional Consultant"
            location="Vffice Inc. (Jan 2025 - May 2025)"
            description="Supported clients by
                 analyzing business needs and helping
                  implement solutions in Microsoft Dynamics 365 Business Central."
          />
        </span>

        
      </div>
      <hr></hr>
    </section>
  );
}

export default Experience;
