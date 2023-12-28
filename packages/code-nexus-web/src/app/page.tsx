import { nexusLogo } from "../components/logo";
import OutlinedCard from "../components/outlined-card";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6 center items-center p-14">
        {nexusLogo("100", "100", true)}
        <h2 className="center text-center">
        Empower your applications with codeNexus, a framework-agnostic code editor library that brings real-time collaboration and seamless code snippet management to your fingertips.
        </h2>
      </div>
      <div className="flex flex-wrap m-auto gap-6 justify-evenly">
        <OutlinedCard heading="Quick Start">hello</OutlinedCard>
        <OutlinedCard heading="Features">hello</OutlinedCard>
        <OutlinedCard heading="Components">hello</OutlinedCard>
        <OutlinedCard heading="Getting Help">hello</OutlinedCard>
        <OutlinedCard heading="Release Notes">hello</OutlinedCard>
        <OutlinedCard heading="Contributing">hello</OutlinedCard>
      </div>
    </div>
  );
}
