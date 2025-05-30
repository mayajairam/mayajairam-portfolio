import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { NavBar } from './components/NavBar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Maya Jairam - Software Engineer',
	description:
		'Portfolio of Maya Jairam, a full-stack engineer with experience in the MERN stack, Flask, Electron, and AWS.',
	keywords: [
		'Software Engineer',
		'MERN Stack',
		'React',
		'Next.js',
		'PostgreSQL',
		'Flask',
		'Electron',
		'Portfolio',
		'Maya Jairam',
	],
	authors: [{ name: 'Maya Jairam' }],
	creator: 'Maya Jairam',
	openGraph: {
		title: 'Maya Jairam - Portfolio',
		description: 'Explore the work of Maya Jairam, a full-stack engineer from Princeton University.',
		url: 'https://your-vercel-site.vercel.app',
		siteName: 'Maya Jairam - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Maya Jairam - Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Maya Jairam - Software Engineer',
		description: 'Explore the work of Maya Jairam, a full-stack engineer from Princeton University.',
		creator: '@mayajairam',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NavBar />
				<main>{children}</main>
			</body>
		</html>
	);
}
