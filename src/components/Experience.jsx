const experienceData = [
  {
    date: '5 — 16 December 2025',
    role: 'VR Developer Trainee',
    company: 'PEC & XARC',
    description: 'Designed and developed interactive VR environments using Unity and the VRIF. Acquired skills in VR locomotion, controller interactions, physics-based objects, and UI design. Configured, optimized, and deployed VR applications for Meta Quest following structured VR workflows.',
  },
  {
    date: 'June 2025 — July 2025',
    role: 'AR/VR Developer Trainee',
    company: 'PCI',
    description: 'Developed Stranger Things AR App using Unity and Vuforia Engine with Image Targeting. Designed and developed AR Ecommerce App in Unity. Learned the basics of Augmented and Virtual Reality concepts.',
  },
  {
    date: '3 — 15 February 2025',
    role: 'AR/VR Developer Trainee',
    company: 'PEC & TANSAM',
    description: 'Developed AR apps with Image, Ground Plane, and Mid-Air Targeting. Designed a VR Bowling Ball Game in Unity with Blender models for immersive gameplay. Learned the basics of 3D Modeling using Blender and AR using Unity.',
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <span className="section-label">Journey</span>
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>


        <div className="experience__timeline">
          {experienceData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-item__dot" />
              <span className="timeline-item__date">{item.date}</span>
              <div className="timeline-item__card">
                <h3 className="timeline-item__role">{item.role}</h3>
                <span className="timeline-item__company">{item.company}</span>
                <p className="timeline-item__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
