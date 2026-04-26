import { useState } from 'react'

const projectsData = [
  {
    id: 1,
    title: 'AR Jet Turbine',
    category: 'Augmented Reality',
    status: 'ON GOING',
    image: '/images/jetturbine.png',
    tech: ['Unity', 'AR Foundation', 'C#'],
    filter: 'ar',
  },
  {
    id: 2,
    title: 'VR Room',
    category: 'Virtual Reality',
    status: 'COMPLETED',
    image: '/images/vrroom.png',
    tech: ['Unity', 'XR Interaction Toolkit', 'C#'],
    filter: 'vr',
    link: 'https://github.com/preeth-579/VRROOMPROJECT',
  },
  {
    id: 3,
    title: 'VR Bow and Arrow Game',
    category: 'Virtual Reality',
    status: 'COMPLETED',
    image: '/images/bowandarrowgame.png',
    tech: ['Unity', 'VRIF', 'C#'],
    filter: 'vr',
    link: 'https://github.com/preeth-579/BowAndArrowVRGame',
  },
  {
    id: 4,
    title: 'VR Venipuncture Training',
    category: 'Virtual Reality',
    status: 'COMPLETED',
    image: '/images/vrvenipunture.png',
    tech: ['Unity', 'VRIF', 'C#'],
    filter: 'vr',
  },
  {
    id: 5,
    title: 'VR Space Scraper Game',
    category: 'Virtual Reality',
    status: 'COMPLETED',
    image: '/images/vrspacescraper.png',
    tech: ['Unity', 'XR Interaction Toolkit', 'C#', 'Shader Graph'],
    filter: 'vr',
    link: 'https://github.com/preeth-579/VRSpaceScraper',
  },
  {
    id: 6,
    title: 'VR PEC CSE Block',
    category: 'Virtual Reality',
    status: 'COMPLETED',
    image: '/images/peccseblock.png',
    tech: ['Blender', 'Unity', 'C#', 'VRIF'],
    filter: 'vr',
  },
  {
    id: 7,
    title: 'DMC Room PEC',
    category: '3D Modeling',
    status: 'COMPLETED',
    image: '/images/dmcroom.png',
    tech: ['Blender'],
    filter: '3d-modeling',
  },
  {
    id: 8,
    title: 'Tea Shop',
    category: '3D Modeling',
    status: 'COMPLETED',
    image: '/images/tea.jpg',
    tech: ['Blender'],
    filter: '3d-modeling',
    link: 'https://www.linkedin.com/posts/preethd579_blender-blender3d-blender2d-activity-7267177064087117824-agqN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERf9E8BhkpadBn7EoOawz5A56c1IBJN-pg',
  },
  {
    id: 9,
    title: 'Space Exploration AR',
    category: 'Augmented Reality',
    status: 'ON GOING',
    image: '/images/arsolarsystem.jpeg',
    tech: ['Unity', 'AR Foundation', 'C#'],
    filter: 'ar',
  },
  {
    id: 10,
    title: 'VR Smart Home Automation',
    category: 'Virtual Reality',
    status: 'COMPLETED',
    image: '/images/vrhomeautomation.png',
    tech: ['Unity', 'C#', 'VRIF'],
    filter: 'vr',
  },
  {
    id: 11,
    title: 'CuBuild AR',
    category: 'Augmented Reality',
    status: 'COMPLETED',
    image: '/images/cubuildar.png',
    tech: ['Unity', 'C#', 'AR Foundation'],
    filter: 'ar',
  },
]

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'vr', label: 'VR' },
  { key: 'ar', label: 'AR' },
  { key: '3d-modeling', label: '3D Modeling' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.filter === activeFilter)

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    // 1. Sort by status (COMPLETED first, ON GOING last)
    if (a.status !== b.status) {
      return a.status === 'COMPLETED' ? -1 : 1
    }
    
    // 2. Sort by domain/category (AR -> VR -> 3D Modeling)
    const categoryOrder = { 'ar': 1, 'vr': 2, '3d-modeling': 3 }
    const orderA = categoryOrder[a.filter] || 99
    const orderB = categoryOrder[b.filter] || 99
    
    return orderA - orderB
  })

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__header">
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">XR Projects</span>
            </h2>
          </div>

          <div className="projects__filters">
            {filters.map(f => (
              <button
                key={f.key}
                className={`projects__filter ${activeFilter === f.key ? 'projects__filter--active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
                id={`filter-${f.key}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {sortedProjects.map(project => (
            <article className="project-card" key={project.id} id={`project-${project.id}`}>
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
                {/* View options temporarily removed, to be included in the future
                <div className="project-card__overlay">
                  <div className="project-card__overlay-actions">
                    <button 
                      className="project-card__overlay-btn"
                      onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
                    >
                      View →
                    </button>
                  </div>
                </div>
                */}
              </div>

              <div className="project-card__content">
                <div className="project-card__header">
                  <span className="project-card__category">{project.category}</span>
                  {project.status && (
                    <span className={`project-card__status project-card__status--${project.status.replace(' ', '').toLowerCase()}`}>
                      {project.status}
                    </span>
                  )}
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__tech">
                  {project.tech.map((t, i) => (
                    <span className="project-card__tech-tag" key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
