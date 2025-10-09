import ProjectCard from "./components/ProjectCard";
import { JEC_3210, LOW_8214 } from "./types/Location";

function Projects() {
  return (
    <>
      <h1 className="type-title text-neutral-700">Projects</h1>
      <p className="type-body text-neutral-700">
        Our club is structured into teams, each working on an ongoing project.
        Within each team, feel free to join a specific sub-team, such as
        mechanical, programming, electrical, or marketing!
      </p>
      <div className="block h-12"></div>
      <div className="grid gap-12">
        <ProjectCard
          name="Couch Bot"
          people={[{ name: "Tag Ciccone", email: "ciccot@rpi.edu" }]}
          times={[
            { day: "Wednesday", start: "4:00pm", end: "6:00pm" },
            { day: "Sunday", start: "12:00pm", end: "2:00pm" },
          ]}
          locations={[LOW_8214]}
        />
        <ProjectCard
          name="Paper Club"
          people={[{ name: "Kateri Ngo", email: "ngok2@rpi.edu" }]}
          description={[
            "Individually read through the paper",
            "Meetup to discuss the paper, ideas, knowledge gaps, and inspirations",
            "Increase our academic literacy because papers are intimidating",
            "Bring snacks!!",
          ]}
        />
        <ProjectCard
          name="Robotic Art Installation"
          people={[{ name: "Jayden Smith" }]}
          description={[
            "Four 3-DOF robot arms drawing on a spinning canvas",
            "A project with the synergy between art and mechatronics at its core",
            "Lots of opportunities to learn and experiment",
          ]}
          image="./rai.png"
        />
        <ProjectCard
          name="Combat Robotics"
          people={[{ name: "Cyle Rush", email: "rushc2@rpi.edu" }]}
          times={[{ day: "Friday", start: "4:30pm", end: "6:30pm" }]}
          locations={[JEC_3210]}
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
          people={[
            { name: "Jason Zhang", email: "zhangy96@rpi.edu" },
            { name: "Gavin Lesko", email: "gavinl@rpi.edu" },
          ]}
          times={[{ day: "Monday", start: "7:00pm" }]}
          locations={[LOW_8214]}
          description={[
            "Gesture Controlled Drone - Recognize hand gestures and translate them into flight commands",
            "Custom Hardware + Computer Vision Integration - Drone will be built from scratch powered by the OpenCV library",
          ]}
        />
        <ProjectCard
          name="IGVC"
          people={[{ name: "Zane Brotherton", email: "brothz@rpi.edu" }]}
          times={[{ day: "Sunday", start: "3:00pm" }]}
          locations={[LOW_8214]}
        />
        <ProjectCard
          name="Audio-Animatronic"
          people={[{ name: "Sydney Simmons", email: "simmos6@rpi.edu" }]}
          times={[{ day: "Sunday", start: "4:00pm", end: "5:00pm" }]}
          locations={[JEC_3210]}
          description={[
            "Build an animatronic with movements synchronized with sound, posing as a new avatar for robotics club!",
            "Uno R3, PCA9685, Micro Servos (9g), sound module",
            "Sub-teams: Concept design, mechanical, electrical, programming",
            "Any questions (or ideas!) PLEASE DM Sydney on Discord!",
          ]}
        />
      </div>
    </>
  );
}

export default Projects;
