import { useState, useEffect } from "react";
import { config, Certificate } from "../config";
import "./styles/Certificates.css";
import { FiAward, FiExternalLink, FiX, FiEye, FiCheckCircle } from "react-icons/fi";

const categories = [
  { id: "all", label: "All Certificates" },
  { id: "Certification", label: "Certifications & Competence" },
  { id: "Experience", label: "Internship & Experience" },
  { id: "Academic", label: "Academic & Exchange" },
  { id: "Seminar", label: "Seminars & Training" },
];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredCertificates =
    activeTab === "all"
      ? config.certificates
      : config.certificates.filter((c) => {
          if (activeTab === "Seminar") {
            return c.category === "Seminar" || c.category === "Training";
          }
          return c.category === activeTab;
        });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <div className="certificates-header">
          <h2>
            Licenses <span>&</span> Certifications
          </h2>
          <p>
            National competency credentials, corporate internship achievements, academic exchange honors, and professional engineering workshops.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="certificates-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cert-tab-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
              data-cursor="disable"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div className="certificates-grid">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="cert-card"
              onClick={() => setSelectedCert(cert)}
              data-cursor="disable"
            >
              <div className="cert-card-image-wrap">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="cert-card-overlay">
                  <span className="cert-view-badge">
                    <FiEye /> View Document
                  </span>
                </div>
              </div>

              <div className="cert-card-body">
                <div className="cert-card-meta">
                  <span
                    className={`cert-tag cert-tag-${cert.category.toLowerCase()}`}
                  >
                    {cert.category}
                  </span>
                  <span className="cert-year">{cert.year}</span>
                </div>

                <h3 className="cert-card-title">{cert.title}</h3>
                <div className="cert-card-issuer">
                  <FiAward style={{ color: "#ff3366", flexShrink: 0 }} />
                  <span>{cert.issuer}</span>
                </div>
                <p className="cert-card-desc">{cert.description}</p>

                <div className="cert-card-footer">
                  <span className="cert-cred-id">
                    {cert.credentialId ? cert.credentialId : "Verified Credential"}
                  </span>
                  <span style={{ color: "#ff3366", display: "flex", alignItems: "center", gap: "4px" }}>
                    Details <FiExternalLink size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-modal-close-btn"
              onClick={() => setSelectedCert(null)}
              aria-label="Close Modal"
              data-cursor="disable"
            >
              <FiX />
            </button>

            <div className="cert-modal-image-container">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
              />
            </div>

            <div className="cert-modal-details">
              <div className="cert-modal-header">
                <div className="cert-card-meta" style={{ marginBottom: "8px" }}>
                  <span
                    className={`cert-tag cert-tag-${selectedCert.category.toLowerCase()}`}
                  >
                    {selectedCert.category}
                  </span>
                  <span className="cert-year">{selectedCert.year}</span>
                </div>
                <h2 className="cert-modal-title">{selectedCert.title}</h2>
                <div className="cert-modal-issuer">
                  <strong>Issued by:</strong> {selectedCert.issuer}
                </div>
              </div>

              <p className="cert-modal-desc">{selectedCert.description}</p>

              <div className="cert-modal-footer">
                <div className="cert-modal-id">
                  <FiCheckCircle style={{ color: "#22c55e", marginRight: "6px", verticalAlign: "middle" }} />
                  {selectedCert.credentialId
                    ? `Credential: ${selectedCert.credentialId}`
                    : "Verified Credential"}
                </div>
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-open-link"
                  data-cursor="disable"
                >
                  Open Full Image <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
