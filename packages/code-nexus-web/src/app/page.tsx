import { nexusLogo } from "../components/logo";
import OutlinedCard from "../components/outlined-card";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6 center items-center p-14">
        {nexusLogo("100", "100", true)}
        <h2 className="center text-center">
          Empower your applications with codeNexus, a framework-agnostic code
          editor library that brings real-time collaboration and seamless code
          snippet management to your fingertips.
        </h2>
      </div>
      <div className="flex flex-wrap m-auto gap-6 justify-evenly">
        <OutlinedCard heading="Quick Start">{quickStartText}</OutlinedCard>
        <OutlinedCard heading="Features">{featuresText}</OutlinedCard>
        <OutlinedCard href="/components" heading="Components">{componentsText}</OutlinedCard>
        <OutlinedCard heading="Release Notes">{releaseNotes}</OutlinedCard>
        <OutlinedCard
          href="https://github.com/rafael-leal-mccormack/code-nexus"
          heading="Contributing"
        >
          {contributingText}
        </OutlinedCard>
      </div>
    </div>
  );
}

const quickStartText = `Jump into coding with Nexus in minutes! Our Quick Start guide provides
step-by-step instructions to get you up and running with the
framework-agnostic code editor, ensuring you can start building
amazing applications in no time.`;
const featuresText = `Explore the powerful capabilities that Nexus brings to your
development toolkit. From real-time collaboration to seamless code
snippet management, discover the features that make Nexus the go-to
choice for embedding a dynamic code editor in any application.`;
const componentsText = `Dive into the heart of Nexus with detailed documentation on its core
components—the nexus code editor and the nexus-panel for efficient
code snippet handling. `;
const releaseNotes = `v0.0.1 - Beta`;
const contributingText = ` Join the Nexus community! Contribute to the growth of this open-source
project by exploring our contribution guidelines. Whether it's
reporting issues, suggesting improvements, or submitting code, your
contributions are invaluable in shaping the future of Nexus.`;
