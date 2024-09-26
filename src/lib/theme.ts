import {
	CSSVariablesResolver,
	MantineTheme,
	VariantColorsResolver,
	VariantColorsResolverInput,
	createTheme,
	defaultVariantColorsResolver,
	parseThemeColor,
} from "@mantine/core";

import { nunito } from "./fonts";

const cssVariablesResolver: CSSVariablesResolver = (theme: MantineTheme) => ({
	variables: {},
	light: {},
	dark: {
		"--mantine-color-text": theme.colors.gray[1],
		"--mantine-color-dimmed": theme.colors.dark[1],
		"--mantine-color-body": theme.colors.dark[9],
	},
});

const variantColorResolver: VariantColorsResolver = (input: VariantColorsResolverInput) => {
	const defaultResolvedColors = defaultVariantColorsResolver(input);
	const parsedColor = parseThemeColor({
		color: input.color || input.theme.primaryColor,
		theme: input.theme,
	});

	if (
		parsedColor.isThemeColor &&
		parsedColor.color === input.theme.primaryColor &&
		["filled", "white"].includes(input.variant)
	) {
		// 'Filled' variant components should use a white fill color with black text
		return {
			...defaultResolvedColors,
			color: "var(--mantine-color-black)",
			hoverColor: "var(--mantine-color-black)",
		};
	}

	return defaultResolvedColors;
};

const theme = createTheme({
	primaryColor: "gray",
	primaryShade: { light: 6, dark: 0 },
	fontFamily: nunito.style.fontFamily,
	variantColorResolver,
});

export { cssVariablesResolver, variantColorResolver };

export default theme;
