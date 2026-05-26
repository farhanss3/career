import { SideNav } from './components/navigation/SideNav';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { profileSections } from './components/sections/types';
import { useActiveSection } from './hooks/useActiveSection';
import { useReducedMotion } from './hooks/useReducedMotion';
import './styles/profile.css';

export default function App() {
  const reduceMotion = useReducedMotion();
  const activeSection = useActiveSection(profileSections.map((s) => s.id));

  return (
    <div className="layout">
      <SideNav
        sections={profileSections}
        activeSection={activeSection}
        reduceMotion={reduceMotion}
      />
      <main>
        <AboutSection
          section={profileSections[0]}
          isActive={activeSection === profileSections[0].id}
          reduceMotion={reduceMotion}
        />
        <ExperienceSection
          section={profileSections[1]}
          isActive={activeSection === profileSections[1].id}
          reduceMotion={reduceMotion}
        />
        <ProjectsSection
          section={profileSections[2]}
          isActive={activeSection === profileSections[2].id}
          reduceMotion={reduceMotion}
        />
        <SkillsSection
          section={profileSections[3]}
          isActive={activeSection === profileSections[3].id}
          reduceMotion={reduceMotion}
        />
        <ContactSection
          section={profileSections[4]}
          isActive={activeSection === profileSections[4].id}
          reduceMotion={reduceMotion}
        />
      </main>
    </div>
  );
}
