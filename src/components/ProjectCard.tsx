export interface ProjectCardProps {
  name: string;
  teamLead: string;
  description?: string[];
  image?: string;
}

function ProjectCard({ name, teamLead, description, image }: ProjectCardProps) {
  return (
    <div className="p-4 rounded-2xl bg-neutral-50 drop-shadow-sm/25 drop-shadow-neutral-500">
      <h2 className="type-large-bold text-neutral-700">{name}</h2>
      <span className="block mb-4 type-body text-neutral-700">Team Lead: {teamLead}</span>
      {description && (
        <ul className="block list-disc list-inside">
          {description.map((text) => (
            <li className="type-body text-neutral-700">{text}</li>
          ))}
        </ul>
      )}
      {image && (
        <img src={image} alt={`${name} project image`} className="mt-4 rounded-2xl drop-shadow-sm/25 drop-shadow-neutral-500" />
      )}
    </div>
  );
}

export default ProjectCard;
