import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Scene } from "./Scene";
import "./Presentation.css";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  innovationPoint: string;
  useCases: string[];
  technicalDetails: string[];
  link: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Open Interpreter",
    subtitle: "AI와 OS의 완벽한 결합",
    icon: "🤖",
    description:
      "ChatGPT 같은 인터페이스에서 자연어로 명령하면, AI가 직접 파이썬 코드를 작성하여 로컬 컴퓨터의 터미널과 파일 시스템을 제어합니다.",
    innovationPoint:
      "term.everything이 터미널에서 GUI를 보게 해준다면, Open Interpreter는 AI가 내 컴퓨터를 직접 제어하게 합니다.",
    useCases: [
      '데이터 분석 자동화 - "지난 주 매출 데이터를 분석해서 차트로 만들어줘"',
      '파일 관리 - "어제 다운로드한 스크린샷들을 전부 폴더별로 정리해줘"',
      '복잡한 설정 변경 - "개발 환경 설정을 프로덕션용으로 바꿔줘"',
      '시스템 모니터링 - "CPU 사용률이 높은 프로세스를 찾아서 보고서 만들어줘"',
    ],
    technicalDetails: [
      "로컬 실행으로 데이터 프라이버시 보장",
      "GPT-4, Claude 등 다양한 LLM 지원",
      "실시간 코드 실행 및 결과 확인",
      "안전 모드로 위험한 명령 사전 확인",
    ],
    link: "github.com/KillianLucas/open-interpreter",
    color: "#00d4ff",
  },
  {
    id: 2,
    title: "Unsloth",
    subtitle: "LLM 파인튜닝의 극강 효율화",
    icon: "⚡",
    description:
      "LLM 학습 속도를 2~3배 높이고 메모리 사용량을 70% 이상 줄여, 저사양 GPU에서도 대규모 모델 학습을 가능하게 합니다.",
    innovationPoint:
      "LlamaFactory가 인터페이스의 혁신이라면, Unsloth는 성능과 속도의 혁신입니다.",
    useCases: [
      "개인 개발자 - RTX 3090 하나로 Llama 3 70B 파인튜닝",
      "스타트업 - 고가 장비 없이 도메인 특화 모델 개발",
      "연구자 - 빠른 실험 반복으로 연구 속도 향상",
      "기업 - 클라우드 비용 70% 절감하며 커스텀 모델 구축",
    ],
    technicalDetails: [
      "Flash Attention 2 최적화로 속도 2~3배 향상",
      "Gradient Checkpointing으로 메모리 70% 절감",
      "Llama 3, Mistral, Gemma 등 최신 모델 지원",
      "LoRA, QLoRA 등 효율적 파인튜닝 기법 내장",
    ],
    link: "github.com/unslothai/unsloth",
    color: "#ff006e",
  },
  {
    id: 3,
    title: "Cosmopolitan Libc",
    subtitle: "단 하나의 바이너리, 모든 OS 실행",
    icon: "🌍",
    description:
      "하나의 실행 파일(.com)이 Linux, macOS, Windows, FreeBSD 등 거의 모든 OS에서 수정 없이 바로 실행됩니다.",
    innovationPoint:
      '"Write Once, Run Anywhere"의 진정한 구현체. 배포의 복잡성을 완전히 제거합니다.',
    useCases: [
      "CLI 도구 배포 - 하나의 파일로 모든 플랫폼 지원",
      "임베디드 시스템 - OS 종속성 없는 유니버설 바이너리",
      "보안 도구 - 플랫폼 독립적인 포렌식 도구 개발",
      "게임 개발 - 크로스 플랫폼 배포 간소화",
    ],
    technicalDetails: [
      "PE/ELF/Mach-O 포맷을 하나의 파일에 통합",
      "런타임 OS 감지 및 적절한 시스템콜 자동 선택",
      "C/C++ 표준 라이브러리 완전 구현",
      "바이너리 크기 최소화 (Hello World: ~16KB)",
    ],
    link: "github.com/jart/cosmopolitan",
    color: "#8338ec",
  },
  {
    id: 4,
    title: "AppAgent",
    subtitle: "스마트폰을 사용하는 AI 에이전트",
    icon: "📱",
    description:
      "사람이 스마트폰 화면을 보고 터치하듯, AI가 모바일 앱의 UI를 인식하고 직접 클릭, 스와이프하며 작업을 수행합니다.",
    innovationPoint:
      "API 연동이 안 된 앱도 AI가 사람처럼 조작할 수 있습니다. 데스크톱을 넘어 모바일 환경의 혁신입니다.",
    useCases: [
      "모바일 앱 자동화 테스트 - UI 변경 감지 및 회귀 테스트",
      "복잡한 예약 대행 - 여러 앱을 넘나들며 최적 조건 검색",
      "데이터 수집 - API 없는 앱에서 정보 추출",
      "크로스 앱 워크플로우 - 여러 앱 간 데이터 자동 연동",
    ],
    technicalDetails: [
      "Vision-Language Model로 UI 요소 인식",
      "Android Debug Bridge (ADB) 기반 제어",
      "멀티모달 학습으로 컨텍스트 이해",
      "실패 시 자동 재시도 및 대안 경로 탐색",
    ],
    link: "github.com/tencent-ailab/AppAgent",
    color: "#00d4ff",
  },
  {
    id: 5,
    title: "v0.dev / Bolt.new",
    subtitle: "UI 개발의 패러다임 변화",
    icon: "🎨",
    description:
      "프롬프트 한 줄로 React, Tailwind CSS 기반의 완성도 높은 UI를 즉시 생성하고 브라우저에서 바로 실행까지 해줍니다.",
    innovationPoint:
      '코드를 직접 짜는 시대에서 "생성하는" 시대로의 전환. 단순히 코드만 짜주는 게 아니라 배포된 결과물을 실시간으로 보여줍니다.',
    useCases: [
      "프로토타입 제작 - 아이디어를 몇 분 만에 동작하는 앱으로",
      "디자인 시스템 구축 - 컴포넌트 라이브러리 빠른 생성",
      "랜딩 페이지 - 마케팅 캠페인용 페이지 즉시 제작",
      "학습 도구 - 초보자가 실제 코드 보며 학습",
    ],
    technicalDetails: [
      "Claude Sonnet 3.5 기반 코드 생성",
      "WebContainer로 브라우저 내 Node.js 실행",
      "실시간 미리보기 및 핫 리로드",
      "npm 패키지 자동 설치 및 의존성 관리",
    ],
    link: "github.com/stackblitz/bolt.new",
    color: "#ff006e",
  },
];

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
            <h1 className="main-title">Next-Gen Open Source</h1>
            <p className="main-subtitle">
              개발 패러다임을 재정의하는 5가지 혁신
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
