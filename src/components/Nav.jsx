import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { palette } from '../theme/palette';
import { site, contact } from '../data/content';

export default function Nav() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 32px',
        borderBottom: `1px solid ${palette.border}`,
        position: 'sticky',
        top: 0,
        background: `${palette.bg}f2`,
        backdropFilter: 'blur(6px)',
        zIndex: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16 }}>
        <Terminal size={18} color={palette.amber} />
        {site.handle}
      </div>
      <div style={{ display: 'flex', gap: 18 }}>
        <a href={contact.github} target="_blank" rel="noreferrer" style={{ color: palette.muted }} aria-label="GitHub"><Github size={19} /></a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" style={{ color: palette.muted }} aria-label="LinkedIn"><Linkedin size={19} /></a>
        <a href={`mailto:${contact.email}`} style={{ color: palette.muted }} aria-label="Email"><Mail size={19} /></a>
      </div>
    </div>
  );
}
