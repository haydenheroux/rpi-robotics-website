import ProjectCard from "./components/ProjectCard";
import { useContent } from "./contexts/ContentContext";

function Projects() {
  const { content } = useContent();

  return (
    <>
      <h1 className="type-title text-standard">Projects</h1>
      <p className="type-body text-standard">
        Our club is structured into teams, each working on an ongoing project.
        Within each team, feel free to join a specific sub-team, such as
        mechanical, programming, electrical, or marketing!
      </p>
      <div className="block h-12"></div>
      <div className="grid gap-12">
        {content.projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            people={project.people}
            times={project.times}
            locations={project.locations}
            paragraphs={project.paragraphs}
            bullets={project.bullets}
            images={project.images}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
