import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicText } from '@prismicio/react';
import { RichText } from './RichText';
import { Content } from '@prismicio/client';

export const PostCard = ({
	post,
}: {
	post: Content.BlogPostDocument;
}): JSX.Element => {
	const { data } = post;

	return (
		<PrismicLink document={post} className="grid grid-cols-2 gap-10">
			<PrismicNextImage
				field={data.featured_image}
				sizes="100vw"
				className="max-h-60 w-full max-w-sm rounded-xl object-cover"
			/>
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-1">
					<p className="w-min border-b-2 pb-1 text-sm text-slate-700 opacity-75">
						{new Date(data?.publication_date || '').toLocaleDateString()}
					</p>
					<div className="transition-all duration-300 ease-in-out hover:opacity-75">
						<h2 className="text-xl font-bold">
							<PrismicText field={data.title} />
						</h2>
					</div>
				</div>
				<RichText field={data.description} />
			</div>
			<div className="col-span-2 w-full border-b border-solid border-gray-200" />
		</PrismicLink>
	);
};