import { Project } from "../types";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const projectsDirectory: string = join(process.cwd(), "__projects");

export const getProjectSlugs = (): string[] => {
	return fs.readdirSync(projectsDirectory);
};

export const getProjectBySlug = (slug: string): Project => {
	const realSlug = slug.replace(/\.md$/, "");
	const path = join(projectsDirectory, `${realSlug}.md`);
	const contents = fs.readFileSync(path, "utf8");
	const { data, content } = matter(contents);

	return { slug: realSlug, ...data, content } as Project;
};

export const getAllProjects = (): Project[] => {
	const slugs = getProjectSlugs();

	return slugs.map(slug => getProjectBySlug(slug)).sort((a, b) => a.name.localeCompare(b.name));
};
