import { readFile } from "node:fs/promises";

const path = new URL("../src/generated/site-cv.json", import.meta.url);
const contract = JSON.parse(await readFile(path, "utf8"));

if (contract.contract?.name !== "zhelun-public-career-profile") {
  throw new Error("Unexpected public career contract name");
}
if (contract.contract?.schema_version !== "2.0") {
  throw new Error(`Unsupported public career contract version: ${contract.contract?.schema_version}`);
}

const content = contract.content;
for (const section of ["education", "publications", "research", "projects", "honors"]) {
  if (!Array.isArray(content?.[section])) throw new Error(`Missing contract section: ${section}`);
  const ids = content[section].map((item) => item.id);
  if (ids.some((id) => !id) || new Set(ids).size !== ids.length) {
    throw new Error(`Invalid stable IDs in contract section: ${section}`);
  }
}

const careerIds = new Set([
  ...content.education.map((item) => item.id),
  ...content.publications.map((item) => item.id),
  ...content.research.map((item) => item.id),
  ...content.projects.map((item) => item.id),
  ...content.honors.map((item) => item.id),
]);

const projectSource = await readFile(new URL("../src/data/projects.ts", import.meta.url), "utf8");
const referencedIds = [...projectSource.matchAll(/careerId: "([^"]+)"/g)].map((match) => match[1]);
for (const id of referencedIds) {
  if (!careerIds.has(id) && !id.startsWith("site-only-")) {
    throw new Error(`Website presentation references unknown career ID: ${id}`);
  }
}

console.log(`Career contract validated: v${contract.contract.schema_version}, digest ${contract.contract.content_digest}`);

