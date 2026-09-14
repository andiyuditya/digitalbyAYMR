
import { useEffect, useRef, useState } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setPhotoHeroTimeline } from "../utils/GsapScroll";
import "./styles/PhotoHero.css";

const Scene = () => {
  const { setLoading } = useLoading();
  const [activePhoto, setActivePhoto] = useState<"p2" | "p1">("p1");
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Preload both images
    const img1 = new Image();
    img1.src = `${import.meta.env.BASE_URL}images/p1.jpeg`;

    const img2 = new Image();
    img2.src = `${import.meta.env.BASE_URL}images/p3.jpeg`;

    const progress = setProgress((value) => setLoading(value));

    const timer = setTimeout(() => {
      progress.loaded();
    }, 400);

    // Initialize GSAP scroll animations for the photo hero
    setPhotoHeroTimeline();

    return () => {
      clearTimeout(timer);
    };
  }, [setLoading]);

  // Mouse tilt parallax effect
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;

      setTilt({
        x: normX,
        y: normY,
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const cardTransform = isHovered
    ? `perspective(1000px) rotateY(${tilt.x * 12}deg) rotateX(${-tilt.y * 12}deg) translateZ(20px) scale(1.02)`
    : `perspective(1000px) rotateY(${tilt.x * 7}deg) rotateX(${-tilt.y * 7}deg) translateZ(0px)`;

  const flareX = Math.max(0, Math.min(100, (tilt.x + 1) * 50));
  const flareY = Math.max(0, Math.min(100, (tilt.y + 1) * 50));

  return (
    <div className="character-container">
      <div className="character-model photo-character-model">
        {/* Glowing ambient backlight halo */}
        <div className="character-rim photo-rim-glow"></div>

        {/* 3D Tilt Card */}
        <div
          ref={cardRef}
          className="photo-card-wrapper"
          style={{ transform: cardTransform }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Holographic light glare */}
          <div
            className="photo-card-flare"
            style={{
              background: `radial-gradient(circle at ${flareX}% ${flareY}%, rgba(255, 255, 255, 0.22) 0%, transparent 65%)`,
            }}
          />

          {/* Top Status Bar */}
          <div className="photo-card-header">
            <div className="photo-status-badge">
              <span className="photo-status-dot"></span>
              <span className="photo-status-text">
                AVAILABLE FOR WORK
              </span>
            </div>

            <div className="photo-category-pill">
              {activePhoto === "p1" ? "PORTRAIT" : "FULL BODY"}
            </div>
          </div>

          {/* Main Photo Display */}
          <div
            className="photo-display-box"
            onClick={() =>
              setActivePhoto(activePhoto === "p1" ? "p2" : "p1")
            }
            title="Click to toggle photo"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/p1.jpeg`}
              alt="Andi Yuditya - Portrait Close-up"
              className={`hero-photo-img ${
                activePhoto === "p1"
                  ? "photo-active"
                  : "photo-hidden"
              }`}
              loading="eager"
            />

            <img
              src={`${import.meta.env.BASE_URL}images/p3.jpeg`}
              alt="Andi Yuditya - Full Body Graduation"
              className={`hero-photo-img ${
                activePhoto === "p2"
                  ? "photo-active"
                  : "photo-hidden"
              }`}
              loading="eager"
            />

            {/* Bottom Gradient Shade */}
            <div className="photo-bottom-shade">
              <div className="photo-caption-info">
                <h4>Andi Yuditya</h4>
                <p>
                  Web Developer • Data Analyst / Visualisasi • System Analyst
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Switch Pills */}
          <div className="photo-switcher-bar">
            <button
              type="button"
              className={`photo-switch-btn ${
                activePhoto === "p1" ? "active" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setActivePhoto("p1");
              }}
              data-cursor="disable"
            >
              <span className="btn-icon">👤</span> Portrait (P1)
            </button>

            <button
              type="button"
              className={`photo-switch-btn ${
                activePhoto === "p2" ? "active" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setActivePhoto("p2");
              }}
              data-cursor="disable"
            >
              <span className="btn-icon">🎓</span> Full Body (P3)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scene;

