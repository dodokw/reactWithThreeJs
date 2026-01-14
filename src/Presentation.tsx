import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Scene } from "./Scene";
import { projects } from "./projectsData";
import "./Presentation.css";

function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const currentProject = projects[currentSlide - 1];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, projects.length));
    setShowDetails(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    setShowDetails(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowDetails(false);
  };

  return (
    <div className="presentation-container">
      {/* 3D Background */}
      <div className="presentation-canvas">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <Scene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="presentation-content">
        {/* Title Slide */}
        {currentSlide === 0 && !showDetails && (
          <div className="title-slide">
            <h1 className="main-title">혁신적인 오픈소스 프로젝트</h1>
            <p className="main-subtitle">
              개발의 미래를 만들어가는 9가지 게임 체인저
            </p>
            <div className="project-grid">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-preview-card"
                  onClick={() => goToSlide(index + 1)}
                  style={{ borderColor: project.color }}
                >
                  <div className="project-preview-icon">{project.icon}</div>
                  <h3 className="project-preview-title">{project.title}</h3>
                  <p className="project-preview-subtitle">{project.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Detail Slide */}
        {currentSlide > 0 && (
          <div className="project-slide">
            <div className="project-header">
              <div
                className="project-icon-large"
                style={{ color: currentProject.color }}
              >
                {currentProject.icon}
              </div>
              <div className="project-header-text">
                <h2 className="project-title">{currentProject.title}</h2>
                <p className="project-subtitle">{currentProject.subtitle}</p>
              </div>
            </div>

            <div className="project-body">
              <div className="project-section">
                <h3 className="section-heading">📝 개요</h3>
                <p className="section-content">{currentProject.description}</p>
              </div>

              <div className="project-section highlight-section">
                <h3 className="section-heading">💡 혁신 포인트</h3>
                <p className="section-content innovation-text">
                  {currentProject.innovationPoint}
                </p>
              </div>

              {showDetails && (
                <>
                  <div className="project-section">
                    <h3 className="section-heading">🎯 활용 사례</h3>
                    <ul className="use-case-list">
                      {currentProject.useCases.map((useCase, index) => (
                        <li key={index} className="use-case-item">
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-section">
                    <h3 className="section-heading">⚙️ 기술적 특징</h3>
                    <ul className="technical-list">
                      {currentProject.technicalDetails.map((detail, index) => (
                        <li key={index} className="technical-item">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-section">
                    <h3 className="section-heading">🔗 링크</h3>
                    <a
                      href={`https://${currentProject.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ borderColor: currentProject.color }}
                    >
                      {currentProject.link}
                    </a>
                  </div>
                </>
              )}

              <button
                className="details-toggle"
                onClick={() => setShowDetails(!showDetails)}
                style={{
                  background: `linear-gradient(135deg, ${currentProject.color}, #8338ec)`,
                }}
              >
                {showDetails ? "간략히 보기 ▲" : "자세히 보기 ▼"}
              </button>
            </div>

            {/* Navigation inside project slide */}
            <div className="project-nav">
              <button
                className="project-nav-button"
                onClick={prevSlide}
                disabled={currentSlide === 1}
              >
                ◀ 이전
              </button>
              <div className="project-slide-indicators">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`project-indicator ${
                      currentSlide === index + 1 ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index + 1)}
                    style={{
                      background:
                        currentSlide === index + 1
                          ? projects[index].color
                          : "transparent",
                      borderColor: projects[index].color,
                    }}
                  />
                ))}
              </div>
              <button
                className="project-nav-button"
                onClick={nextSlide}
                disabled={currentSlide === projects.length}
              >
                다음 ▶
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation - Only visible on title slide */}
      {currentSlide === 0 && (
        <div className="presentation-nav">
          <button
            className="nav-button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ◀ 이전
          </button>
          <div className="slide-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                style={{
                  background:
                    currentSlide === index
                      ? projects[index].color
                      : "transparent",
                  borderColor: projects[index].color,
                }}
              />
            ))}
          </div>
          <button
            className="nav-button"
            onClick={nextSlide}
            disabled={currentSlide === projects.length}
          >
            다음 ▶
          </button>
        </div>
      )}

      {/* Slide Counter */}
      <div className="slide-counter">
        {currentSlide + 1} / {projects.length + 1}
      </div>
    </div>
  );
}

export default Presentation;
