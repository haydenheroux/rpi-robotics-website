import type Content from "./types/Content";
import { LOW_8214, JEC_3210 } from "./types/Location";

export const defaultContent: Content = {
  discord: "https://discord.gg/DPWMz5BqZP",
  calendar:
    "https://calendar.google.com/calendar/embed?src=rpiroboticsclub%40gmail.com&ctz=America%2FNew_York",
  projects: [
    {
      name: "Couch Bot",
      people: [
        {
          name: "Tag Ciccone",
        },
      ],
      times: [
        {
          day: "Wednesday",
          start: "4:00pm",
          end: "6:00pm",
        },
        {
          day: "Sunday",
          start: "12:00pm",
          end: "2:00pm",
        },
      ],
      locations: [LOW_8214],
      paragraphs: [
        "In 2024, Marty saw RIT's couch bot. He asked to club to create one for RPI.",
      ],
      bullets: [
        "Programming: Using a Raspberry Pi 5 to translate human input into drivetrain commands",
        "Mechanical: Creating a tank drivetrain and frame to support the couch while carrying people and at speed",
        "Electrical: Wiring the couch bot - Motors, motor controllers, Raspberry Pi, battery",
      ],
    },
    {
      name: "Paper Club",
      people: [
        {
          name: "Kateri Ngo",
        },
      ],
      bullets: [
        "Individually read through the paper for the week",
        "Meetup to discuss the paper, ideas, knowledge gaps, and inspirations",
        "Increase our academic literacy in group setting",
      ],
    },
    {
      name: "Robotic Art Installation",
      people: [
        {
          name: "Jayden Smith",
          email: "smithj@rpi.edu",
        },
      ],
      paragraphs: [
        "This project is focused on the creation of an automatic drawing robot that has four arms drawing simultaneously on a spinning canvas at the center of the robot.",
        "The art installation is meant to embody the synergy between robotics and art by elegantly crafting a drafted image while also being mechanically dense",
        "This project is for those with a desire to apply the subjects they've learned in class to a multi-layered system.",
      ],
      bullets: [
        "Four 3-DOF robot arms drawing on a spinning canvas",
        "A project with the synergy between art and mechatronics at its core",
        "Lots of opportunities to learn and experiment",
      ],
      images: [{ url: "rai.png" }],
    },
    {
      name: "Combat Robotics",
      people: [{ name: "Cyle Rush" }],
      times: [{ day: "Friday", start: "4:30pm", end: "6:30pm" }],
      locations: [JEC_3210],
      bullets: [
        "Eight student sub-teams design and build a one-pound combat robot",
        "Host end-of-semester tournament where teams compete with their robot",
      ],
    },
    {
      name: "Drone Project",
      people: [{ name: "Titan Spellos" }],
      times: [{ day: "Monday", start: "7:00pm" }],
      locations: [LOW_8214],
      paragraphs: [
        "Teams of 10+ students developing a gesture-controlled drone.",
      ],
      bullets: [
        "Electrical/Mechanical: Wiring, soldering, drone frame assembly, attachment and sensor CAD",
        "Gazebo Simulation: Interface, drone model creation, sensor integration, and flight simulation",
        "ArduPilot: Software features, hardware requirements, firmware flashing, setup, and system integration",
        "Computer Vision: Libraries (OpenCV), real-time human pose estimation, robotic control, and model training",
      ],
    },
    {
      name: "IGVC",
      people: [{ name: "Zane Brotherton" }],
      times: [{ day: "Sunday", start: "3:00pm" }],
      locations: [LOW_8214],
      paragraphs: [
        "We are competing in the Auto-Nav portion of the Intelligent Ground Vehicle Competition. We must create a fully autonomous ground vehicle that navigates around an outdoor obstacle course in under six minutes.",
        "Our team is focused on employing industry standard tools and development processes to the competition. IGVC entries are generally considered to be the same difficulty and level of involvement as a senior design course.",
        "Previously, RPI competed in the Intelligent Ground Vehicle Competition in 2019, where we won third place and rookie of the year.",
        "The IGVC team also hosts workshops to improve the student body's skills in robotics. Planned workshops include introductions to Git, Onshape, ROS2, and control theory applications in robotics.",
      ],
    },
    {
      name: "Audio-Animatronic",
      people: [{ name: "Sydney Simmons", email: "simmos6@rpi.edu" }],
      times: [{ day: "Sunday", start: "4:00pm", end: "6:00pm" }],
      locations: [JEC_3210],
      paragraphs: [
        "The audio-animatronic project's goal is to complete a functioning audio-animatronic figure while allowing its members to have a judge-free environment to learn introductory robotics technology. To create an animatronic, it requires the sub-teams of concept design, mechanical, electrical, and programming. The concept design team is in charge of creating multiple concept sketches of the design, color scheme, and persona the animatronic will portray. The mechanical team's job is to design links and mechanisms to integrate motors into an assembly emulating the animatronics' motion. The electrical team creates a functioning circuit integrating each electrical component required for this project (SG90 motors, UNO R3, PCA9685 board, sound module, etc.). Lastly, the programming team decides on a method to program the motors to be synched with the audio-animatronics' audio, making our figure's motion lifelike.",
      ],
      images: [
        { url: "aa_concept_1.png", caption: "By Jasmin Chen" },
        { url: "aa_concept_2.jpg", caption: "By Aarushi Kumar" },
      ],
    },
  ],
  leadership: [
    { name: "Zane Brotherton", position: "President", projects: ["IGVC"] },
    {
      name: "Sydney Simmons",
      email: "simmos6@rpi.edu",
      position: "Vice President of Operations",
      projects: ["Audio-Animatronic"],
    },
    {
      name: "Vincenzo Rapacciuolo",
      position: "Vice President of Finance",
      projects: ["IGVC"],
    },
    {
      name: "Jerry Norton",
      position: "Vice President of Outreach",
      projects: ["IGVC"],
    },
    {
      name: "Ainsley Cunningham",
      position: "Secretary",
      projects: ["Audio-Animatronic"],
    },
    { name: "Aidan Zitron", position: "Safety Officer" },
    { name: "Bonden Tucker", position: "Procurement Officer" },
    { name: "Tag Ciccone", position: "Facilities Manager" },
    { name: "Sara Lawrence", position: "Marketing Lead" },
    { name: "Aarushi Kumar", position: "Partnership Coordinator" },
    { name: "Tag Ciccone", position: "Team Lead", projects: ["Couch Bot"] },
    {
      name: "Kateri Ngo",
      position: "Team Lead",
      projects: ["Paper Club"],
    },
    {
      name: "Andeas Spiratos",
      position: "Team Lead",
      projects: ["Combat Robotics"],
    },
    {
      name: "Sydney Simmons",
      position: "Team Lead",
      projects: ["Audio-Animatronic"],
    },
    { name: "Zane Brotherton", position: "Team Lead", projects: ["IGVC"] },
    {
      name: "Jayden Smith",
      position: "Team Lead",
      projects: ["Robotic Art Installation"],
    },
    {
      name: "Titan Spellos",
      position: "Team Lead",
      projects: ["Drone Project"],
    },
  ],
  posters: [
    { url: "poster_igvc.png" },
    { url: "poster_gbm.png" },
    { url: "poster_paper_club.png" },
    { url: "poster_sept_gbm.png" },
    { url: "poster_sept_gbm_2.png" },
  ],
};

export default defaultContent;
