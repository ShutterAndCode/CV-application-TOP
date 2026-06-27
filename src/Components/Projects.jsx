import { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    title: ``,
    tech: ``,
    desc: ``,
    link: ``,
  });
  const [editing, setEditing] = useState(true);

  function handleChangeProject(type, value) {
    setProject({ ...project, [type]: value });
  }

  function handleEditing() {
    setEditing(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setEditing(false);
    setProjects((prevProjects) => [...prevProjects, project]);
    setProject({ title: ``, tech: ``, desc: ``, link: `` });
  }

  if (editing) {
    return (
      <>
        <div className="projects-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              placeholder="enter Title"
              value={project.title}
              onChange={(inp) => handleChangeProject(`title`, inp.target.value)}
            />
            <br />
            <label htmlFor="tech">Tech used: </label>
            <input
              type="text"
              id="tech"
              placeholder="enter tech used"
              value={project.tech}
              onChange={(inp) => handleChangeProject(`tech`, inp.target.value)}
            />
            <br />
            <label htmlFor="desc">Description: </label>
            <input
              type="text"
              id="desc"
              placeholder="enter description"
              value={project.desc}
              onChange={(inp) => handleChangeProject(`desc`, inp.target.value)}
            />
            <br />
            <label htmlFor="link">enter Github link: </label>
            <input
              type="url"
              id="link"
              placeholder="enter github link"
              value={project.link}
              onChange={(inp) => handleChangeProject(`link`, inp.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        {projects.map((project, index) => {
          return (
            <div key={project.title}>
              <h3>Project {index + 1}</h3>
              <p>Title: {project.title}</p>
              <p>Tech Used: {project.tech}</p>
              <p>Description: {project.desc}</p>
              <p>Github Link : {project.link}</p>
            </div>
          );
        })}
        <button onClick={handleEditing}>EDIT</button>
      </>
    );
  }
}

export default Projects;
