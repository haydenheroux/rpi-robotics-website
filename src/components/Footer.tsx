import { FaGithubAlt } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full my-16 flex justify-center">
      <span className="flex items-center type-body text-standard">
        <p className="mr-1">
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
