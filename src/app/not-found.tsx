import { Button, Text } from "@mantine/core";

import Hero from "@/components/layout/hero";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "404 not found · odysseus.",
};

const NotFoundPage = () => {
	return (
		<>
			<Hero
				title="404"
				description="You've ended up somewhere you probably shouldn't have
"
			/>
			<Text>
				The page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to
				another URL.
			</Text>
			<Button
				component={Link}
				href="/"
			>
				Take me back to safety
			</Button>
		</>
	);
};

export default NotFoundPage;
