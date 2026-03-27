import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
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

  <div className="landing-role-stack">
    <h2 className="landing-role-top">3D ARTIST</h2>
    <h2 className="landing-role-bottom">VIDEO EDITOR</h2>
  </div>
</div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
