import PersonCard from "./components/PersonCard";

function Leadership() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <PersonCard
        name="Jason Zhang"
        position="President"
        projects={["Drone Project"]}
      />
      <PersonCard
        name="Sydney Simmons"
        position="Vice President"
        projects={["Audio-Animatronic"]}
      />
      <PersonCard
        name="Zane Brotherton"
        position="Treasurer"
        projects={["IGVC"]}
      />
      <PersonCard
        name="Kateri Ngo"
        position="Secretary"
        projects={["Paper Club"]}
      />
      <PersonCard
        name="Gavin Lesko"
        position="Outreach Coordinator"
        projects={["Drone Project"]}
      />
      <PersonCard name="Hana Mali" position="Social Media Manager" />
      <PersonCard name="Zach Nobles" position="Safety Officer" />
      <PersonCard name="Aidan Zitron" position="General Representative" />
      <PersonCard name="Hayden Heroux" position="General Representative" />
      <PersonCard name="Jerry Norton" position="General Representative" />
      <PersonCard
        name="Cyle Rush"
        position="Team Lead"
        projects={["Combat Robotics"]}
      />
      <PersonCard
        name="Jayden Smith"
        position="Team Lead"
        projects={["Robotic Art Installation"]}
      />
      <PersonCard
        name="Tag Ciccone"
        position="Team Lead"
        projects={["Couch Bot"]}
      />
    </div>
  );
}

export default Leadership;
