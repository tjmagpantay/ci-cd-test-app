import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">&lt;Portfolio/&gt;</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="text-gradient">Full Stack Developer</span>
            </h1>
            <p className="hero-subtitle">
              Crafting digital experiences with modern technologies
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">View Projects</button>
              <button className="btn-secondary">Download CV</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-block">
              <div className="code-header">
                <div className="dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
              </div>
              <div className="code-content">
                <span className="code-line">
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Your Name"</span>,
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">"React"</span>, <span className="string">"Node.js"</span>],
                </span>
                <span className="code-line">
                  &nbsp;&nbsp;<span className="property">passion</span>: <span className="string">"Innovation"</span>
                </span>
                <span className="code-line">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
              </p>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">⚛️</div>
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📱</div>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🎨</div>
                  <span>UI/UX</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">☁️</div>
                  <span>Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>E-Commerce Platform</h3>
                <div className="project-links">
                  <a href="#" className="project-link">Live</a>
                  <a href="#" className="project-link">Code</a>
                </div>
              </div>
              <p>A full-stack e-commerce solution built with React and Node.js</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-header">
                <h3>Task Management App</h3>
                <div className="project-links">
                  <a href="#" className="project-link">Live</a>
                  <a href="#" className="project-link">Code</a>
                </div>
              </div>
              <p>A collaborative task management tool with real-time updates</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Socket.io</span>
                <span className="tech-tag">Express</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Weather Dashboard</h3>
                <div className="project-links">
                  <a href="#" className="project-link">Live</a>
                  <a href="#" className="project-link">Code</a>
                </div>
              </div>
              <p>A beautiful weather app with interactive charts and forecasts</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">D3.js</span>
                <span className="tech-tag">API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>Let's collaborate on your next project</p>
            <div className="contact-links">
              <a href="mailto:your@email.com" className="contact-link">
                <span className="contact-icon">📧</span>
                Email
              </a>
              <a href="https://linkedin.com" className="contact-link">
                <span className="contact-icon">💼</span>
                LinkedIn
              </a>
              <a href="https://github.com" className="contact-link">
                <span className="contact-icon">🚀</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Your Name. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
