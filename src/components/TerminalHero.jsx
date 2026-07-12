import React, { useState, useEffect, useRef } from 'react';
import { palette } from '../theme/palette';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { terminalLines } from '../data/content';

export default function TerminalHero() {
  const reduced = useReducedMotion();
  const [displayed, setDisplayed] = useState([]);
  const [cursorOn, setCursorOn] = useState(true);
  const doneRef = useRef(false);

  useEffect(() => {
    if (reduced) {
      setDisplayed(terminalLines);
      doneRef.current = true;
      return;
    }
    let lineIdx = 0;
    let charIdx = 0;
    let phase = 'cmd';
    let cancelled = false;

    function tick() {
      if (cancelled || lineIdx >= terminalLines.length) {
        doneRef.current = true;
        return;
      }
      const line = terminalLines[lineIdx];
      const target = phase === 'cmd' ? line.cmd : line.out;

      setDisplayed((prev) => {
        const next = [...prev];
        if (!next[lineIdx]) next[lineIdx] = { cmd: '', out: '', outDone: false };
        if (phase === 'cmd') next[lineIdx].cmd = target.slice(0, charIdx + 1);
        else next[lineIdx].out = target.slice(0, charIdx + 1);
        return next;
      });

      charIdx++;
      if (charIdx >= target.length) {
        if (phase === 'cmd') {
          phase = 'out';
          charIdx = 0;
          setTimeout(tick, 260);
          return;
        } else {
          setDisplayed((prev) => {
            const next = [...prev];
            next[lineIdx].outDone = true;
            return next;
          });
          lineIdx++;
          phase = 'cmd';
          charIdx = 0;
          setTimeout(tick, 380);
          return;
        }
      }
      setTimeout(tick, phase === 'cmd' ? 38 : 14);
    }
    tick();
    return () => { cancelled = true; };
  }, [reduced]);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((c) => !c), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        background: palette.panel,
        border: `1px solid ${palette.border}`,
        borderRadius: '10px',
        maxWidth: '640px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#5f5751' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#5f5751' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#5f5751' }} />
        <span
          style={{
            marginLeft: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: palette.muted,
          }}
        >
          asad@sandyapps: ~
        </span>
      </div>
      <div style={{ padding: '22px 20px 26px', fontFamily: "'JetBrains Mono', monospace", fontSize: 14, lineHeight: 1.9, minHeight: 190 }}>
        {displayed.map((line, i) => (
          <div key={i}>
            <span style={{ color: palette.teal }}>➜ </span>
            <span style={{ color: palette.text }}>{line.cmd}</span>
            {(!line.outDone && i === displayed.length - 1) && line.out === '' && cursorOn && (
              <span style={{ color: palette.amber }}>▍</span>
            )}
            {line.out && (
              <div style={{ color: palette.amber, paddingLeft: 20 }}>
                {line.out}
                {!line.outDone && i === displayed.length - 1 && cursorOn && <span>▍</span>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
