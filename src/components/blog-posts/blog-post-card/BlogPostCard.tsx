import { Button, Group, Paper, PaperProps, PolymorphicComponentProps, Stack, Text } from "@mantine/core";

import { BlogPost } from "@/lib/types";
import Link from "next/link";
import React from "react";

export type BlogPostCardProps = { blogPost: BlogPost } & PolymorphicComponentProps<"div", PaperProps>;

const BlogPostCard = ({ blogPost, ...props }: BlogPostCardProps) => {
	return (
		<Paper
			px="lg"
			py="md"
			withBorder
			{...props}
		>
			<Stack
				h="100%"
				gap="sm"
			>
				<Stack gap={4}>
					<Text
						style={{ flexBasis: 0, flexGrow: 1 }}
						component="h2"
						fw={700}
						size="lg"
					>
						{blogPost.title}
					</Text>
					<Text
						size="sm"
						c="dimmed"
					>
						{blogPost.date.toString()}
					</Text>
				</Stack>
				<Text
					style={{ flexGrow: 1 }}
					size="sm"
				>
					{blogPost.excerpt}
				</Text>
				<Group justify="flex-end">
					<Button
						component={Link}
						href={`/blog/${blogPost.slug}`}
						variant="filled"
					>
						Read more
					</Button>
				</Group>
			</Stack>
		</Paper>
	);
};

export default BlogPostCard;
