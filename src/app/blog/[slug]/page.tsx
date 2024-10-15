import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/api/blog-posts";

import { Box } from "@mantine/core";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import Hero from "@/components/layout/hero";
import { Metadata } from "next";
import React from "react";
import { markdownToHtml } from "@/lib/markdown";
import { notFound } from "next/navigation";

export type BlogPostPageParams = {
	params: { slug: string };
};

const BlogPostPage = async ({ params }: BlogPostPageParams) => {
	const blogPost = getBlogPostBySlug(params.slug);

	if (!blogPost) {
		return notFound();
	}

	const content = await markdownToHtml(blogPost.content || "");

	return (
		<>
			<Breadcrumbs items={[{ title: "Home", href: "/" }, { title: "Blog", href: "/blog" }, { title: blogPost.title }]} />
			<Hero
				title={blogPost.title}
				description={blogPost.excerpt}
			/>
			<Box dangerouslySetInnerHTML={{ __html: content }} />
		</>
	);
};

export default BlogPostPage;

export const generateMetadata = ({ params }: BlogPostPageParams): Metadata => {
	const blogPost = getBlogPostBySlug(params.slug);

	if (!blogPost) {
		return notFound();
	}

	const title: string = `${blogPost.title.toLowerCase()} ·  blog · odysseus.`;

	return {
		title,
	};
};

export const generateStaticParams = async () => {
	const blogPosts = getAllBlogPosts();

	return blogPosts.map(blogPost => ({ slug: blogPost.slug }));
};
