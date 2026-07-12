import { palette } from '../theme/palette';

export default function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        letterSpacing: '0.14em',
        color: palette.teal,
        textTransform: 'uppercase',
        marginBottom: 14,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <span style={{ color: palette.muted }}>//</span> {children}
    </div>
  );
}
