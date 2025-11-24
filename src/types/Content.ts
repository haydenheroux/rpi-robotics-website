import type Image from "./Image";
import type Person from "./Person";
import type Project from "./Project";

export default interface Content {
  discord: string;
  calendar: string;
  projects: Project[];
  leadership: Person[];
  posters: Image[];
};


