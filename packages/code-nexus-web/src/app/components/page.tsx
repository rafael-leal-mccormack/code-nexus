import { readFileSync } from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import NexusExample from "../../components/nexus-example";
import { documentPropertTableRegex, documentPropertTableRegexNoDependencies } from "../../util/utils";

export default function Api() {
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  };
  const nexusMarkdown = readFileSync(
    process.cwd() + "/public/assets/docs/code-nexus/readme.md",
    "utf8"
  );

  const panelMarkdown = readFileSync(
    process.cwd() + "/public/assets/docs/nexus-panel/readme.md",
    "utf8"
  );

  return (
    <div className="w-full">
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        options={options}
        source={
          nexusMarkdown
            .replace("<!-- Auto Generated Below -->", "")
            .match(documentPropertTableRegex)![1]
        }
      ></MDXRemote>
      <NexusExample></NexusExample>
      {/* @ts-expect-error Server Component */}

      <MDXRemote
        options={options}
        source={
          panelMarkdown
            .replace("<!-- Auto Generated Below -->", "")
            .match(documentPropertTableRegexNoDependencies)![1]
        }
      ></MDXRemote>
    </div>
  );
}
