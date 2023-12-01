import GithubLogo from "./github-logo";

export default function Header() {
  return <div className="nexus-header flex flex-row h-14 w-full align-middle items-center justify-between md:h-20 ">
    <div className="pl-4 md:pl-14"><h1 className="">Code Nexus</h1></div>
    <div className="pr-4 md:pr-14"><GithubLogo></GithubLogo></div>
  </div>
}