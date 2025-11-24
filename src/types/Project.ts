import type MeetingTime from "./MeetingTime";
import type Person from "./Person";
import type Location from "./Location";
import type Image from "./Image";

export default interface Project {
  name: string;
  people?: Person[];
  times?: MeetingTime[];
  locations?: Location[];
  paragraphs?: string[];
  bullets?: string[];
  images?: Image[];
}
