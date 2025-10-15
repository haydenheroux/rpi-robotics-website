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
    <div className="flex flex-row gap-1 items-center">
      <Icon size={16} className="text-neutral-700" />
      {link(item) && (
        <a
          className="type-large-bold link-dotted text-neutral-700"
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
          className="type-large-bold link-dotted text-neutral-700"
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
      {caption && <p className="text-center text-neutral-700 type-body">{caption}</p>}
    </div>
  );
}

function ProjectImages({ images }: { images: Image[] }) {
  const shownImages = images.slice(0, 3);

  if (shownImages.length == 1) {
    return <ProjectImage image={shownImages[0]} />;
  }

  if (shownImages.length == 2) {
    return (
      <div className="flex flex-col gap-6">
        <ProjectImage image={shownImages[0]} />
        <ProjectImage image={shownImages[1]} />
      </div>
    );
  }

  if (shownImages.length == 3) {
    return (
      <div className="flex flex-col gap-4">
        <ProjectImage image={shownImages[0]} />
        <div className="grid lg:grid-cols-2 gap-4">
          <ProjectImage image={shownImages[1]} />
          <ProjectImage image={shownImages[2]} />
        </div>
      </div>
    );
  }

  return <></>;
}

export interface ProjectCardProps {
  name: string;
  people?: Person[];
  times?: MeetingTime[];
  locations?: Location[];
  paragraphs?: string[];
  bullets?: string[];
  images?: Image[];
  right?: boolean;
}

function ProjectCard({
  name,
  people,
  times,
  locations,
  paragraphs,
  bullets,
  images,
  right = false,
}: ProjectCardProps) {
  return (
    <div className={`grid ${images ? "grid-cols-2" : "grid-cols-1"} gap-8`}>
      {!right && images && <ProjectImages images={images} />}
      <div>
        <h2 className="type-title text-neutral-700 mb-0.5">{name}</h2>
        {(people || times || locations) && (
          <div className="mb-2">
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
              <p key={index} className="mb-1 type-body text-neutral-700">
                {text}
              </p>
            ))}
          </div>
        )}
        {bullets && (
          <ul className="block list-disc list-inside">
            {bullets.map((text, index) => (
              <li key={index} className="type-body text-neutral-700">
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>
      {right && images && <ProjectImages images={images} />}
    </div>
  );
}

export default ProjectCard;
