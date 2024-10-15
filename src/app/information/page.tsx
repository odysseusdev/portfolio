import Breadcrumbs from "@/components/layout/breadcrumbs";
import Hero from "@/components/layout/hero";
import { Metadata } from "next";
import React from "react";
import { Text } from "@mantine/core";

export const metadata: Metadata = {
	title: "information · odysseus.",
};

const InformationPage = () => {
	return (
		<>
			<Breadcrumbs items={[{ title: "Home", href: "/" }, { title: "Information" }]} />
			<Hero
				title="Information"
				description="Development and release details related to this web application"
			/>
			<Text>Some information will go here..</Text>
		</>
	);
};

export default InformationPage;
