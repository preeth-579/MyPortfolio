export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero__content">
        <div className="hero__text">
          <h1 className="hero__heading">
            I BUILD <span className="gradient-text">IMMERSIVE</span> EXPERIENCE
          </h1>

          <p className="hero__description">
            I am a dedicated Computer Science and Engineering student with
            hands-on experience in AR, VR, MR Development.
            I am eager to contribute to innovative and fast-paced environments
            where I can grow as an XR developer and make a meaningful impact
            through creative and technical solutions.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Explore My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Get In Touch
            </a>
          </div>

          <div className="hero__stats">
            <div>
              <div className="hero__stat-value">1+</div>
              <div className="hero__stat-label">YEAR EXP</div>
            </div>
            <div>
              <div className="hero__stat-value">9</div>
              <div className="hero__stat-label">PROJECTS</div>
            </div>
            <div>
              <div className="hero__stat-value">XR</div>
              <div className="hero__stat-label">CORE</div>
            </div>
          </div>


        </div>

        <div className="hero__visual">
          <div className="hero__image-column">
            <div className="hero__image-wrapper">
              <div className="hero__image-ring" />
              <img
                src="/images/profile.png"
                alt="Preeth D - XR Developer"
                className="hero__image"
              />
            </div>

            <div className="hero__socials">
              <a href="https://www.linkedin.com/in/preethd579/" target="_blank" rel="noopener noreferrer" className="hero__social-link" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/preeth-579" target="_blank" rel="noopener noreferrer" className="hero__social-link" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="mailto:preethpreeth854@gmail.com" className="hero__social-link" title="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
