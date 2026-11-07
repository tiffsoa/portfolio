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
            job="Software Developer I"
            location="Intact Financial Corporation (Sept 2026 - Dec 2026)"
            description={[
              "Shipped a feature-flagged business-rule change across 3 Java/Spring Boot services and 2 shared libraries, raising auto insurance coverage limits by up to 67%.",
              "Removed 5 obsolete feature toggles from production code, deleting ~200 lines of dead code and simplifying release logic.",
              "Built a shared eligibility module and automated upgrades for existing policies newly qualified under the new limits.",
            ]}
          />
        </span>

        <span className="hidden">
          <Card
            job="Referential Data Analyst Intern"
            location="BNP Paribas CIB (Sept 2025 - Dec 2025)"
            description={[
              "Automated monthly KPI reporting with Power BI and Power Query, replacing manual data entry with dynamic dashboards and saving the team 6 hours a month.",
              "Improved reporting accuracy for global referential systems by finding and fixing data inconsistencies at the source.",
            ]}
          />
        </span>

        <span className="hidden">
          <Card
            job="Junior Functional Consultant"
            location="Vffice Inc. (Jan 2025 - May 2025)"
            description={[
              "Resolved 45+ client support tickets on Microsoft Dynamics 365, turning system constraints into working configurations.",
              "Reduced deployment errors through functional testing and rapid prototyping in Dynamics 365.",
              "Wrote client configuration documentation that became the team's reference for system setups.",
            ]}
          />
        </span>
      </div>
      <hr></hr>
    </section>
  );
}

export default Experience;
