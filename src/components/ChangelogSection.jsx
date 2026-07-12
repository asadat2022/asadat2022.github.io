import SectionLabel from './SectionLabel';
import Changelog from './Changelog';

export default function ChangelogSection() {
  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 32px' }}>
      <SectionLabel>career changelog</SectionLabel>
      <Changelog />
    </div>
  );
}
