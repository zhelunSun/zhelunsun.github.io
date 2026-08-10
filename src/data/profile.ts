import { careerContent } from "@/data/career-contract";
import { sitePresentation } from "@/data/site-presentation";

const identity = careerContent.identity;
const affiliation = careerContent.education[0]?.institution ?? "";

export const profile = {
  name: identity.name,
  nameChinese: identity.name_zh,
  title: identity.role,
  affiliation,
  location: identity.location,
  email: identity.email,
  bio: identity.bio,
  social: {
    github: identity.github,
    scholar: sitePresentation.scholarUrl,
    email: `mailto:${identity.email}`,
    twitter: "",
  },
  cvPath: sitePresentation.cvPath,
} as const;

export type Profile = typeof profile;
