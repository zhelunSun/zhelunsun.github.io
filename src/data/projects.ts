// src/data/projects.ts
// Edit this file to update the projects section.

export interface Project {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  codeUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    title: "ExpertsRS: LLM-based Remote Sensing Agent System",
    period: "2024 – Present",
    description:
      "A user-centric framework leveraging LLMs as the reasoning core and natural-language interface for non-expert users to perform remote sensing analysis.",
    highlights: [
      "Built a prototype multi-agent system based on AutoGen with distinct agents coordinating remote sensing data, tools, and reasoning processes",
      "Demonstrated potential to lower technical barriers through natural-language interaction and interpretable result generation",
    ],
    tags: ["LLM", "Multi-Agent", "Remote Sensing", "AutoGen"],
    paperUrl: "https://doi.org/10.1080/20964471.2025.2600178",
  },
  {
    title: "Structured Research Asset for Urban Forest Remote Sensing",
    period: "2025 – Present",
    description:
      "A structured intermediate layer connecting urban forest monitoring objectives with remote sensing variables, indicators, and data sources.",
    highlights: [
      "Organized domain knowledge into agent-oriented representations for information retrieval and workflow assistance",
      "Built a prototype linking remote sensing variables, ecological indicators, and analytical processes as reusable research assets",
    ],
    tags: ["Knowledge Graph", "Urban Ecology", "Remote Sensing"],
  },
  {
    title: "GF-1 Data Service via Open Data Cube",
    period: "2020 – 2022",
    description:
      "End-to-end data loading and web-based service workflow for accessing and analyzing GF-1 satellite imagery within the Open Data Cube framework.",
    highlights: [
      "Developed Python scripts for loading GF-1 satellite data into the ODC framework",
      "Built a prototype water detection service using the ODC Web UI",
    ],
    tags: ["Python", "Open Data Cube", "GF-1", "Web Service"],
  },
  {
    title: "Nighttime Light Analysis of the Ukraine–Russia War",
    period: "2022",
    description:
      "A remote sensing study using VIIRS nighttime light data to assess war-related impacts on human activity across Ukraine.",
    highlights: [
      "Produced pre-war and wartime nighttime light maps and quantified light loss as a proxy for local disruption",
    ],
    tags: ["VIIRS", "Nighttime Light", "Conflict Analysis"],
  },
];
