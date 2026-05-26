import type { MouseEvent } from 'react';
import type { ProfileSection } from '../sections/types';

type SideNavProps = {
  sections: ProfileSection[];
  activeSection: string;
  reduceMotion: boolean;
};

export function SideNav({ sections, activeSection, reduceMotion }: SideNavProps) {
  const onNavigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });

    window.history.replaceState({}, '', `#${id}`);
    target.focus({ preventScroll: true });
  };

  return (
    <nav className="side-nav" aria-label="Profile sections">
      <ul>
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={isActive ? 'active' : ''}
                onClick={(event) => onNavigate(event, section.id)}
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
