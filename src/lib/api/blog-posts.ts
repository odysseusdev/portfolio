import { BlogPost, Project } from "../types";

import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const blogPostsDirectory: string = join(process.cwd(), "__blog-posts");

export const getBlogPostSlugs = (): string[] => {
	return fs.readdirSync(blogPostsDirectory);
};

export const getBlogPostBySlug = (slug: string): BlogPost => {
	const realSlug = slug.replace(/\.md$/, "");
	const path = join(blogPostsDirectory, `${realSlug}.md`);
	const contents = fs.readFileSync(path, "utf8");
	const { data, content } = matter(contents);

	return { slug: realSlug, ...data, content } as BlogPost;
};

export const getAllBlogPosts = (): BlogPost[] => {
	const slugs = getBlogPostSlugs();

	return slugs.map(slug => getBlogPostBySlug(slug)).sort((a, b) => b.date.getTime() - a.date.getTime());
};
