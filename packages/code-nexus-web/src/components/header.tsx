import Link from "next/link";
import GithubLogo from "./github-logo";
import { nexusLogo } from "./logo";

export default function Header() {
  return (
    <div className="nexus-header flex flex-row h-14 w-full align-middle items-center justify-between px-3 md:px-6 md:h-20 flex-shrink-0">
      <div className="flex flex-row items-center">
        <Link href={'/'}>
          {nexusLogo("40", "40")}
        </Link>
        <h3 className="mx-4 hidden md:block">codeNexus</h3>
      </div>
      <div className="flex flex-row items-center">
        <Link className="p-3 mx-1" href="/getting-started">
          Installation
        </Link>
        <Link className="p-3 mx-1" href="/components">
          Components
        </Link>
        <Link target="_blank" className="p-2 github-link" href={"https://github.com/rafael-leal-mccormack/code-nexus"}>
          <GithubLogo></GithubLogo>
        </Link>
      </div>
    </div>
  );
}
