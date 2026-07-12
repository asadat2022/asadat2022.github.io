import { Mail, Linkedin, Github } from 'lucide-react';
import { palette } from '../theme/palette';
import { contact } from '../data/content';
import SectionLabel from './SectionLabel';

const linkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  background: palette.panel,
  border: `1px solid ${palette.border}`,
  borderRadius: 8,
  padding: '12px 18px',
  color: palette.text,
  textDecoration: 'none',
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
};

export default function ContactSection() {
  return (
    <div id="contact" style={{ maxWidth: 1040, margin: '0 auto', padding: '50px 32px 80px' }}>
      <SectionLabel>connect()</SectionLabel>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <a href={`mailto:${contact.email}`} style={linkStyle}>
          <Mail size={16} color={palette.amber} /> Email
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" style={linkStyle}>
          <Linkedin size={16} color={palette.amber} /> LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noreferrer" style={linkStyle}>
          <Github size={16} color={palette.amber} /> GitHub
        </a>
      </div>
    </div>
  );
}
