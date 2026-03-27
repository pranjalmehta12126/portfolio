import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Vidyadeep University</h4>
                <h5>Surat, India</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Pursuing higher education while continuously improving my creative and technical skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Red and White Skill Education</h4>
                <h5>Surat, India</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Built foundational skills in 3D Modeling, Texturing & Lighting, and Video Editing here.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>L.H. Boghra (Shishuvihar) School</h4>
                <h5>Surat, India</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed early schooling before starting formal education in creative skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance 3D Artist & Video Editor</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              - Edited Instagram reels, wedding highlights & promotional videos.<br/>
              - Created cinematic 3D renders and product visuals.<br/>
              - Managed complete workflow from concept to final output.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
