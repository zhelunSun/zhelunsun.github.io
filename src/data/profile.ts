// src/data/profile.ts
// Edit this file to update the hero section, bio, and social links.

export const profile = {
  name: "Sun Zhelun",
  nameChinese: "孙哲伦",
  title: "Ph.D. Candidate in Ecology",
  affiliation: "Tsinghua University",
  location: "Beijing, China",
  email: "sunzl23@mails.tsinghua.edu.cn",
  bio: `I am a Ph.D. candidate at Tsinghua University, working at the intersection of 
artificial intelligence and remote sensing. My research centers on building intelligent 
systems and scientific workflows that allow non-expert users to conduct sophisticated 
geospatial analysis through natural language — with LLM-based multi-agent systems as 
the core reasoning engine.`,
  social: {
    github: "https://github.com/sunzl23", // update with actual handle
    scholar: "https://scholar.google.com/", // update with actual Google Scholar link
    email: "mailto:sunzl23@mails.tsinghua.edu.cn",
    twitter: "", // add if available
  },
  cvPath: "/assets/Zhelun_s_CV_202604_v1.pdf",
} as const;

export type Profile = typeof profile;
