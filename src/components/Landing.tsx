import { PropsWithChildren, useState } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const [activeMobilePhoto, setActiveMobilePhoto] = useState<"p2" | "p1">("p1");
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>A</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Web Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Data Analyst / Visualisasi</div>
            </h2>
            <h2>
              <div className="landing-h2-info">System Analyst</div>
            </h2>
          </div>
          {/* Mobile photo showcase */}
          <div className="mobile-photo">
            <div className="mobile-photo-card">
              <div
                className="mobile-photo-box"
                onClick={() => setActiveMobilePhoto(activeMobilePhoto === "p1" ? "p2" : "p1")}
                title="Tap to toggle photo"
              >
                <img
                  src="/images/p1.jpeg"
                  alt={`${config.developer.fullName} - Portrait`}
                  className={`mobile-photo-img ${activeMobilePhoto === "p1" ? "active" : ""}`}
                  loading="eager"
                  fetchPriority="high"
                />
                <img
                  src="/images/p3.jpeg"
                  alt={`${config.developer.fullName} - Full Body`}
                  className={`mobile-photo-img ${activeMobilePhoto === "p2" ? "active" : ""}`}
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="mobile-photo-badge">
                  <span>{activeMobilePhoto === "p1" ? "👤 Portrait" : "🎓 Full Body"}</span>
                </div>
              </div>
              <div className="mobile-photo-switch">
                <button
                  type="button"
                  className={activeMobilePhoto === "p1" ? "active" : ""}
                  onClick={() => setActiveMobilePhoto("p1")}
                >
                  Portrait (P1)
                </button>
                <button
                  type="button"
                  className={activeMobilePhoto === "p2" ? "active" : ""}
                  onClick={() => setActiveMobilePhoto("p2")}
                >
                  Full Body (P3)
                </button>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
