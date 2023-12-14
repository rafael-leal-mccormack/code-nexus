import GithubLogo from "./github-logo";
import { nexusLogo } from "./logo";
import { Link } from "@chakra-ui/next-js";

export default function Header() {
  return (
    <div className="nexus-header flex flex-row h-14 w-full align-middle items-center justify-between px-3 md:px-6 md:h-20 ">
      <div className="flex flex-row items-center">
        {nexusLogo("40", "40")}
        <h1 className="mx-4 hidden md:block">codeNexus</h1>
      </div>
      <div className="flex flex-row items-center">
        <Link className="p-3 mx-1" href="www.google.com">
          API
        </Link>
        <Link className="p-3 mx-1" href="www.google.com">
          Examples
        </Link>
        <GithubLogo></GithubLogo>
      </div>
    </div>
  );
}
