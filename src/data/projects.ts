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
    title: "URSA — Multi-Agent Remote Sensing Analysis System",
    period: "2024 – Present",
    description:
      "A user-centric framework using LLM-based multi-agent coordination to let non-expert users perform remote sensing analysis through natural language.",
    highlights: [
      "Built a prototype multi-agent system on AutoGen with DeepSeek-V3 as the reasoning core",
      "Lowered technical barriers via natural-language interaction and interpretable result generation",
      "Published as first author in Big Earth Data (2026)",
    ],
    tags: ["LLM", "Multi-Agent", "Remote Sensing", "AutoGen"],
    codeUrl: "https://github.com/zhelunSun/URSA",
    paperUrl: "https://doi.org/10.1080/20964471.2025.2600178",
  },
  {
    title: "Sheaf — Knowledge Infrastructure for the Agent Era",
    period: "2025 – Present",
    description:
      "A local-first, MCP-native personal knowledge base that turns bookmarks, notes, and papers into structured context assets for AI agents.",
    highlights: [
      "Built CLI + MCP server + HTTP API + Chrome extension on a local-first architecture",
      "1,000+ tests passing; shipped through v0.7 with unified install and MCP resources",
      "Open knowledge→context pipeline: capture → crystallize → retrieve for agentic workflows",
    ],
    tags: ["MCP", "Knowledge Graph", "Local-First", "Python", "AI Agent"],
    codeUrl: "https://github.com/zhelunSun/sheaf-ai",
  },
  {
    title: "Agent OS — Lightweight Multi-Agent Coordination Layer",
    period: "2026",
    description:
      "A file-based protocol layer for multi-agent systems: findings, context packs, mission control, and agent handoffs without heavyweight orchestration frameworks.",
    highlights: [
      "Minimal, auditable file protocols instead of opaque runtime orchestration",
      "Used in production for daily agent coordination and mission control handoffs",
    ],
    tags: ["Multi-Agent", "Protocol", "Coordination", "Python"],
    codeUrl: "https://github.com/zhelunSun/agent-os",
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
];
