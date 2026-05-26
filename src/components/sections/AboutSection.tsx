import { Section } from './Section';
import type { ProfileSection } from './types';

type Props = {
  section: ProfileSection;
  isActive: boolean;
  reduceMotion: boolean;
};

export function AboutSection(props: Props) {
  return <Section {...props} />;
}
