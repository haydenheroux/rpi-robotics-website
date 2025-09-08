export interface ProjectCardProps {
  name: string;
  teamLead: string;
  description?: string[];
}

function ProjectCard({ name, teamLead, description }: ProjectCardProps) {
  return (
    <div>
      <h2 className="type-subhead text-brand-white block mb-2">{name}</h2>
      <span className="type-caption text-brand-white block mb-4">
        Team Lead: {teamLead}
      </span>
      {description && (
        <ul className="list-disc">
          {description.map((text) => (
            <li className="type-body text-brand-white">{text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectCard;
