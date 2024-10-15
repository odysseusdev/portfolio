import { Button, Center, Grid, GridCol, Text } from "@mantine/core";

import { BlogPost } from "@/lib/types";
import BlogPostCard from "../blog-post-card";
import Link from "next/link";
import React from "react";

export type BlogPostsProps = { blogPosts: BlogPost[]; hideViewMore?: boolean };

const BlogPosts = ({ blogPosts, hideViewMore = false }: BlogPostsProps) => {
	if (!blogPosts || blogPosts.length === 0) {
		return <Text>No blog posts found.</Text>;
	}

	return (
		<Grid>
			{blogPosts.map(project => (
				<GridCol
					key={project.slug}
					span={{ base: 12, sm: 6, lg: 4 }}
				>
					<BlogPostCard
						h="100%"
						blogPost={project}
					/>
				</GridCol>
			))}
			{!hideViewMore && (
				<GridCol span={{ base: 12, sm: 6, lg: 4 }}>
					<Center
						h="100%"
						py="lg"
					>
						<Button
							component={Link}
							href="/blog"
							variant="light"
						>
							View more blog posts..
						</Button>
					</Center>
				</GridCol>
			)}
		</Grid>
	);
};

export default BlogPosts;
