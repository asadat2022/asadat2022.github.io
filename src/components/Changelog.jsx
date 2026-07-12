import { palette } from '../theme/palette';
import { releases } from '../data/content';

export default function Changelog() {
  return (
    <div style={{ position: 'relative', paddingLeft: 28 }}>
      <div style={{ position: 'absolute', left: 6, top: 6, bottom: 6, width: 2, background: palette.border }} />
      {releases.map((r, i) => (
        <div key={i} style={{ position: 'relative', marginBottom: i === releases.length - 1 ? 0 : 40 }}>
          <div
            style={{
              position: 'absolute',
              left: -28,
              top: 4,
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: r.current ? palette.amber : palette.panelAlt,
              border: `2px solid ${r.current ? palette.amber : palette.border}`,
            }}
          />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: palette.text, fontSize: 16 }}>
              {r.version}
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: palette.teal,
                border: `1px solid ${palette.teal}55`,
                borderRadius: 20,
                padding: '2px 9px',
              }}
            >
              {r.tag}
            </span>
            {r.current && (
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: palette.amber,
                  border: `1px solid ${palette.amber}66`,
                  borderRadius: 20,
                  padding: '2px 9px',
                }}
              >
                latest
              </span>
            )}
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: palette.muted }}>
              {r.date}
            </span>
          </div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: palette.text, marginBottom: 8 }}>
            {r.title}
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, color: palette.muted, fontFamily: "'Inter', sans-serif", fontSize: 14.5, lineHeight: 1.7 }}>
            {r.notes.map((n, j) => (
              <li key={j} style={{ marginBottom: 4 }}>{n}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
