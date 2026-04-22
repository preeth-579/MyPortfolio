const skillsData = [
  {
    icon: '📱',
    title: 'AR Development',
    description: 'Developing augmented reality solutions utilizing core frameworks to merge digital content with the real world.',
    tags: ['AR Foundation', 'Vuforia'],
  },
  {
    icon: '🥽',
    title: 'VR Development',
    description: 'Creating fully immersive virtual reality environments with advanced interaction systems and cross-platform compatibility.',
    tags: ['XR Interaction Toolkit', 'OpenXR', 'Meta XR All In One SDK', 'VRIF', 'VR Architectural Visualization'],
  },
  {
    icon: '🌐',
    title: 'XR Development',
    description: 'Bridging physical and digital worlds through comprehensive spatial computing applications and simulations.',
    tags: ['AR Applications', 'VR Environments and Simulation', 'Mixed Reality Applications'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.1 11.2h-3.4l-3-5.2 2.6-1.5 3.8 6.7zM15 4.6l-2.6-1.5-3 5.2H6L12 18.7l6-10.4h-3.4l-3-5.2zM5.3 11.2H1.9l3.8-6.7 2.6 1.5-3 5.2z" />
      </svg>
    ),
    title: 'Unity Game Engine',
    description: 'Expertise in high-performance rendering, scripting, and spatial computing logic within the Unity ecosystem.',
    tags: ['C#', 'URP', 'HDRP'],
  },
  {
    icon: '🧊',
    title: '3D Modeling',
    description: 'Crafting optimized 3D assets and architectural environments for real-time XR experiences.',
    tags: ['Blender', 'Architecture'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>

        <div className="skills__grid">
          {skillsData.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-card__icon">{skill.icon}</div>
              <h3 className="skill-card__title">{skill.title}</h3>
              <p className="skill-card__description">{skill.description}</p>
              <div className="skill-card__tags">
                {skill.tags.map((tag, i) => (
                  <span className="skill-card__tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
