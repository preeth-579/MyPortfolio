const highlights = [
  { icon: '🥽', text: 'VR Experiences' },
  { icon: '📱', text: 'AR Applications' },
  { icon: '🌐', text: 'Mixed Reality' },
  { icon: '🧊', text: '3D Environments' },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__image-area">
          <div className="about__image-card">
            <img
              src="/images/profile.png"
              alt="Preeth D working on XR development"
            />
          </div>
          <div className="about__experience-badge">
            <strong>3+</strong>
            <span>Years in XR Development</span>
          </div>
        </div>

        <div className="about__text">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Shaping the future of <span className="gradient-text">spatial computing</span>
          </h2>

          <p>
            I'm an XR Developer passionate about creating immersive experiences 
            that bridge the gap between the physical and digital worlds. With deep 
            expertise in AR, VR, and MR technologies, I build applications that 
            transform how people interact with information and environments.
          </p>

          <p>
            From crafting VR training simulations and AR product visualizers to 
            building mixed reality collaboration tools — I leverage platforms like 
            Unity, Unreal Engine, and WebXR to deliver experiences that feel 
            natural, intuitive, and unforgettable.
          </p>

          <div className="about__highlights">
            {highlights.map((item, i) => (
              <div className="about__highlight" key={i}>
                <span className="about__highlight-icon">{item.icon}</span>
                <span className="about__highlight-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
