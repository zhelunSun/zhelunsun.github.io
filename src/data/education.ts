import { careerContent } from "@/data/career-contract";

export const education = careerContent.education;
export type EducationItem = (typeof education)[number];
