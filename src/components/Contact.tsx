import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:mr.pranjalmehta@gmail.com" data-cursor="disable">
                mr.pranjalmehta@gmail.com
              </a>
            </p>
            <h4>Location & Phone</h4>
            <p>Surat, Gujarat, India<br />+91 8799497282</p>
          </div>

          <div className="contact-box">
            <h4>Social & Portfolio</h4>

            {/* Portfolio */}
            <a
              href="https://drive.google.com/drive/folders/1Lu7VdH9FIH5TUIbxJ17ReSsJoEAc760I?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/prnjl.fx_.3d?igsh=OTV6cG5xN2E2czR5"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

            {/* ✅ ArtStation (NEW ADDED) */}
            <a
              href="https://pranjal1200.artstation.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              ArtStation <MdArrowOutward />
            </a>

          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pranjal Mehta</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;