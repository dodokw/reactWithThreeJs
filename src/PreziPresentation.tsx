import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Scene } from "./Scene";
import { projects } from "./projectsData";
import "./PreziPresentation.css";

function PreziPresentation() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // 줌인 애니메이션 후 상세 내용 표시
  useEffect(() => {
    if (activeProject !== null) {
      const timer = setTimeout(() => {
        setShowDetails(true);
      }, 800); // 줌인 애니메이션 시간과 맞춤
      return () => clearTimeout(timer);
    } else {
      setShowDetails(false);
    }
  }, [activeProject]);

  const handleProjectClick = (index: number) => {
    setActiveProject(index);
  };

  const handleBackgroundClick = () => {
    if (activeProject !== null) {
      setActiveProject(null);
    }
  };

  const handleNext = () => {
    if (activeProject !== null && activeProject < projects.length - 1) {
      setActiveProject(activeProject + 1);
    }
  };

  const handlePrev = () => {
    if (activeProject !== null && activeProject > 0) {
      setActiveProject(activeProject - 1);
    }
  };

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <div className="prezi-container">
      {/* 3D Background */}
      <div className="prezi-canvas">
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
            autoRotate={activeProject === null}
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </div>

      {/* Prezi-style Canvas */}
      <div
        className={`prezi-canvas-wrapper ${
          activeProject !== null ? "zoomed" : ""
        }`}
        style={{
          transform:
            activeProject !== null
              ? `scale(3) translate(${-getProjectPosition(activeProject)
                  .x}px, ${-getProjectPosition(activeProject).y}px)`
              : "scale(1) translate(0, 0)",
        }}
      >
        {/* Title removed */}

        {/* Project Circles */}
        <div className="prezi-projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`prezi-project-circle ${
                activeProject === index ? "active" : ""
              }`}
              onClick={() => handleProjectClick(index)}
              style={{
                borderColor: project.color,
                gridArea: getGridArea(index),
              }}
            >
              <div className="prezi-circle-icon">{project.icon}</div>
              <h3 className="prezi-circle-title">{project.title}</h3>
              <p className="prezi-circle-subtitle">{project.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      {activeProject !== null && showDetails && (
        <div className="prezi-detail-panel">
          <button className="prezi-close-btn" onClick={handleBackgroundClick}>
            ✕
          </button>

          <div className="prezi-detail-content">
            <div className="prezi-detail-header">
              <div
                className="prezi-detail-icon"
                style={{ color: projects[activeProject].color }}
              >
                {projects[activeProject].icon}
              </div>
              <div>
                <h2 className="prezi-detail-title">
                  {projects[activeProject].title}
                </h2>
                <p className="prezi-detail-subtitle">
                  {projects[activeProject].subtitle}
                </p>
              </div>
            </div>

            <div className="prezi-detail-body">
              <section className="prezi-section">
                <h3 className="prezi-section-title">📝 개요</h3>
                <p className="prezi-section-text">
                  {projects[activeProject].description}
                </p>
              </section>

              <section className="prezi-section prezi-highlight">
                <h3 className="prezi-section-title">💡 혁신 포인트</h3>
                <p className="prezi-section-text prezi-innovation">
                  {projects[activeProject].innovationPoint}
                </p>
              </section>

              <section className="prezi-section">
                <h3 className="prezi-section-title">🎯 활용 사례</h3>
                <ul className="prezi-list">
                  {projects[activeProject].useCases.map((useCase, idx) => (
                    <li key={idx} className="prezi-list-item">
                      {useCase}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="prezi-section">
                <h3 className="prezi-section-title">⚙️ 기술적 특징</h3>
                <ul className="prezi-list prezi-tech-list">
                  {projects[activeProject].technicalDetails.map(
                    (detail, idx) => (
                      <li key={idx} className="prezi-list-item">
                        {detail}
                      </li>
                    )
                  )}
                </ul>
              </section>

              <section className="prezi-section">
                <h3 className="prezi-section-title">🔗 GitHub</h3>
                <a
                  href={`https://${projects[activeProject].link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prezi-link"
                  style={{ borderColor: projects[activeProject].color }}
                >
                  {projects[activeProject].link}
                </a>
              </section>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="prezi-nav-arrows">
            <button
              className="prezi-arrow prezi-arrow-left"
              onClick={handlePrev}
              disabled={activeProject === 0}
            >
              ◀
            </button>
            <div className="prezi-progress">
              {activeProject + 1} / {projects.length}
            </div>
            <button
              className="prezi-arrow prezi-arrow-right"
              onClick={handleNext}
              disabled={activeProject === projects.length - 1}
            >
              ▶
            </button>
          </div>
        </div>
      )}

      {/* Instruction Hint */}
      {activeProject === null && (
        <div className="prezi-hint">
          클릭하여 프로젝트 탐색 • ESC로 돌아가기 • ← → 화살표로 이동
        </div>
      )}
    </div>
  );
}

// 프로젝트 위치 계산 (3x3 그리드)
function getProjectPosition(index: number) {
  const positions = [
    { x: -200, y: -150 }, // 0
    { x: 0, y: -150 }, // 1
    { x: 200, y: -150 }, // 2
    { x: -200, y: 0 }, // 3
    { x: 0, y: 0 }, // 4
    { x: 200, y: 0 }, // 5
    { x: -200, y: 150 }, // 6
    { x: 0, y: 150 }, // 7
    { x: 200, y: 150 }, // 8
  ];
  return positions[index] || { x: 0, y: 0 };
}

// Grid area 할당
function getGridArea(index: number) {
  const areas = [
    "1 / 1 / 2 / 2", // 0
    "1 / 2 / 2 / 3", // 1
    "1 / 3 / 2 / 4", // 2
    "2 / 1 / 3 / 2", // 3
    "2 / 2 / 3 / 3", // 4
    "2 / 3 / 3 / 4", // 5
    "3 / 1 / 4 / 2", // 6
    "3 / 2 / 4 / 3", // 7
    "3 / 3 / 4 / 4", // 8
  ];
  return areas[index];
}

export default PreziPresentation;
