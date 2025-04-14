import React from 'react';

export interface PropertyItem {
  name: string;
  description: string;
  type: string;
  default: string;
}

interface PropertyTableProps {
  title?: string;
  properties: PropertyItem[];
}

const PropertyTable: React.FC<PropertyTableProps> = ({ title, properties }) => {
  return (
    <div className="mb-8">
      {title && <h4 className="text-xl font-semibold mb-3 text-gray-200">{title}</h4>}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="p-3 border-b border-gray-700 font-semibold text-white">Property</th>
              <th className="p-3 border-b border-gray-700 font-semibold text-white">Description</th>
              <th className="p-3 border-b border-gray-700 font-semibold text-white">Type</th>
              <th className="p-3 border-b border-gray-700 font-semibold text-white">Default</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((prop, index) => (
              <tr 
                key={index} 
                className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}
              >
                <td className="p-3 border-b border-gray-700 font-mono text-blue-400">{prop.name}</td>
                <td className="p-3 border-b border-gray-700 text-gray-300">{prop.description}</td>
                <td className="p-3 border-b border-gray-700 font-mono text-green-400">{prop.type}</td>
                <td className="p-3 border-b border-gray-700 font-mono text-gray-400">{prop.default}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyTable; 