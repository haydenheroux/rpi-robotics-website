import { MdCalendarMonth, MdLocationCity, MdPerson } from "react-icons/md";
import type Person from "../types/Person";
import type { IconType } from "react-icons";
import type Location from "../types/Location";
import { locationHover, locationLink, locationText } from "../types/Location";
import type MeetingTime from "../types/MeetingTime";
import { meetingTimeHover, meetingTimeText } from "../types/MeetingTime";
import { personHover, personLink, personText } from "../types/Person";
import type Image from "../types/Image";

interface InfoRowProps<Type> {
  Icon: IconType;
  items: Type[];
  text: (item: Type) => string;
  hover: (item: Type) => string;
  link: (item: Type) => string;
}

function InfoRow<Type>({ Icon, items, text, hover, link }: InfoRowProps<Type>) {
  return items.map((item, index) => (
    <div key={index} className="flex flex-row gap-1 items-center">
      <Icon size={20} className="text-standard" />
      {link(item) && (
        <a
          className="type-large-bold link-dotted text-standard"
          title={hover(item)}
          href={link(item)}
        >
          {text(item)}
        </a>
      )}
      {!link(item) && (
        <span
          key={index}
          title={hover(item)}
          className="type-large-bold link-dotted text-standard"
        >
          {text(item)}
        </span>
      )}
    </div>
  ));
}

function ProjectImage({ image: { url, caption } }: { image: Image }) {
  return (
    <div className="flex flex-col gap-2">
      <img key={url} src={url} className="card" />
      {caption && <p className="text-center text-standard type-body">{caption}</p>}
    </div>
  );
}

// TODO Make carousel
function ProjectImages({ images }: { images: Image[] }) {
  return (
    <div className="mt-2 md:mt-6 flex flex-row gap-6">
      {images.map((image) => (
        <ProjectImage key={image.url} image={image} />
      ))}
    </div>
  );
}

export interface ProjectCardProps {
  name: string;
  people?: Person[];
  times?: MeetingTime[];
  locations?: Location[];
  paragraphs?: string[];
  bullets?: string[];
  images?: Image[];
}

function ProjectCard({
  name,
  people,
  times,
  locations,
  paragraphs,
  bullets,
  images,
}: ProjectCardProps) {
  return (
    <div className="bg-standard card p-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {(people || times || locations) && (
          <div className="mb-2">
            <h2 className="type-title text-standard mb-0.5">{name}</h2>
            {people && (
              <InfoRow
                Icon={MdPerson}
                items={people}
                text={personText}
                hover={personHover}
                link={personLink}
              />
            )}
            {times && (
              <InfoRow
                Icon={MdCalendarMonth}
                items={times}
                text={meetingTimeText}
                hover={meetingTimeHover}
                link={() => ""}
              />
            )}
            {locations && (
              <InfoRow
                Icon={MdLocationCity}
                items={locations}
                text={locationText}
                hover={locationHover}
                link={locationLink}
              />
            )}
          </div>
        )}
        {paragraphs && (
          <div>
            {paragraphs.map((text, index) => (
              <p key={index} className="mb-1 type-body text-standard">
                {text}
              </p>
            ))}
          </div>
        )}
        {bullets && (
          <ul className="block list-disc list-inside">
            {bullets.map((text, index) => (
              <li key={index} className="type-body text-standard">
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>
      {images && <ProjectImages images={images} />}
    </div>
  );
}

export default ProjectCard;
