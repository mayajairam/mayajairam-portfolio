import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CoursesSection } from './components/CoursesSection';
import { ContactSection } from './components/ContactSection';
import { WorkExperienceSection } from './components/WorkExperienceSection';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-[#0D1117] text-white">
			<HeroSection />
			<SkillsSection />
			<WorkExperienceSection />
			<ProjectsSection />
			<CoursesSection />
			<ContactSection />
		</main>
	);
}
