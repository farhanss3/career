import { Section } from './Section';
import type { ProfileSection } from './types';

type Props = {
  section: ProfileSection;
  isActive: boolean;
  reduceMotion: boolean;
};

export function ContactSection(props: Props) {
  return <Section {...props} />;
}
