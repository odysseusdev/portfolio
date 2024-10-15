"use client";

import InfoCard from ".";
import { InfoCardProps } from "./InfoCard";
import React from "react";
import Urls from "@/lib/urls";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export type ReleaseInfoCardProps = {} & Omit<InfoCardProps, "title" | "description">;

const ReleaseInfoCard = ({ ...props }: ReleaseInfoCardProps) => {
	const { data, error, isLoading } = useSWR(Urls.release("portfolio"), fetcher);

	if (isLoading) {
		return (
			<InfoCard
				title="Latest release"
				description="Fetching release.."
				{...props}
			/>
		);
	}

	if (error || !data?.name) {
		return (
			<InfoCard
				title="Latest release"
				description="Failed to fetch latest release.."
				{...props}
			/>
		);
	}

	return (
		<InfoCard
			title="Latest release"
			description={data.name}
			{...props}
		/>
	);
};

export default ReleaseInfoCard;
