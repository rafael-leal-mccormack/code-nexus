import { nexusLogo } from "../components/logo";
import OutlinedCard from "../components/outlined-card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Code Nexus
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
            A framework-agnostic code editor library that brings real-time coding and seamless 
            code snippet management to your applications.
          </p>
        </div>
        <div className="relative flex-1 flex justify-center items-center">
          <div className="absolute w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute w-48 h-48 bg-purple-600 rounded-full opacity-20 blur-3xl transform translate-x-12 -translate-y-12"></div>
          {nexusLogo("280", "280", true)}
        </div>
      </div>

      {/* Features Section */}
      <div className="my-16 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Code Nexus?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Preview</h3>
            <p className="text-gray-300">See your code changes instantly with a built-in preview that updates in real-time.</p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Framework Agnostic</h3>
            <p className="text-gray-300">Use with any JavaScript framework or as a standalone web component.</p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-pink-600 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Highly Customizable</h3>
            <p className="text-gray-300">Customize the editor appearance, behavior, and functionality to match your needs.</p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="my-16 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Resources</h2>
        <div className="flex flex-wrap gap-6 justify-center">
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
      
      {/* CTA Section */}
      <div className="my-16 px-4 md:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 p-8 md:p-12 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to enhance your web applications?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Start integrating Code Nexus into your projects today and provide your users with a powerful coding experience.</p>
          <Link href="/getting-started" className="px-8 py-3 bg-white text-blue-800 font-medium rounded-md hover:bg-gray-100 transition">
            Get Started Now
          </Link>
        </div>
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
const componentsText = `Detailed docs on <code-nexus>, <nexus-panel>, and <nexus-snippet>. Learn how to use each component effectively.`;
const releaseNotes = `v0.0.3 - Formatting, Bundle Size, Theming Docs. Key changes: Added code formatting (optional Prettier). Reduced package size via optimized builds. Added /theming docs page. Modernized UI styles. Updated READMEs and package links.`;
const contributingText = `Help shape Code Nexus! Find contribution guidelines, report issues, or suggest improvements on GitHub.`;
