import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            PRANJAL
            <br />
            <span>MEHTA</span>
          </h1>
        </div>

        <div className="landing-info">
          <h3>A Creative</h3>

          <div className="landing-role-wrap">
            <div className="landing-info-h2 landing-h2-1">3D Artist</div>
            <div className="landing-info-h2 landing-h2-2">Video Editor</div>
          </div>

          <div className="landing-role-wrap-2">
            <div className="landing-h2-info">Video Editor</div>
            <div className="landing-h2-info-1">3D Artist</div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Landing;