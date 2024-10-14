import BlogPosts from "@/components/blog-posts/blog-posts";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import Hero from "@/components/layout/hero";
import { Metadata } from "next";
import React from "react";
import { getAllBlogPosts } from "@/lib/api/blog-posts";

export const metadata: Metadata = {
	title: "blog · odysseus.",
};

const BlogPage = () => {
	const blogPosts = getAllBlogPosts();

	return (
		<>
			<Breadcrumbs items={[{ title: "Home", href: "/" }, { title: "Blog" }]} />
			<Hero
				title="Blog"
				description="Discoveries, releases and how-to guides on common development issues"
			/>
			<BlogPosts blogPosts={blogPosts} />
		</>
	);
};

export default BlogPage;
