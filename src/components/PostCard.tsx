import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { RichText } from './RichText';
import { type Content } from '@prismicio/client';
import { type ReactElement } from 'react';
import { Card } from '@/components/ui/card';

export const PostCard = ({
	post,
}: {
	post: Content.BlogPostDocument;
}): ReactElement => {
	const { data } = post;

	return (
		<PrismicLink document={post} className="flex grid-cols-2 gap-10">
			<Card className="flex w-full flex-col p-6">
				<PrismicNextImage
					field={data.featured_image}
					priority={true}
					sizes="100vw"
					className="max-h-40 w-full rounded-lg object-cover"
				/>
				
				<div className="flex flex-col gap-3">
					<div className="flex flex-col gap-1">
						<p className="w-min border-b-2 pt-2 text-sm text-slate-700 opacity-75">
							{new Date(data?.publication_date || '').toLocaleDateString()}
						</p>
						<div className="transition-all duration-300 ease-in-out hover:opacity-75">
							<h2 className="text-2xl font-bold">
								<PrismicText field={data.title} />
							</h2>
						</div>
					</div>
					<RichText field={data.description} />
				</div>
			</Card>
		</PrismicLink>
	);
};
