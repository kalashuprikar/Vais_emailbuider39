import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SectionTemplate {
  id: string;
  name: string;
  description: string;
  preview: React.ReactNode;
}

interface SectionsPanelProps {
  onSelectTemplate: (templateId: string) => void;
  onBack: () => void;
}

const sectionTemplates: SectionTemplate[] = [
  {
    id: "template-1",
    name: "Meet Framer",
    description: "Internet controls",
    preview: (
      <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg p-6 h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-semibold text-gray-700">Meet Framer</div>
          <div className="text-xs text-gray-500 mt-1">Internet controls</div>
        </div>
      </div>
    ),
  },
  {
    id: "template-2",
    name: "Canvas",
    description: "Design playground",
    preview: (
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-semibold text-blue-700">Canvas</div>
          <div className="text-xs text-blue-500 mt-1">Design playground</div>
        </div>
      </div>
    ),
  },
  {
    id: "template-3",
    name: "Publish",
    description: "Share your work",
    preview: (
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-semibold text-purple-700">Publish</div>
          <div className="text-xs text-purple-500 mt-1">Share your work</div>
        </div>
      </div>
    ),
  },
  {
    id: "template-4",
    name: "Design",
    description: "Create layouts",
    preview: (
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-semibold text-green-700">Design</div>
          <div className="text-xs text-green-500 mt-1">Create layouts</div>
        </div>
      </div>
    ),
  },
  {
    id: "template-5",
    name: "Write",
    description: "Content editor",
    preview: (
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-semibold text-amber-700">Write</div>
          <div className="text-xs text-amber-500 mt-1">Content editor</div>
        </div>
      </div>
    ),
  },
  {
    id: "template-6",
    name: "Infinite carousel",
    description: "Scrolling content",
    preview: (
      <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-semibold text-pink-700">Infinite carousel</div>
          <div className="text-xs text-pink-500 mt-1">Scrolling content</div>
        </div>
      </div>
    ),
  },
  {
    id: "template-7",
    name: "Become fast",
    description: "Performance boost",
    preview: (
      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-6 h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-semibold text-cyan-700">Become fast</div>
          <div className="text-xs text-cyan-500 mt-1">Performance boost</div>
        </div>
      </div>
    ),
  },
  {
    id: "template-8",
    name: "Logo",
    description: "Brand identity",
    preview: (
      <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg p-6 h-40 flex items-center justify-center">
        <div className="text-4xl font-bold text-gray-400">L</div>
      </div>
    ),
  },
  {
    id: "template-9",
    name: "Publish",
    description: "Deploy solutions",
    preview: (
      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-semibold text-indigo-700">Publish</div>
          <div className="text-xs text-indigo-500 mt-1">Deploy solutions</div>
        </div>
      </div>
    ),
  },
];

export const SectionsPanel: React.FC<SectionsPanelProps> = ({
  onSelectTemplate,
  onBack,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-gray-200 p-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 hover:text-gray-900"
          onClick={onBack}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="flex gap-2">
          <button
            onClick={() => setTheme("light")}
            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
              theme === "light"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Dark
          </button>
        </div>
      </div>

      {/* Section Templates Grid */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-2 gap-4">
          {sectionTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => onSelectTemplate(template.id)}
              className="group text-left hover:opacity-75 transition-opacity"
            >
              {template.preview}
              <div className="mt-3">
                <div className="font-semibold text-sm text-gray-900 group-hover:text-valasys-orange transition-colors">
                  {template.name}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {template.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
