import React from 'react';

export const WebCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-gray-100">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Modern Web Capabilities</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
						{
							title: 'WebGL & 3D',
							icon: '🎮',
							features: ['Three.js', 'WebGL Shaders', 'Performance optimization'],
						},
						{
							title: 'Progressive Web Apps',
							icon: '📱',
							features: ['Offline support', 'Push notifications', 'App-like experience'],
						},
						{
							title: 'Real-time Features',
							icon: '⚡',
							features: ['WebSockets', 'WebRTC', 'Server-Sent Events'],
						},
						{
							title: 'Browser APIs',
							icon: '🔧',
							features: ['File System Access', 'Web Workers', 'Service Workers'],
						},
						{
							title: 'Performance',
							icon: '🚀',
							features: ['Code splitting', 'Tree shaking', 'Resource optimization'],
						},
						{
							title: 'Security',
							icon: '🔒',
							features: ['CSP', 'CORS configuration', 'Security headers'],
						},
					].map((category) => (
						<div key={category.title} className="group bg-white p-6 rounded-lg hover:bg-gray-100 transition-all shadow-sm hover:shadow-md">
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-600 group-hover:text-gray-700 transition-colors">
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
