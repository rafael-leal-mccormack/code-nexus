import { readFileSync } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function GettingStarted() {
  const markdown = readFileSync(
    process.cwd() + "/public/assets/roboto-instructions.md",
    "utf8"
  );
  return (
    <div className="w-full h-full">
      hello
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={markdown} />
      {/* <CodeNexus className="h-full"></CodeNexus> */}
    </div>
  );
}
