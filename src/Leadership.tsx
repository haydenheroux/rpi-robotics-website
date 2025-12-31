import PersonCard from "./components/PersonCard";
import { useContent } from "./contexts/ContentContext";

function Leadership() {
  const { content } = useContent();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {content.leadership.map((person) => (
        <PersonCard
          name={person.name}
          email={person.email}
          position={person.position}
          projects={person.projects}
        />
      ))}
    </div>
  );
}

export default Leadership;
