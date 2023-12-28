import { readFileSync } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function GettingStarted() {
  const markdown = readFileSync(
    process.cwd() + "/public/assets/roboto-instructions.md",
    "utf8"
  );
  return (
    <div className="w-full h-full">
      <div className="prose prose-invert">
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={markdown} />
      </div>
      {/* <CodeNexus className="h-full"></CodeNexus> */}
    </div>
  );
}
