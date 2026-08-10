import { careerContent } from "@/data/career-contract";

export type Publication = (typeof careerContent.publications)[number];
export const publications = careerContent.publications;
