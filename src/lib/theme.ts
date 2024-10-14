import { CSSVariablesResolver, MantineTheme, createTheme } from "@mantine/core";

import { nunito } from "./fonts";

const cssVariablesResolver: CSSVariablesResolver = (theme: MantineTheme) => ({
	variables: {},
	light: {
		"--mantine-color-dark-filled": theme.colors.dark[8],
	},
	dark: {},
});

const theme = createTheme({
	primaryColor: "dark",
	fontFamily: nunito.style.fontFamily,
});

export { cssVariablesResolver };

export default theme;
