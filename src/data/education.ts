// src/data/education.ts
// Edit this file to update the education section.

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  notes?: string[];
}

export const education: EducationItem[] = [
  {
    institution: "Tsinghua University",
    degree: "Ph.D. Candidate in Ecology",
    period: "2023 – Present",
    location: "Beijing, China",
    notes: [
      "Research focus: Intelligent systems and scientific workflows for remote sensing analysis",
      "Advisor: Prof. Jie Yang",
    ],
  },
  {
    institution: "China Agricultural University",
    degree: "B.Sc. in Geographic Information Science",
    period: "2019 – 2023",
    location: "Beijing, China",
    notes: [
      "GPA: 3.85 / 4.00",
      "Relevant coursework: Programming, Data Structures, Spatial Analysis and Geostatistics, Remote Sensing, Python GIS Development",
      "Excellent Graduate, Beijing Municipality",
    ],
  },
];
