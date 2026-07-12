import { palette } from '../theme/palette';
import { aboutText } from '../data/content';
import SectionLabel from './SectionLabel';

export default function About() {
  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 32px' }}>
      <SectionLabel>about</SectionLabel>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: palette.muted, lineHeight: 1.75, maxWidth: 720 }}>
        {aboutText}
      </p>
    </div>
  );
}
