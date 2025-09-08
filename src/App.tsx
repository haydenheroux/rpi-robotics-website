import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="w-screen lg:w-6xl mx-auto px-6 flex flex-col gap-4">
      <Nav />
      <hr className="text-neutral-900 w-screen lg:w-2xl mx-auto" />
      {/* TODO Move this content to projects page */}
      <h1 className="type-headline text-brand-red">Projects</h1>
      <p className="type-subhead text-brand-white">
        Our club is structured into teams, each working on an ongoing project.
        Within each team, feel free to join a specific sub-team, such as
        mechanical, programming, electrical, or marketing!
      </p>
      <div className="block h-8"></div>
      <div className="flex flex-col gap-12">
        <ProjectCard name="Couch Bot" teamLead="Tag Ciccone" />
        <ProjectCard
          name="Paper Club"
          teamLead="Kateri Ngo"
          description={[
            "Individually read through the paper",
            "Meetup to discuss the paper, ideas, knowledge gaps, and inspirations",
            "Increase our academic literacy because papers are intimidating",
            "Bring snacks!!",
          ]}
        />
        <ProjectCard
          name="Robotic Art Installation"
          teamLead="Jayden Smith"
          description={[
            "Four 3-DOF robot arms drawing on a spinning canvas",
            "A project with the synergy between art and mechatronics at its core",
            "Lots of opportunities to learn and experiment",
          ]}
        />
        <ProjectCard
          name="Combat Robotics"
          teamLead="Cyle Rush"
          description={[
            "Fall Semester - Create 8 teams",
            "Fall Semester - Each team builds a 1 pound robot in 3 months",
            "Fall Semester - Robot killing tournament",
            "Spring Semester - Create 1 or 2 teams",
            "Spring Semester - Each team builds a 3 pound robot",
            "Spring Semester - Compete in NHRL competition",
          ]}
        />
        <ProjectCard
          name="Drone Project"
          teamLead="Jason Zhang & Gavin Lesko"
          description={[
            "Gesture Controlled Drone - Recognize hand gestures and translate them into flight commands",
            "Custom Hardware + Computer Vision Integration - Drone will be built from scratch powered by the OpenCV library",
          ]}
        />
        <ProjectCard name="IGVC" teamLead="Zane Brotherton" />
        <ProjectCard
          name="Audio-Animatronic"
          teamLead="Sydney Simmons"
          description={[
            "Build an animatronic with movements synchronized with sound, posing as a new avatar for robotics club!",
            "Uno R3, PCA9685, Micro Servos (9g), sound module",
            "Sub-teams: Concept design, mechanical, electrical, programming",
            "Any questions (or ideas!) PLEASE DM Sydney on Discord!",
          ]}
        />
      </div>
      <div className="block h-16"></div>
    </div>
  );
}

export default App;
