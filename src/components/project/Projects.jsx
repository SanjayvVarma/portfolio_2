import './project.css';
import projects from '../../data/projects';

const Projects = () => {
  return (
    <>
      <div className="container projects" id='projects'>
        <h2 className='text-center'>PROJECTS</h2>
        <div className="pro-items my-5">
          {
            projects.map((project) => (
              <div key={project.id} className='item' data-aos='flip-right' data-aos-duration='1000'>
                <div className="card bg-black text-light" style={{ width: "18rem" }}>
                  <div className='img'>
                    <img src={project.imageSrc} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.demo} className="btn btn-primary">Demo</a>
                    <a href={project.source} className="btn btn-warning mx-4">Code</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Projects