import { palette } from '../theme/palette';

export default function ProjectCard({ p }) {
  return (
    <div
      style={{
        background: palette.panel,
        border: `1px solid ${palette.border}`,
        borderRadius: 10,
        padding: '22px 22px 20px',
      }}
    >
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 19, color: palette.text, marginBottom: 4 }}>
        {p.title}
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: palette.teal, marginBottom: 16 }}>
        {p.role}
      </div>
      {[['Problem', p.problem], ['Build', p.build], ['Outcome', p.outcome]].map(([label, text], i) => (
        <div key={i} style={{ marginBottom: i === 2 ? 0 : 12 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: palette.amber, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>
            {label}
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14.5, color: palette.muted, lineHeight: 1.6 }}>
            {text}
          </div>
        </div>
      ))}
    </div>
  );
}
