import { MdEmail, MdPerson } from "react-icons/md";
import Card from "./Card";
import { FaDiscord } from "react-icons/fa6";

interface PersonCardProps {
  name: string;
  email?: string;
  discord?: string;
  position?: string;
  projects?: string[];
}

function PersonCard({
  name,
  email,
  discord,
  position,
  projects,
}: PersonCardProps) {
  const hasSocials = email || discord;

  return (
    <Card>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col items-center justify-center">
          <div className="min-w-16 min-h-16 flex items-center justify-center">
            <MdPerson
              size={hasSocials ? 48 : 64}
              className="text-neutral-700"
            />
          </div>
          <div className="flex flex-row justify-center gap-1.5">
            {email && <MdEmail size={16} className="text-neutral-700" />}
            {discord && <FaDiscord size={16} className="text-neutral-700" />}
          </div>
        </div>
        <div>
          <h2 className="type-title text-neutral-700 mb-1">{name}</h2>
          {position && (
            <p className="type-large text-neutral-700">
              <span className="type-large-bold">Position:</span> {position}
            </p>
          )}
          {projects && (
            <p className="type-large text-neutral-700">
              <span className="type-large-bold">{projects.length > 1 ? "Projects" : "Project"}:</span>{" "}
              {projects.join(", ")}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

export default PersonCard;
