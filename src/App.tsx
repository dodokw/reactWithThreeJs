import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Scene } from "./Scene";
import "./App.css";

function App() {
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll-based animations (Prezi-style)
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe features section
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">Three.js × React</div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#demo">Demo</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with 3D Canvas */}
      <section className="hero-section" id="home">
        <div className="canvas-container">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 75 }}
            gl={{ antialias: true, alpha: true }}
          >
            {/* Stars background */}
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />

            {/* Main scene */}
            <Scene />

            {/* Orbit controls for interaction */}
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              maxDistance={20}
              minDistance={5}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">3D Web Experience</h1>
          <p className="hero-subtitle">
            Powered by Three.js and React Three Fiber
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features" ref={featuresRef}>
        <div className="features-container">
          <h2 className="section-title">Amazing Features</h2>
          <p className="section-subtitle">
            Experience the power of 3D graphics in your browser
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Interactive 3D</h3>
              <p className="feature-description">
                Fully interactive 3D objects that respond to your mouse
                movements. Hover over shapes to see them scale and interact with
                the scene.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">High Performance</h3>
              <p className="feature-description">
                Optimized rendering with React Three Fiber ensures smooth 60fps
                animations even with complex 3D scenes and effects.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎭</div>
              <h3 className="feature-title">Beautiful Effects</h3>
              <p className="feature-description">
                Stunning visual effects including mesh distortion, dynamic
                lighting, and particle systems create an immersive experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Info */}
      <div className="controls-info">
        <h3 className="controls-title">Controls</h3>
        <ul className="controls-list">
          <li>Drag to rotate the scene</li>
          <li>Scroll to zoom in/out</li>
          <li>Hover over shapes to interact</li>
          <li>Auto-rotation enabled</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
