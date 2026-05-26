import type { ProfileSection } from './types';

type SectionProps = {
  section: ProfileSection;
  isActive: boolean;
  reduceMotion: boolean;
};

export function Section({ section, isActive, reduceMotion }: SectionProps) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className={`profile-section ${isActive ? 'is-active' : ''} ${
        reduceMotion ? 'reduce-motion' : ''
      }`}
      tabIndex={-1}
    >
      <h2 id={`${section.id}-heading`}>{section.title}</h2>
      <p>{section.content}</p>
    </section>
  );
}
