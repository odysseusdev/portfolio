import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

export const markdownToHtml = async (markdown: string): Promise<string> => {
	const html = await unified().use(remarkParse).use(remarkHtml).process(markdown);
	return html.toString();
};
