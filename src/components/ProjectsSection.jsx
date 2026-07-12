import { palette } from '../theme/palette';
import { projects } from '../data/content';
import SectionLabel from './SectionLabel';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <div id="projects" style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 32px' }}>
      <SectionLabel>selected work</SectionLabel>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: palette.muted, marginBottom: 20, fontStyle: 'italic' }}>
        Most of my production work is under client NDAs, so these are described rather than linked.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
        {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </div>
  );
}
