import { ChevronRight } from 'lucide-react';
import { palette } from '../theme/palette';
import { hero } from '../data/content';
import TerminalHero from './TerminalHero';

export default function Hero() {
  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', padding: '64px 32px 40px', display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
      <div style={{ flex: '1 1 360px', minWidth: 280 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: palette.teal, marginBottom: 14 }}>
          {hero.location}
        </div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, margin: '0 0 18px' }}>
          {hero.name}
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: palette.muted, lineHeight: 1.65, maxWidth: 440, margin: '0 0 24px' }}>
          {hero.tagline}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: palette.amber, color: '#1a1204', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, padding: '11px 18px', borderRadius: 8, textDecoration: 'none' }}>
            Get in touch <ChevronRight size={15} />
          </a>
          <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${palette.border}`, color: palette.text, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, padding: '11px 18px', borderRadius: 8, textDecoration: 'none' }}>
            View work
          </a>
        </div>
      </div>
      <div style={{ flex: '1 1 320px', minWidth: 280, display: 'flex', justifyContent: 'center' }}>
        <TerminalHero />
      </div>
    </div>
  );
}
