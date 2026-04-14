// src/data/publications.ts
// Edit this file to update the publications section.
// Tags: "first-author" | "co-author"

export interface Publication {
  title: string;
  authors: string; // Use **Sun, Z.** to bold your name in rendering
  journal: string;
  year: number;
  doi?: string;
  paperUrl?: string;
  codeUrl?: string;
  demoUrl?: string;
  tag: "first-author" | "co-author";
}

export const publications: Publication[] = [
  {
    title:
      "An LLM-based multi-agent system for remote sensing analysis",
    authors:
      "**Sun, Z.**, Zhou, Y., & Yang, J.",
    journal: "Big Earth Data",
    year: 2026,
    doi: "10.1080/20964471.2025.2600178",
    paperUrl: "https://doi.org/10.1080/20964471.2025.2600178",
    codeUrl: "", // add GitHub link when available
    tag: "first-author",
  },
  {
    title:
      "Landsat image classification using a deep learning model and multiple-source training samples",
    authors:
      "**Sun, Z.**, Li, X., Wei, H., Feng, Z., & Yang, J.",
    journal: "International Journal of Digital Earth, 17(1), 2409351",
    year: 2024,
    doi: "10.1080/17538947.2024.2409351",
    paperUrl: "https://doi.org/10.1080/17538947.2024.2409351",
    tag: "first-author",
  },
  {
    title:
      "Loading and service implementation of GF-1 satellite data based on Open Data Cube",
    authors:
      "**Sun, Z.**, Xiao, B., Zhao, Z., Yu, G., Cao, Q., Wang, M., & Yao, X.",
    journal:
      "Remote Sensing Technology and Application, 38(4), 794–802",
    year: 2023,
    doi: "10.11873/j.issn.1004-0323.2023.4.0794",
    tag: "first-author",
  },
  {
    title:
      "Measuring perceived green volume for quantifying urban green exposure",
    authors:
      "Zhang, Y., **Sun, Z.**, Ji, J. S., Li, X., & Yang, J.",
    journal: "Urban Forestry & Urban Greening, 116, 129231",
    year: 2026,
    doi: "10.1016/j.ufug.2025.129231",
    paperUrl: "https://doi.org/10.1016/j.ufug.2025.129231",
    tag: "co-author",
  },
];
