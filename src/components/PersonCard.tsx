import { MdEmail, MdPerson } from "react-icons/md";
import Card from "./Card";
import { FaDiscord } from "react-icons/fa6";
import type Person from "../types/Person";
import { useState } from "react";
import BottomToast from "./BottomToast";

function PersonCard({ name, email, discord, position, projects }: Person) {
  const [showCopied, setShowCopied] = useState<boolean>(false);

  const hasSocials = email || discord;

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setShowCopied(true);
  };

  return (
    <>
      <Card>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="min-w-16 min-h-16 flex items-center justify-center">
              <MdPerson
                size={hasSocials ? 48 : 64}
                className="text-neutral-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-1">
              {email && (
                <a
                  className="link-hover p-0.5 text-neutral-700"
                  href={`mailto:${email}`}
                  title={`mailto:${email}`}
                >
                  <MdEmail size={16} />
                </a>
              )}
              {discord && (
                <a
                  className="link-hover p-0.5 text-neutral-700"
                  title={discord}
                  onClick={() => copy(discord)}
                >
                  <FaDiscord size={16} />
                </a>
              )}
            </div>
          </div>
          <div>
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
