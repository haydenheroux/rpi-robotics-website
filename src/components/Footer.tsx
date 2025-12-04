import { FaGithubAlt } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full my-16 flex justify-center">
      <span className="px-4 py-2 flex items-center type-body text-standard bg-standard rounded-2xl">
        <p className="mr-1.5">
          Created by{" "}
          <a className="link-dotted" href="https://www.github.com/haydenheroux">
            Hayden Heroux
          </a>
        </p>
        <FaGithubAlt size={16} />
      </span>
    </div>
  );
}

export default Footer;
