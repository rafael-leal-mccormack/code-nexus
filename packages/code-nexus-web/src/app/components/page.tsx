import Link from "next/link";

export default function Components() {
  const components = [
    {
      name: "code-nexus",
      description: "The main component that provides a full-featured code editor with live preview.",
      link: "/components/code-nexus",
      tags: ["Editor", "Live Preview"]
    },
    {
      name: "nexus-panel",
      description: "A lightweight code editor panel for displaying or editing a single type of code.",
      link: "/components/nexus-panel",
      tags: ["Editor", "Single File"]
    },
    {
      name: "nexus-snippet",
      description: "A compact component for displaying inline code snippets with syntax highlighting.",
      link: "/components/nexus-snippet",
      tags: ["Inline", "Code Display"]
    },
    {
      name: "theming",
      description: "Learn how to customize the appearance of Code Nexus components with themes and styling options.",
      link: "/theming",
      tags: ["Customization", "Styling"]
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto pb-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Code Nexus Components
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore the core components of Code Nexus and learn how to use them in your projects.
        </p>
      </div>

      {/* Component Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {components.map((component, index) => (
          <Link 
            href={component.link} 
            key={index}
            className="block bg-gray-800 bg-opacity-50 rounded-lg p-6 hover:bg-gray-700 transition duration-200"
          >
            <h2 className="text-2xl font-bold mb-2 text-white">{component.name}</h2>
            <p className="text-gray-300 mb-4">{component.description}</p>
            <div className="flex gap-2">
              {component.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="bg-blue-900 bg-opacity-50 text-blue-200 text-xs py-1 px-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
