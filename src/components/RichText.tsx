import { RichTextField } from '@prismicio/client';
import {
	JSXMapSerializer,
	PrismicRichText,
	PrismicLink,
} from '@prismicio/react';

export const richTextComponents: JSXMapSerializer = {
	label: ({ node, children }) => {
		if (node.data.label === 'codespan') {
			return <code>{children}</code>;
		}
	},
	heading1: ({ children }) => (
		<h1 className="text-4xl font-bold">{children}</h1>
	),
	heading2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
	heading3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
	paragraph: ({ children }) => <p>{children}</p>,
	hyperlink: ({ children, node }) => (
		<PrismicLink field={node.data} className="font-bold underline">
			{children}
		</PrismicLink>
	),
};

interface RichTextProps {
	field: RichTextField;
}

export const RichText = ({ field }: RichTextProps) => {
	return <PrismicRichText field={field} components={richTextComponents} />;
};
