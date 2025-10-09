import { MdCalendarMonth, MdLocationCity, MdPerson } from "react-icons/md";
import type Person from "../types/Person";
import type { IconType } from "react-icons";
import type Location from "../types/Location";
import { locationHover, locationText } from "../types/Location";
import type MeetingTime from "../types/MeetingTime";
import { meetingTimeHover, meetingTimeText } from "../types/MeetingTime";
import { personHover, personText } from "../types/Person";
import Card from "./Card";

interface InfoRowProps<Type> {
  Icon: IconType;
  items: Type[];
  text: (item: Type) => string;
  hover: (item: Type) => string;
}

function InfoRow<Type>({ Icon, items, text, hover }: InfoRowProps<Type>) {
  return items.map((item, index) => (
    <div className="flex flex-row gap-1 items-center">
      <Icon size={16} className="text-neutral-700" />
      <span
        key={index}
        title={hover(item)}
        className="type-body text-neutral-700 link-dotted"
      >
        {text(item)}
      </span>
    </div>
  ));
}

export interface ProjectCardProps {
  name: string;
  people?: Person[];
  times?: MeetingTime[];
  locations?: Location[];
  description?: string[];
  image?: string;
}

function ProjectCard({
  name,
  people,
  times,
  locations,
  description,
  image,
}: ProjectCardProps) {
  return (
    <Card>
      <h2 className="type-large-bold text-neutral-700 mb-0.5">{name}</h2>
      {(people || times || locations) && (
        <div className="mb-2">
          {people && (
            <InfoRow
              Icon={MdPerson}
              items={people}
              text={personText}
              hover={personHover}
            />
          )}
          {times && (
            <InfoRow
              Icon={MdCalendarMonth}
              items={times}
              text={meetingTimeText}
              hover={meetingTimeHover}
            />
          )}
          {locations && (
            <InfoRow
              Icon={MdLocationCity}
              items={locations}
              text={locationText}
              hover={locationHover}
            />
          )}
        </div>
      )}
      {description && (
        <ul className="block list-disc list-inside">
          {description.map((text, index) => (
            <li key={index} className="type-body text-neutral-700">
              {text}
            </li>
          ))}
        </ul>
      )}
      {image && (
        <img
          src={image}
          alt={`${name} project image`}
          className="mt-4 rounded-2xl drop-shadow-sm/25 drop-shadow-neutral-500"
        />
      )}
    </Card>
  );
}

export default ProjectCard;
