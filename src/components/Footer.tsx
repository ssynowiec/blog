import { type ReactElement } from 'react';

export const Footer = (): ReactElement => {
	return (
		<footer className="flex h-16 w-full items-center justify-center">
			<p>
				&copy; {new Date().getFullYear()} Stanisław Synowiec. All rights
				reserved.
			</p>
		</footer>
	);
};
