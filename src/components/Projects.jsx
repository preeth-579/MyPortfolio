import { useState } from 'react'

const projectsData = [
  {
    id: 1,
    title: 'AR Jet Turbine',
    category: 'Augmented Reality',
    status: 'COMPLETED',
    image: '/images/jetturbine.png',
    tech: ['Unity', 'AR Foundation', 'ARCore', 'C#'],
    filter: 'ar',
    demoVideo: 'https://drive.google.com/file/d/16a1ngRyyi6ACAC4rCh72L1lVXziHX7Jh/view?usp=sharing',
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
    demoVideo: 'https://drive.google.com/file/d/1C2DWJhqo4KWEbQI08Vxg23zMAbJ_w8k9/view?usp=sharing',
  },
  {
    id: 4,
    title: 'VR Venipuncture Training',
    category: 'Virtual Reality',
    status: 'COMPLETED',
    image: '/images/vrvenipunture.png',
    tech: ['Unity', 'VRIF', 'C#'],
    filter: 'vr',
    demoVideo: 'https://drive.google.com/file/d/19XPXpde7klCDdDIsiZr7wEjnlqRpo327/view?usp=sharing',
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
    demoVideo: 'https://drive.google.com/file/d/1SCmIrP4Zt-3Ip4YlzkkwQLbzH-KuvlA7/view?usp=sharing',
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
    id: 10,
    title: 'VR Smart Home Automation',
    category: 'Virtual Reality',
    status: 'COMPLETED',
    image: '/images/vrhomeautomation.png',
    tech: ['Unity', 'C#', 'VRIF'],
    filter: 'vr',
    demoVideo: 'https://drive.google.com/file/d/1ur0BxJHfI7Kgt3NTf7D5x8jR6niOTa9U/view?usp=sharing',
  },
  {
    id: 11,
    title: 'CuBuild AR',
    category: 'Augmented Reality',
    status: 'COMPLETED',
    image: '/images/cubuildar.png',
    tech: ['Unity', 'C#', 'AR Foundation', 'ARCore'],
    filter: 'ar',
  },
  {
    id: 12,
    title: 'AR Face Filter',
    category: 'Augmented Reality',
    status: 'COMPLETED',
    image: '/images/arfacefilter.png',
    tech: ['Unity', 'AR Foundation', 'ARCore', 'C#', 'Visual Scripting'],
    filter: 'ar',
    demoVideo: 'https://drive.google.com/file/d/1cniAc2zAfZDF7SQWQyPYrnR6HDYcynAp/view?usp=sharing',
  },
  {
    id: 13,
    title: 'AR UFO Game',
    category: 'Augmented Reality',
    status: 'COMPLETED',
    image: '/images/arufo.png',
    tech: ['Unity', 'AR Foundation', 'ARCore', 'C#', 'Visual Scripting'],
    filter: 'ar',
    demoVideo: 'https://drive.google.com/file/d/1e9GDWnp5zYmF9fU6bl89kBdjw4Z45GGa/view?usp=sharing',
  },
]

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'vr', label: 'VR' },
  { key: 'ar', label: 'AR' },
  { key: '3d-modeling', label: '3D Modeling' },
]

function getEmbedUrl(url) {
  // Convert Google Drive share link → embed preview URL
  // e.g. https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  //   → https://drive.google.com/file/d/FILE_ID/preview
  if (!url) return null
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/)
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`
  }
  return url // regular video URL — use as-is
}

function VideoModal({ project, onClose }) {
  if (!project) return null

  // Close on ESC key
  const handleKey = (e) => { if (e.key === 'Escape') onClose() }
  if (typeof window !== 'undefined') {
    window.onkeydown = handleKey
  }

  const embedUrl = getEmbedUrl(project.demoVideo)
  const isDrive = project.demoVideo && project.demoVideo.includes('drive.google.com')

  return (
    <div className="demo-modal__backdrop" onClick={onClose} id="demo-modal-backdrop">
      <div
        className="demo-modal__container"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} Demo`}
      >
        {/* Header — always visible */}
        <div className="demo-modal__header">
          <div>
            <span className="demo-modal__label">Demo</span>
            <h3 className="demo-modal__title">{project.title}</h3>
          </div>
          <button
            className="demo-modal__close"
            onClick={onClose}
            aria-label="Close demo"
            id="demo-modal-close"
          >
            ✕
          </button>
        </div>

        {/* Video body */}
        <div className="demo-modal__body">
          {embedUrl && isDrive ? (
            <div className="demo-modal__iframe-wrapper">
              {/* Floating close button on top of video */}
              <button
                className="demo-modal__float-close"
                onClick={onClose}
                aria-label="Close demo"
              >
                ✕
              </button>
              <iframe
                className="demo-modal__iframe"
                src={embedUrl}
                allow="autoplay; fullscreen"
                allowFullScreen
                title={`${project.title} Demo`}
              />
            </div>
          ) : embedUrl ? (
            <div className="demo-modal__iframe-wrapper">
              <button
                className="demo-modal__float-close"
                onClick={onClose}
                aria-label="Close demo"
              >
                ✕
              </button>
              <video
                className="demo-modal__iframe"
                src={embedUrl}
                controls
                autoPlay
                playsInline
              />
            </div>
          ) : (
            <div className="demo-modal__placeholder">
              <span className="demo-modal__placeholder-icon">🎬</span>
              <p>Demo video coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [demoProject, setDemoProject] = useState(null)

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
    <>
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
                    <div className="project-card__badges">
                      {'demoVideo' in project && (
                        <button
                          className="project-card__demo-btn"
                          onClick={() => setDemoProject(project)}
                          id={`demo-btn-${project.id}`}
                          aria-label={`Watch ${project.title} demo`}
                        >
                          <span className="project-card__demo-icon">▶</span>
                          Demo
                        </button>
                      )}
                      {project.status && (
                        <span className={`project-card__status project-card__status--${project.status.replace(' ', '').toLowerCase()}`}>
                          {project.status}
                        </span>
                      )}
                    </div>
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

      {demoProject && (
        <VideoModal
          project={demoProject}
          onClose={() => setDemoProject(null)}
        />
      )}
    </>
  )
}
