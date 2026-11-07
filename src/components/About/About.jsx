import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="top">
        <h1 className="title">about me</h1>
        <h3 className="descri">
          I'm a software engineering co-op student at Concordia University
          with three internships behind me, most recently building production
          Java/Spring Boot services at Intact. I've led two 10-person Agile
          teams and love the management side as much as the development side. Outside of code, I'm into
          music, art, and colouring.
        </h3>
      </div>
      <div className="bottom">
        <div className="about-container one">
          <h2>education</h2>
          <h3>
            BEng in Software Engineering Co-op, Concordia University
            <br />
            (2024-2028)
          </h3>
        </div>
        <div className="about-container two">
          <h2>skills</h2>
          <h3>
            Java, TypeScript, JavaScript, Python, Spring Boot, React, React
            Native, Next.js, JUnit, Playwright, Docker, GitHub Actions
          </h3>
        </div>
        <div className="about-container three">
          <h2>interests</h2>
          <h3>Backend Development, Software Testing &amp; QA, UI/UX Design</h3>
        </div>
      </div>
      <hr></hr>
    </section>
  );
}

export default About;
