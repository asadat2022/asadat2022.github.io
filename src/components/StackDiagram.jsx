import { palette } from '../theme/palette';
import { stackLayers } from '../data/content';

export default function StackDiagram() {
  return (
    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
      {stackLayers.map((layer, i) => {
        const Icon = layer.icon;
        return (
          <div
            key={i}
            style={{
              background: palette.panel,
              border: `1px solid ${palette.border}`,
              borderRadius: 10,
              padding: '20px 18px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Icon size={18} color={palette.amber} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: palette.text }}>
                {layer.label}
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {layer.items.map((item, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12.5,
                    color: palette.muted,
                    background: palette.panelAlt,
                    border: `1px solid ${palette.border}`,
                    borderRadius: 6,
                    padding: '4px 9px',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
