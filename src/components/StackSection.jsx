import SectionLabel from './SectionLabel';
import StackDiagram from './StackDiagram';

export default function StackSection() {
  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 32px' }}>
      <SectionLabel>stack</SectionLabel>
      <StackDiagram />
    </div>
  );
}
