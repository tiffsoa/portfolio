import "./Contact.css";
import { InboxArrowDownIcon } from "@heroicons/react/24/outline";
import { LinkIcon } from "@heroicons/react/24/outline";
import contactImage from "./pixel.png";
import { useEffect, useRef } from "react";

function Contact() {
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
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-top">
        <h1>get in touch</h1>
        <h3>want to chat? feel free to reach out!</h3>
      </div>
      <div className="contact-bottom hidden">
        <h2>contact information</h2>
        <h4>feel free to reach out through any of the channels</h4>
        <div className="contact-channels">
          <div className="channel">
            <InboxArrowDownIcon className="channel-icon" />
            <a href="mailto:atiff.soa@gmail.com">atiff.soa@gmail.com</a>
          </div>
          <div className="channel">
            <LinkIcon className="channel-icon" />
            <a href="https://www.linkedin.com/in/tiffany-soa-andriamiharimanana/">
              linkedin
            </a>
          </div>
          <div className="channel">
            <LinkIcon className="channel-icon" />
            <a href="https://github.com/tiffsoa">github</a>
          </div>
          <img
            src={contactImage}
            alt="a pixel representation of me"
            className="pixel-contact-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
