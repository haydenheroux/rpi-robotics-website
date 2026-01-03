import PersonCard from "./components/PersonCard";
import { useContent } from "./contexts/ContentContext";
import type Person from "./types/Person";

function LeadershipList({ people }: { people: Person[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {people.map((person) => (
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

function Leadership() {
  const { content } = useContent();

  const isTeamLead = (person: Person) => person.position === "Team Lead";
  const teamLeads = content.leadership.filter(isTeamLead);
  const eBoard = content.leadership.filter((p) => !isTeamLead(p));

  return (
    <div className="flex flex-col gap-12">
      <h1 className="type-title text-standard text-center">Executive Board</h1>
      <LeadershipList people={eBoard} />
      <h1 className="type-title text-standard text-center">Team Leads</h1>
      <LeadershipList people={teamLeads} />
    </div>
  );
}

export default Leadership;
