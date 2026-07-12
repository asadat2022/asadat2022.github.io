import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Github, Linkedin, Mail, GitBranch, Tag, Layers, Database, Code2, ExternalLink, ChevronRight } from 'lucide-react';

const palette = {
  bg: '#0F1419',
  panel: '#161B22',
  panelAlt: '#1C232C',
  border: '#262D36',
  text: '#E6E8EB',
  muted: '#8B949E',
  amber: '#E8A33D',
  teal: '#4FB0A5',
};

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap');
`;

const TERMINAL_LINES = [
  { cmd: 'whoami', out: 'Muhammad Asad Tanveer' },
  { cmd: 'role --current', out: 'Full-Stack Developer @ sandyApps' },
  { cmd: 'stack --primary', out: 'Laravel · React · Node.js · MySQL · MongoDB' },
  { cmd: 'status', out: 'open to new opportunities' },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
  }, []);
  return reduced;
}

function TerminalHero() {
  const reduced = useReducedMotion();
  const [displayed, setDisplayed] = useState([]);
  const [cursorOn, setCursorOn] = useState(true);
  const doneRef = useRef(false);

  useEffect(() => {
    if (reduced) {
      setDisplayed(TERMINAL_LINES);
      doneRef.current = true;
      return;
    }
    let lineIdx = 0;
    let charIdx = 0;
    let phase = 'cmd';
    let cancelled = false;

    function tick() {
      if (cancelled || lineIdx >= TERMINAL_LINES.length) {
        doneRef.current = true;
        return;
      }
      const line = TERMINAL_LINES[lineIdx];
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

function SectionLabel({ children }) {
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

const RELEASES = [
  {
    version: 'v1.0.0',
    tag: 'frontend',
    date: 'Mar 2021 – Sep 2021',
    title: 'Initial release',
    notes: [
      'Learned front-end fundamentals building real-world projects in React and Angular',
      'Shipped an e-commerce interface (Angular) and a quiz application (React)',
    ],
  },
  {
    version: 'v2.0.0',
    tag: 'mobile · blockchain',
    date: 'Oct 2021 – Mar 2023',
    title: 'Expanded platform support',
    notes: [
      'Joined sandyApps as a Front-End Developer, building responsive UIs with React',
      'Branched into React Native, shipping a decentralized mobile app with Ethereum wallet and smart-contract integration',
    ],
  },
  {
    version: 'v3.0.0',
    tag: 'full-stack',
    date: 'Apr 2023 – Present',
    title: 'Current release',
    current: true,
    notes: [
      'Own end-to-end delivery on a cybersecurity platform — database, API, and frontend',
      'Build and maintain dashboards integrating third-party tools using Laravel, React, and Node.js',
      'Manage MySQL and MongoDB data structures behind new platform features',
    ],
  },
];

function Changelog() {
  return (
    <div style={{ position: 'relative', paddingLeft: 28 }}>
      <div style={{ position: 'absolute', left: 6, top: 6, bottom: 6, width: 2, background: palette.border }} />
      {RELEASES.map((r, i) => (
        <div key={i} style={{ position: 'relative', marginBottom: i === RELEASES.length - 1 ? 0 : 40 }}>
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

const STACK_LAYERS = [
  { label: 'Frontend', icon: Code2, items: ['React', 'React Native', 'JavaScript', 'HTML/CSS', 'Tailwind'] },
  { label: 'Backend', icon: Layers, items: ['Laravel', 'PHP', 'Node.js'] },
  { label: 'Data', icon: Database, items: ['MySQL', 'MongoDB'] },
];

function StackDiagram() {
  return (
    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
      {STACK_LAYERS.map((layer, i) => {
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

const PROJECTS = [
  {
    title: 'Cybersecurity Platform',
    role: 'Full-Stack Developer',
    problem: 'Security teams needed a single place to monitor third-party tools instead of switching between separate vendor dashboards.',
    build: 'Built and maintain unified dashboards integrating third-party security tools, with a queued job pipeline for incident automation and configurable multi-channel notifications.',
    outcome: 'Reduced manual monitoring overhead and gave clients real-time visibility into incidents from one interface.',
  },
  {
    title: 'Decentralized Mobile App',
    role: 'React Native / Blockchain Developer',
    problem: 'A mobile-first product needed native wallet and smart-contract interaction without relying on a browser extension.',
    build: 'Built a React Native app integrating Ethereum wallet connections and on-chain smart-contract calls directly in the mobile client.',
    outcome: 'Delivered a working mobile blockchain experience end-to-end, from wallet auth to contract interaction.',
  },
];

function ProjectCard({ p }) {
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

export default function Portfolio() {
  return (
    <div style={{ background: palette.bg, minHeight: '100vh', color: palette.text }}>
      <style>{fontImport}</style>

      {/* Nav */}
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
          asad.dev
        </div>
        <div style={{ display: 'flex', gap: 18 }}>
          <a href="#" style={{ color: palette.muted }} aria-label="GitHub"><Github size={19} /></a>
          <a href="#" style={{ color: palette.muted }} aria-label="LinkedIn"><Linkedin size={19} /></a>
          <a href="#" style={{ color: palette.muted }} aria-label="Email"><Mail size={19} /></a>
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '64px 32px 40px', display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
        <div style={{ flex: '1 1 360px', minWidth: 280 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: palette.teal, marginBottom: 14 }}>
            Multan, Punjab, Pakistan
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, margin: '0 0 18px' }}>
            Muhammad Asad Tanveer
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: palette.muted, lineHeight: 1.65, maxWidth: 440, margin: '0 0 24px' }}>
            Full-stack developer who started in front-end and grew into owning delivery end-to-end — database to interface — on a cybersecurity platform.
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

      {/* About */}
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 32px' }}>
        <SectionLabel>about</SectionLabel>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: palette.muted, lineHeight: 1.75, maxWidth: 720 }}>
          I'm a full-stack developer working primarily with Laravel, React, and Node.js. My path started
          in front-end development — building responsive interfaces in React and Angular on early projects
          to sharpen my skills. That grew into a full-time role at sandyApps, where I now own end-to-end
          delivery on a cybersecurity platform: designing databases, building APIs, and shipping the
          interfaces clients use every day. Along the way I've also worked in mobile and blockchain
          development, building a decentralized app with React Native and Ethereum integration. I hold a
          BSCS from the University of Southern Punjab, Multan.
        </p>
      </div>

      {/* Changelog */}
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 32px' }}>
        <SectionLabel>career changelog</SectionLabel>
        <Changelog />
      </div>

      {/* Stack */}
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 32px' }}>
        <SectionLabel>stack</SectionLabel>
        <StackDiagram />
      </div>

      {/* Projects */}
      <div id="projects" style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 32px' }}>
        <SectionLabel>selected work</SectionLabel>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: palette.muted, marginBottom: 20, fontStyle: 'italic' }}>
          Most of my production work is under client NDAs, so these are described rather than linked.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
          {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={{ maxWidth: 1040, margin: '0 auto', padding: '50px 32px 80px' }}>
        <SectionLabel>connect()</SectionLabel>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="mailto:you@example.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: palette.panel, border: `1px solid ${palette.border}`, borderRadius: 8, padding: '12px 18px', color: palette.text, textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
            <Mail size={16} color={palette.amber} /> Email
          </a>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: palette.panel, border: `1px solid ${palette.border}`, borderRadius: 8, padding: '12px 18px', color: palette.text, textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
            <Linkedin size={16} color={palette.amber} /> LinkedIn
          </a>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: palette.panel, border: `1px solid ${palette.border}`, borderRadius: 8, padding: '12px 18px', color: palette.text, textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
            <Github size={16} color={palette.amber} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
