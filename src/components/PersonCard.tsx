import { MdEmail, MdPerson } from "react-icons/md";
import Card from "./Card";
import { FaDiscord } from "react-icons/fa6";
import type Person from "../types/Person";
import { useState } from "react";
import BottomToast from "./BottomToast";

function PersonCard({ name, email, discord, position, projects }: Person) {
  const [showCopied, setShowCopied] = useState<boolean>(false);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setShowCopied(true);
  };

  return (
    <>
      <Card>
        <div className="flex flex-col gap-4">
          <div className="w-48 h-48 flex items-center justify-center rounded-2xl mx-auto drop-shadow-sm/25 drop-shadow-neutral-500">
            <MdPerson size={192} className="text-neutral-700" />
          </div>
          <div className="mx-auto text-center">
            <h2 className="type-title text-neutral-700 mb-1">{name}</h2>
            {position && (
              <p className="type-large text-neutral-700">
                <span className="type-large-bold">Position:</span> {position}
              </p>
            )}
            {projects && (
              <p className="type-large text-neutral-700">
                <span className="type-large-bold">
                  {projects.length > 1 ? "Projects" : "Project"}:
                </span>{" "}
                {projects.join(", ")}
              </p>
            )}
          </div>
          <div className="mx-auto flex gap-1">
            {email && (
              <a
                className="link-hover p-0.5 text-neutral-700"
                href={`mailto:${email}`}
                title={`mailto:${email}`}
              >
                <MdEmail size={24} />
              </a>
            )}
            {discord && (
              <a
                className="link-hover p-0.5 text-neutral-700"
                title={discord}
                onClick={() => copy(discord)}
              >
                <FaDiscord size={24} />
              </a>
            )}
          </div>
        </div>
      </Card>
      <BottomToast
        message="Copied!"
        show={showCopied}
        onClose={() => setShowCopied(false)}
      />
    </>
  );
}

export default PersonCard;
