import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-white scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'E-commerce PWA',
							description: 'High-performance Progressive Web App with offline capabilities',
							metrics: {
								performance: 98,
								accessibility: 100,
								seo: 100,
							},
							techDetails: ['Service Worker implementation', 'IndexedDB for offline data', 'Streaming SSR', 'Dynamic code splitting'],
							image: '/code.jpg',
						},
						{
							title: 'Real-time Collaboration Platform',
							description: 'WebSocket-based platform with conflict resolution',
							metrics: {
								performance: 95,
								accessibility: 98,
								seo: 100,
							},
							techDetails: ['WebSocket optimization', 'CRDT implementation', 'Custom state management', 'WebRTC integration'],
							image: '/code.jpg',
						},
					].map((project) => (
						<div key={project.title} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-600">{project.description}</p>

									{/* Performance Metrics */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold text-gray-900">Performance Metrics</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-2xl font-bold text-blue-600">{value}</div>
													<div className="text-sm text-gray-600 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-600">▹</span>
													<span className="text-gray-700">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-gray-100 via-transparent to-transparent lg:via-gray-50/20 lg:to-gray"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
