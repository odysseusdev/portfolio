import { Grid, GridCol, Title } from "@mantine/core";
import InfoCard, { ReleaseInfoCard } from "@/components/info-card";

import Breadcrumbs from "@/components/layout/breadcrumbs";
import Hero from "@/components/layout/hero";
import { Metadata } from "next";
import React from "react";

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
			<Title>Application</Title>
			<Grid>
				<GridCol span={{ base: 12, xs: 6, md: 4 }}>
					<InfoCard
						h="100%"
						title="Developed by"
						description="odysseus."
					/>
				</GridCol>
				<GridCol span={{ base: 12, xs: 6, md: 4 }}>
					<ReleaseInfoCard h="100%" />
				</GridCol>
				<GridCol span={{ base: 12, xs: 6, md: 4 }}>
					<InfoCard
						h="100%"
						title="Built using"
						description="Next.js + Mantine"
					/>
				</GridCol>
			</Grid>
		</>
	);
};

export default InformationPage;
