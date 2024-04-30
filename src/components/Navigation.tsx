import { type ReactElement } from 'react';
import { createClient } from '@/prismicio';
import { isFilled } from '@prismicio/client';
import { PrismicLink } from '@prismicio/react';

export const Navigation = async (): Promise<ReactElement> => {
	const client = createClient();

	const navigation = await client.getSingle('navigation');

	return (
		<nav className="self-center text-xl font-bold">
			<ul className="flex flex-col items-center md:flex-row md:space-x-6">
				{isFilled.group(navigation.data.menu_items) &&
					navigation.data.menu_items.map((item) => {
						return (
							<li key={item.label}>
								<PrismicLink field={item.link} className="text-center">
									{item.label}
								</PrismicLink>
							</li>
						);
					})}
			</ul>
		</nav>
	);
};
