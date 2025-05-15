import { Metadata } from 'next';
import { ExampleComponents } from '@/components/templates';

export const metadata: Metadata = {
	title: 'Kofu Next Template',
	description: 'NextJS CI/CD Template',
};

const Home = () => {
	return (
		<main>
			<ExampleComponents />
		</main>
	);
};

export default Home;
