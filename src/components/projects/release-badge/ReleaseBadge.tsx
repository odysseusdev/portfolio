"use client";

import { Badge, BadgeProps, PolymorphicComponentProps } from "@mantine/core";

import React from "react";
import { Release } from "@/lib/types";
import Urls from "@/lib/urls";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export type ReleaseBadgeProps = { repository: string } & PolymorphicComponentProps<"div", BadgeProps>;

const ReleaseBadge = ({ repository, ...props }: ReleaseBadgeProps) => {
	const { data, isLoading } = useSWR<Release>(Urls.release(repository), fetcher);

	return (
		<Badge
			variant="light"
			size="lg"
			radius="sm"
			{...props}
		>
			{isLoading && "Fetching latest release.."}
			{!isLoading && !data?.name && "Failed to fetch latest release"}
			{!isLoading && !!data?.name && `Latest release · ${data.name}`}
		</Badge>
	);
};

export default ReleaseBadge;
