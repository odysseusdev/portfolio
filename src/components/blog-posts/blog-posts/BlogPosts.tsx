import { BlogPost, Project } from "@/lib/types";
import { Button, Center, Grid, GridCol, Stack, StackProps, Text, Title } from "@mantine/core";

import BlogPostCard from "../blog-post-card";
import Link from "next/link";
import React from "react";

export type BlogPostsProps = { blogPosts: BlogPost[] };

const BlogPosts = ({ blogPosts }: BlogPostsProps) => {
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
			<GridCol span={{ base: 12, sm: 6, lg: 4 }}>
				<Center
					h="100%"
					py="lg"
				>
					<Button
						component={Link}
						href="/projects"
						variant="light"
					>
						View more projects..
					</Button>
				</Center>
			</GridCol>
		</Grid>
	);
};

export default BlogPosts;
