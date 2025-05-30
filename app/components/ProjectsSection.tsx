import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'NJ Food Systems Resource Directory',
							description: 'Full-stack web app to manage food resources across New Jersey. Included advanced search, CMS approval flow, and secure login via Auth0.',
							techDetails: ['Flask', 'PostgreSQL', 'Auth0', 'SQLAlchemy', 'Responsive UI'],
							image: '/njfdc_project.jpg',
						},
						{
							title: 'Detecting Biomarkers in Ovarian Cancer',
							description: 'Built a Random Forest classifier that categorized tumor subtypes with 90% accuracy using 5,000+ genomic samples. Identified 50+ genes relevant to therapy development.',
							techDetails: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Model Optimization'],
							image: '/biomarkers.jpg',
						},
						{
							title: 'AI Chatbot for Customer Support – Instalily.ai',
							description: 'Scraped product info and FAQs, engineered structured prompts, and integrated OpenAI API to create a smart, automated chatbot for customer support.',
							techDetails: ['OpenAI API', 'Prompt Engineering', 'Web Scraping'],
							image: '/chatbot.jpg',
						},
						{
							title: 'Improving LLM Citation Accuracy – Princeton Research',
							description: 'Analyzed and refined prompt strategies to enhance citation fluency and factuality in ChatGPT-generated outputs. Used the ALCE benchmark to evaluate citation performance, with custom rephrasing pipelines that improved citation quality across datasets.',
							techDetails: ['Prompt Engineering', 'OpenAI API', 'Python', 'ALCE Benchmark', 'Qualitative Evaluation'],
							image: '/alce.jpg'
						},

					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
