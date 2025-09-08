export interface ProjectCardProps {
  name: string;
  teamLead: string;
  description?: string[];
}

function ProjectCard({ name, teamLead, description }: ProjectCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <span className="block mb-4">Team Lead: {teamLead}</span>
      {description && (
        <ul className="list-disc">
          {description.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectCard;
