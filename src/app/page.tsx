import { type Metadata } from 'next';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { PostCard } from '@/components/PostCard';

export const generateMetadata = async (): Promise<Metadata> => {
	const client = createClient();
	const home = await client.getByUID('page', 'home');

	return {
		title: prismic.asText(home.data.title),
		description: home.data.meta_description,
		openGraph: {
			title: home.data.meta_title ?? undefined,
			images: [{ url: home.data.meta_image.url ?? '' }],
		},
	};
};

const Index = async () => {
	const client = createClient();

	const home = await client.getByUID('page', 'home');

	const posts = await client.getAllByType('blog_post', {
		orderings: [
			{ field: 'my.blog_post.publication_date', direction: 'desc' },
			{ field: 'document.first_publication_date', direction: 'desc' },
		],
	});

	return (
		<>
			<SliceZone slices={home.data.slices} components={components} />
			
			<section className="grid w-full max-w-3xl grid-cols-1 gap-8">
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</section>
		</>
	);
};

export default Index;
