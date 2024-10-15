import { Box, BoxComponentProps, Group, PolymorphicComponentProps, Stack, Text, Title } from "@mantine/core";

import { Dots } from ".";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";

export type HeroProps = {
	title: string;
	description: React.ReactNode;
} & Omit<PolymorphicComponentProps<"div", BoxComponentProps>, "children">;

const Hero = ({ title, description, ...props }: HeroProps) => {
	return (
		<Box
			className={styles.root}
			{...props}
		>
			<Dots
				className={styles.dots}
				size={148}
				top={0}
				left={0}
				hiddenFrom="xs"
			/>
			<Dots
				className={styles.dots}
				top={0}
				left={0}
				visibleFrom="xs"
			/>
			<Dots
				className={styles.dots}
				top={80}
				left={0}
				visibleFrom="md"
			/>
			<Dots
				className={styles.dots}
				top={0}
				left={160}
				visibleFrom="md"
			/>
			<Dots
				className={styles.dots}
				size={148}
				bottom={0}
				right={0}
				hiddenFrom="xs"
			/>
			<Dots
				className={styles.dots}
				bottom={0}
				right={0}
				visibleFrom="xs"
			/>
			<Dots
				className={styles.dots}
				bottom={40}
				right={0}
				visibleFrom="md"
			/>
			<Dots
				className={styles.dots}
				bottom={0}
				right={120}
				visibleFrom="md"
			/>
			<Group
				className={styles.content}
				justify="space-evenly"
				gap={56}
				wrap="nowrap"
				px={{ base: 32, sm: 64, md: 96, lg: 128 }}
				py={{ base: 40, sm: 48, md: 56, lg: 64 }}
			>
				<Box visibleFrom="sm">
					<Image
						width={192}
						height={192}
						src="/assets/profile-circle-256.png"
						alt="Profile picture"
					/>
				</Box>
				<Stack maw={640}>
					<Title fz={{ base: 40, xs: 48, sm: 56, md: 64 }}>{title}</Title>
					<Text
						fz={{ base: 16, xs: 18, sm: 20, md: 22 }}
						c="dimmed"
					>
						{description}
					</Text>
				</Stack>
			</Group>
		</Box>
	);
};

export default Hero;
