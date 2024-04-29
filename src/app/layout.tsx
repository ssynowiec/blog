import './styles.scss';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import { type ReactNode } from 'react';
import { Navigation } from '@/components/Navigation';

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className="flex flex-col items-center bg-stone-50">
				<div className="flex min-h-screen w-full max-w-7xl flex-col items-center gap-20 border-x border-solid border-gray-200 bg-white p-12 text-slate-700">
					<Navigation />
					{children}
					<PrismicPreview repositoryName={repositoryName} />
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
