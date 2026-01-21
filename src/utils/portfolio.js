import { projects } from "../data/portfolioData";

// Make a fast lookup map: slug -> project
const projectsBySlug = Object.fromEntries(
  projects.map((p) => [String(p.slug).toLowerCase(), p])
);

/**
 * Returns projects in the same order as slugs[].
 * Ignores slugs that don't exist.
 */
export function getProjectsBySlugs(slugs = []) {
  return slugs
    .map((s) => projectsBySlug[String(s).toLowerCase()])
    .filter(Boolean);
}
