import BreadcrumbItem, { BreadcrumbItemProps } from "./BreadcrumbItem";
import { Breadcrumbs as MantineBreadcrumbs, BreadcrumbsProps as MantineBreadcrumbsProps } from "@mantine/core";

import React from "react";

export type BreadcrumbsProps = {
	items: BreadcrumbItemProps[];
} & Omit<MantineBreadcrumbsProps, "children">;

const Breadcrumbs = ({ items, ...props }: BreadcrumbsProps) => {
	return (
		<MantineBreadcrumbs {...props}>
			{items.map(item => (
				<BreadcrumbItem
					key={item.title}
					{...item}
				/>
			))}
		</MantineBreadcrumbs>
	);
};

export default Breadcrumbs;
