import { useState } from "react";

// ─── Colour definitions ───────────────────────────────────────────────────────
export const COLORS = {
  W: { label: "White",     symbol: "☀️", hex: "#F9FAF4", border: "#C8B560", text: "#5a4a00" },
  U: { label: "Blue",      symbol: "💧", hex: "#0E68AB", border: "#3A8FC7", text: "#ffffff" },
  B: { label: "Black",     symbol: "💀", hex: "#1A1A1A", border: "#6B6B6B", text: "#cccccc" },
  R: { label: "Red",       symbol: "🔥", hex: "#D3202A", border: "#FF5050", text: "#ffffff" },
  G: { label: "Green",     symbol: "🌲", hex: "#00733E", border: "#00A854", text: "#ffffff" },
  C: { label: "Colorless", symbol: "◇",  hex: "#9A9A9A", border: "#C0C0C0", text: "#ffffff" },
};

// ─── All colour combinations ──────────────────────────────────────────────────
export const ALL_COMBINATIONS = [
  { id: "W",     name: "Mono-White",  colors: ["W"] },
  { id: "U",     name: "Mono-Blue",   colors: ["U"] },
  { id: "B",     name: "Mono-Black",  colors: ["B"] },
  { id: "R",     name: "Mono-Red",    colors: ["R"] },
  { id: "G",     name: "Mono-Green",  colors: ["G"] },
  { id: "C",     name: "Colorless",   colors: ["C"] },
  { id: "WU",    name: "Azorius",     colors: ["W","U"] },
  { id: "WB",    name: "Orzhov",      colors: ["W","B"] },
  { id: "WR",    name: "Boros",       colors: ["W","R"] },
  { id: "WG",    name: "Selesnya",    colors: ["W","G"] },
  { id: "UB",    name: "Dimir",       colors: ["U","B"] },
  { id: "UR",    name: "Izzet",       colors: ["U","R"] },
  { id: "UG",    name: "Simic",       colors: ["U","G"] },
  { id: "BR",    name: "Rakdos",      colors: ["B","R"] },
  { id: "BG",    name: "Golgari",     colors: ["B","G"] },
  { id: "RG",    name: "Gruul",       colors: ["R","G"] },
  { id: "WUB",   name: "Esper",       colors: ["W","U","B"] },
  { id: "WUR",   name: "Jeskai",      colors: ["W","U","R"] },
  { id: "WUG",   name: "Bant",        colors: ["W","U","G"] },
  { id: "WBR",   name: "Mardu",       colors: ["W","B","R"] },
  { id: "WBG",   name: "Abzan",       colors: ["W","B","G"] },
  { id: "WRG",   name: "Naya",        colors: ["W","R","G"] },
  { id: "UBR",   name: "Grixis",      colors: ["U","B","R"] },
  { id: "UBG",   name: "Sultai",      colors: ["U","B","G"] },
  { id: "URG",   name: "Temur",       colors: ["U","R","G"] },
  { id: "BRG",   name: "Jund",        colors: ["B","R","G"] },
  { id: "WUBR",  name: "Non-Green",   colors: ["W","U","B","R"] },
  { id: "WUBG",  name: "Non-Red",     colors: ["W","U","B","G"] },
  { id: "WURG",  name: "Non-Black",   colors: ["W","U","R","G"] },
  { id: "WBRG",  name: "Non-Blue",    colors: ["W","B","R","G"] },
  { id: "UBRG",  name: "Non-White",   colors: ["U","B","R","G"] },
  { id: "WUBRG", name: "Five-Color",  colors: ["W","U","B","R","G"] },
];

// ─── Strixhaven schools ───────────────────────────────────────────────────────
export const STRIXHAVEN_SCHOOLS = [
  {
    id: "silverquill",
    name: "Silverquill",
    colors: ["W","B"],
    colorId: "WB",
    motto: "Quill & Shadow",
    flavour: "Masters of rhetoric, poetry, and intimidation",
    crest: "✒️",
    gradient: ["#2a1f3d", "#c8b560"],
  },
  {
    id: "prismari",
    name: "Prismari",
    colors: ["U","R"],
    colorId: "UR",
    motto: "Art Through Magic",
    flavour: "Elemental artists who paint with fire and water",
    crest: "🎨",
    gradient: ["#0e3d6b", "#c0392b"],
  },
  {
    id: "witherbloom",
    name: "Witherbloom",
    colors: ["B","G"],
    colorId: "BG",
    motto: "Life from Death",
    flavour: "Grim biologists who harvest the essence of life",
    crest: "🌿",
    gradient: ["#0f2d1a", "#4a0a0a"],
  },
  {
    id: "lorehold",
    name: "Lorehold",
    colors: ["R","W"],
    colorId: "WR",
    motto: "Discover the Past",
    flavour: "Archaeomancers who bring history to life",
    crest: "📜",
    gradient: ["#6b2a0e", "#c8a84b"],
  },
  {
    id: "quandrix",
    name: "Quandrix",
    colors: ["G","U"],
    colorId: "UG",
    motto: "Math is Magic",
    flavour: "Mathematicians who study the patterns of nature",
    crest: "🔢",
    gradient: ["#0a3d1f", "#0e3d6b"],
  },
];

// ─── Initial deck data ────────────────────────────────────────────────────────
const INITIAL_DECKS = [
  { id:  1, commander: "Halana and Alena, Partners",  colors: ["R","G"],           theme: "Gruul +1/+1 Counters" },
  { id:  2, commander: "Pantlazar",                   colors: ["W","R","G"],       theme: "Naya Dinosaur Tribal" },
  { id:  3, commander: "Omnath, Locus of Rage",       colors: ["R","G"],           theme: "Gruul Landfall" },
  { id:  4, commander: "Ghoulcaller Gisa",            colors: ["B"],               theme: "Mono-Black Zombie Aristocrats" },
  { id:  5, commander: "Brenard, Ginger Sculptor",    colors: ["W","U","G"],       theme: "Bant Food Golem Tokens" },
  { id:  6, commander: "Adeliz, the Cinder Wind",     colors: ["U","R"],           theme: "Izzet Wizard Spellslinger" },
  { id:  7, commander: "Kastral, the Windcrested",    colors: ["W","U"],           theme: "Azorius Bird Tribal" },
  { id:  8, commander: "Sauron, the Dark Lord",       colors: ["U","B","R"],       theme: "Grixis Ring Temptation" },
  { id:  9, commander: "Urza, Chief Artificer",       colors: ["W","U","B"],       theme: "Esper Artifacts" },
  { id: 10, commander: "Slimefoot and Squee",         colors: ["B","R","G"],       theme: "Jund Aristocrats/Reanimator" },
  { id: 11, commander: "Ulalek, Fused Atrocity",      colors: ["W","U","B","R","G"], theme: "Five-Color Eldrazi" },
  { id: 12, commander: "Krenko, Mob Boss",            colors: ["R"],               theme: "Mono-Red Goblins" },
  { id: 13, commander: "Dina, Soul Steeper",          colors: ["B","G"],           theme: "Golgari Aristocrats" },
  { id: 14, commander: "Quintorius, History Chaser",  colors: ["W","R"],           theme: "Boros Lorehold" },
  { id: 15, commander: "Saruman of Many Colors",      colors: ["W","U","R"],       theme: "Jeskai Spellslinger" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const nextId = (decks) => Math.max(0, ...decks.map(d => d.id)) + 1;

function exactColorMatch(deckColors, comboColors) {
  return comboColors.every(c => deckColors.includes(c)) &&
         deckColors.every(c => comboColors.includes(c));
}

// ─── Colour pip ───────────────────────────────────────────────────────────────
function ColorPip({ c, size = 22 }) {
  const col = COLORS[c];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, borderRadius: "50%",
      background: col.hex, border: `2px solid ${col.border}`,
      fontSize: size * 0.55, lineHeight: 1, flexShrink: 0,
      boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
    }} title={col.label}>
      {col.symbol}
    </span>
  );
}

function ColorBar({ colors }) {
  return (
    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
      {colors.map(c => <ColorPip key={c} c={c} />)}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [decks, setDecks] = useState(INITIAL_DECKS);
  const [view, setView]   = useState("decks");
  const [showAdd, setShowAdd] = useState(false);
  const [editId, setEditId]   = useState(null);
  const [search, setSearch]   = useState("");
  const [filterColor, setFilterColor] = useState(null);

  const [formCommander, setFormCommander] = useState("");
  const [formColors, setFormColors]       = useState([]);
  const [formTheme, setFormTheme]         = useState("");

  const resetForm = () => { setFormCommander(""); setFormColors([]); setFormTheme(""); };

  const openAdd = () => { resetForm(); setEditId(null); setShowAdd(true); };
  const openEdit = (deck) => {
    setFormCommander(deck.commander);
    setFormColors([...deck.colors]);
    setFormTheme(deck.theme);
    setEditId(deck.id);
    setShowAdd(true);
  };

  const toggleFormColor = (c) =>
    setFormColors(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

  const saveForm = () => {
    if (!formCommander.trim() || formColors.length === 0) return;
    if (editId) {
      setDecks(prev => prev.map(d => d.id === editId
        ? { ...d, commander: formCommander.trim(), colors: formColors, theme: formTheme.trim() }
        : d));
    } else {
      setDecks(prev => [...prev, {
        id: nextId(prev),
        commander: formCommander.trim(),
        colors: formColors,
        theme: formTheme.trim(),
      }]);
    }
    setShowAdd(false);
    resetForm();
  };

  const deleteDeck = (id) => setDecks(prev => prev.filter(d => d.id !== id));

  const coveredIds = new Set(
    ALL_COMBINATIONS
      .filter(combo => decks.some(d => exactColorMatch(d.colors, combo.colors)))
      .map(c => c.id)
  );

  const filtered = decks.filter(d => {
    const matchSearch = d.commander.toLowerCase().includes(search.toLowerCase()) ||
                        d.theme.toLowerCase().includes(search.toLowerCase());
    const matchColor  = !filterColor || d.colors.includes(filterColor);
    return matchSearch && matchColor;
  });

  const BG       = "#0d0d0f";
  const SURFACE  = "#141418";
  const SURFACE2 = "#1c1c22";
  const ACCENT   = "#c8a84b";
  const ACCENT2  = "#7b5ea7";
  const TEXT     = "#e8e4d8";
  const MUTED    = "#6b6870";

  const tabs = [
    { id: "decks",    label: "🃏 Decks" },
    { id: "coverage", label: "🗺 Coverage" },
    { id: "strixhaven", label: "🎓 Strixhaven" },
  ];

  return (
    <div style={{
      minHeight: "100vh", background: BG, color: TEXT,
      fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
      padding: "0 0 60px 0",
    }}>
      {/* ── Header ── */}
      <div style={{
        background: "linear-gradient(135deg, #0d0d0f 0%, #1a1520 50%, #0d0d0f 100%)",
        borderBottom: `1px solid ${ACCENT}44`,
        padding: "28px 24px 20px",
        position: "sticky", top: 0, zIndex: 100,
        backdropFilter: "blur(8px)",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 4, color: ACCENT, textTransform: "uppercase", marginBottom: 4 }}>
                ⚔ Commander Registry
              </div>
              <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: TEXT, lineHeight: 1 }}>
                Jon's Deck Vault
              </h1>
              <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>
                {decks.length} decks · {coveredIds.size} colour combinations covered
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {tabs.map(t => (
                <button key={t.id} onClick={() => setView(t.id)} style={{
                  padding: "8px 16px", borderRadius: 6,
                  border: `1px solid ${view === t.id ? ACCENT : "#333"}`,
                  background: view === t.id ? `${ACCENT}22` : "transparent",
                  color: view === t.id ? ACCENT : MUTED,
                  cursor: "pointer", fontFamily: "inherit", fontSize: 13,
                  letterSpacing: 0.5, transition: "all 0.2s",
                }}>{t.label}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>

        {/* ── Decks view ── */}
        {view === "decks" && (
          <>
            <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search commander or theme…"
                style={{
                  flex: 1, minWidth: 200, padding: "10px 14px",
                  background: SURFACE, border: "1px solid #333", borderRadius: 8,
                  color: TEXT, fontFamily: "inherit", fontSize: 14, outline: "none",
                }}
              />
              <div style={{ display: "flex", gap: 4 }}>
                {["W","U","B","R","G"].map(c => (
                  <button key={c} onClick={() => setFilterColor(filterColor === c ? null : c)}
                    title={COLORS[c].label} style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: filterColor === c ? COLORS[c].hex : SURFACE,
                      border: `2px solid ${filterColor === c ? COLORS[c].border : "#444"}`,
                      cursor: "pointer", fontSize: 14,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.15s",
                      boxShadow: filterColor === c ? `0 0 10px ${COLORS[c].border}66` : "none",
                    }}>{COLORS[c].symbol}</button>
                ))}
              </div>
              <button onClick={openAdd} style={{
                padding: "10px 18px", borderRadius: 8,
                background: `linear-gradient(135deg, ${ACCENT}, #a8762e)`,
                border: "none", color: "#1a1200",
                fontFamily: "inherit", fontSize: 14, fontWeight: 700,
                cursor: "pointer", whiteSpace: "nowrap",
              }}>+ Add Deck</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filtered.length === 0 && (
                <div style={{ textAlign: "center", color: MUTED, padding: "48px 0", fontSize: 16 }}>
                  No decks match your filter
                </div>
              )}
              {filtered.map(deck => (
                <DeckCard key={deck.id} deck={deck}
                  onEdit={() => openEdit(deck)}
                  onDelete={() => deleteDeck(deck.id)}
                  SURFACE={SURFACE} SURFACE2={SURFACE2} ACCENT={ACCENT} MUTED={MUTED} TEXT={TEXT}
                />
              ))}
            </div>
          </>
        )}

        {/* ── Coverage view ── */}
        {view === "coverage" && (
          <CoverageView decks={decks} coveredIds={coveredIds}
            SURFACE={SURFACE} SURFACE2={SURFACE2} ACCENT={ACCENT} ACCENT2={ACCENT2} MUTED={MUTED} TEXT={TEXT}
          />
        )}

        {/* ── Strixhaven view ── */}
        {view === "strixhaven" && (
          <StrixhavenView decks={decks}
            SURFACE={SURFACE} SURFACE2={SURFACE2} ACCENT={ACCENT} MUTED={MUTED} TEXT={TEXT}
          />
        )}
      </div>

      {/* ── Add/Edit modal ── */}
      {showAdd && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 200, padding: 16,
        }} onClick={e => { if (e.target === e.currentTarget) setShowAdd(false); }}>
          <div style={{
            background: SURFACE, border: `1px solid ${ACCENT}44`,
            borderRadius: 14, padding: 28, width: "100%", maxWidth: 440,
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}>
            <h2 style={{ margin: "0 0 20px", fontSize: 20, color: ACCENT }}>
              {editId ? "Edit Deck" : "Add New Deck"}
            </h2>

            <label style={{ fontSize: 12, color: MUTED, letterSpacing: 1, textTransform: "uppercase" }}>Commander</label>
            <input value={formCommander} onChange={e => setFormCommander(e.target.value)}
              placeholder="e.g. Atraxa, Praetors' Voice"
              style={{
                width: "100%", marginTop: 6, marginBottom: 16, padding: "10px 12px",
                background: SURFACE2, border: "1px solid #444", borderRadius: 8,
                color: TEXT, fontFamily: "inherit", fontSize: 15, outline: "none",
                boxSizing: "border-box",
              }}
            />

            <label style={{ fontSize: 12, color: MUTED, letterSpacing: 1, textTransform: "uppercase" }}>Colour Identity</label>
            <div style={{ display: "flex", gap: 8, marginTop: 8, marginBottom: 16 }}>
              {["W","U","B","R","G","C"].map(c => (
                <button key={c} onClick={() => toggleFormColor(c)} title={COLORS[c].label} style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: formColors.includes(c) ? COLORS[c].hex : SURFACE2,
                  border: `2px solid ${formColors.includes(c) ? COLORS[c].border : "#555"}`,
                  cursor: "pointer", fontSize: 16,
                  boxShadow: formColors.includes(c) ? `0 0 12px ${COLORS[c].border}88` : "none",
                  transition: "all 0.15s",
                }}>{COLORS[c].symbol}</button>
              ))}
            </div>

            <label style={{ fontSize: 12, color: MUTED, letterSpacing: 1, textTransform: "uppercase" }}>Theme / Strategy</label>
            <input value={formTheme} onChange={e => setFormTheme(e.target.value)}
              placeholder="e.g. Elf Tribal Combo"
              style={{
                width: "100%", marginTop: 6, marginBottom: 24, padding: "10px 12px",
                background: SURFACE2, border: "1px solid #444", borderRadius: 8,
                color: TEXT, fontFamily: "inherit", fontSize: 15, outline: "none",
                boxSizing: "border-box",
              }}
            />

            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button onClick={() => setShowAdd(false)} style={{
                padding: "10px 20px", borderRadius: 8, border: "1px solid #444",
                background: "transparent", color: MUTED, fontFamily: "inherit",
                fontSize: 14, cursor: "pointer",
              }}>Cancel</button>
              <button onClick={saveForm} disabled={!formCommander.trim() || formColors.length === 0} style={{
                padding: "10px 24px", borderRadius: 8, border: "none",
                background: formCommander.trim() && formColors.length > 0
                  ? `linear-gradient(135deg, ${ACCENT}, #a8762e)` : "#333",
                color: formCommander.trim() && formColors.length > 0 ? "#1a1200" : MUTED,
                fontFamily: "inherit", fontSize: 14, fontWeight: 700, cursor: "pointer",
              }}>{editId ? "Save Changes" : "Add Deck"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Deck card ────────────────────────────────────────────────────────────────
function DeckCard({ deck, onEdit, onDelete, SURFACE, SURFACE2, ACCENT, MUTED, TEXT }) {
  const [expanded, setExpanded] = useState(false);
  const borderColor = deck.colors.length === 1 ? COLORS[deck.colors[0]].border : ACCENT;

  return (
    <div style={{
      background: SURFACE, borderRadius: 10,
      border: `1px solid ${borderColor}33`,
      overflow: "hidden", transition: "all 0.2s",
      boxShadow: expanded ? `0 4px 20px ${borderColor}22` : "none",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 14,
        padding: "14px 16px", cursor: "pointer",
      }} onClick={() => setExpanded(e => !e)}>
        <ColorBar colors={deck.colors} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: TEXT, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {deck.commander}
          </div>
          {deck.theme && <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>{deck.theme}</div>}
        </div>
        <span style={{ color: MUTED, fontSize: 16, transform: expanded ? "rotate(180deg)" : "none", transition: "0.2s" }}>▾</span>
      </div>

      {expanded && (
        <div style={{
          background: SURFACE2, padding: "12px 16px",
          borderTop: "1px solid #333",
          display: "flex", gap: 10, alignItems: "center",
        }}>
          <div style={{ flex: 1, fontSize: 13, color: MUTED }}>
            <span style={{ color: TEXT, fontWeight: 600 }}>Identity: </span>
            {deck.colors.map(c => COLORS[c].label).join(" / ")}
            {deck.theme && <> · <span style={{ fontStyle: "italic" }}>{deck.theme}</span></>}
          </div>
          <button onClick={onEdit} style={{
            padding: "6px 14px", borderRadius: 6, border: `1px solid ${ACCENT}66`,
            background: "transparent", color: ACCENT,
            fontFamily: "inherit", fontSize: 12, cursor: "pointer",
          }}>Edit</button>
          <button onClick={onDelete} style={{
            padding: "6px 14px", borderRadius: 6, border: "1px solid #553333",
            background: "transparent", color: "#cc6666",
            fontFamily: "inherit", fontSize: 12, cursor: "pointer",
          }}>Remove</button>
        </div>
      )}
    </div>
  );
}

// ─── Coverage view ────────────────────────────────────────────────────────────
function CoverageView({ decks, coveredIds, SURFACE, SURFACE2, ACCENT, ACCENT2, MUTED, TEXT }) {
  const groups = [
    { label: "Mono-colour",                 ids: ["W","U","B","R","G","C"] },
    { label: "Two-colour (Guilds)",          ids: ["WU","WB","WR","WG","UB","UR","UG","BR","BG","RG"] },
    { label: "Three-colour (Shards & Wedges)", ids: ["WUB","WUR","WUG","WBR","WBG","WRG","UBR","UBG","URG","BRG"] },
    { label: "Four-colour",                 ids: ["WUBR","WUBG","WURG","WBRG","UBRG"] },
    { label: "Five-colour",                 ids: ["WUBRG"] },
  ];

  const total   = ALL_COMBINATIONS.length;
  const covered = coveredIds.size;
  const pct     = Math.round((covered / total) * 100);

  return (
    <div>
      <div style={{
        background: SURFACE, borderRadius: 12, padding: "20px 24px",
        marginBottom: 24, border: `1px solid ${ACCENT}33`,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontWeight: 700, fontSize: 16 }}>Colour Coverage</span>
          <span style={{ color: ACCENT, fontWeight: 700 }}>{covered} / {total} · {pct}%</span>
        </div>
        <div style={{ height: 8, background: "#2a2a32", borderRadius: 4, overflow: "hidden" }}>
          <div style={{
            height: "100%", width: `${pct}%`,
            background: `linear-gradient(90deg, ${ACCENT2}, ${ACCENT})`,
            borderRadius: 4, transition: "width 0.5s",
          }} />
        </div>
        <div style={{ marginTop: 10, fontSize: 13, color: MUTED }}>
          {total - covered} combinations still uncovered — lots of room to grow! 🌱
        </div>
      </div>

      {groups.map(group => (
        <div key={group.label} style={{ marginBottom: 24 }}>
          <h3 style={{ margin: "0 0 10px", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: MUTED }}>
            {group.label}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {group.ids.map(id => {
              const combo      = ALL_COMBINATIONS.find(c => c.id === id);
              const have       = coveredIds.has(id);
              const matchDecks = decks.filter(d => exactColorMatch(d.colors, combo.colors));
              return (
                <div key={id}
                  title={have ? matchDecks.map(d => d.commander).join(", ") : `Missing: ${combo.name}`}
                  style={{
                    background: have ? `${ACCENT}18` : SURFACE,
                    border: `1px solid ${have ? ACCENT + "55" : "#2a2a32"}`,
                    borderRadius: 8, padding: "8px 12px",
                    minWidth: 80, textAlign: "center",
                    opacity: have ? 1 : 0.55,
                    transition: "all 0.15s",
                  }}>
                  <div style={{ display: "flex", gap: 3, justifyContent: "center", marginBottom: 4 }}>
                    {combo.colors.map(c => <ColorPip key={c} c={c} size={16} />)}
                  </div>
                  <div style={{ fontSize: 11, color: have ? TEXT : MUTED, fontWeight: have ? 600 : 400 }}>
                    {combo.name}
                  </div>
                  {have
                    ? <div style={{ fontSize: 10, color: ACCENT, marginTop: 2 }}>✓ {matchDecks.length} deck{matchDecks.length > 1 ? "s" : ""}</div>
                    : <div style={{ fontSize: 10, color: "#cc6644", marginTop: 2 }}>✗ missing</div>
                  }
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Strixhaven view ──────────────────────────────────────────────────────────
function StrixhavenView({ decks, SURFACE, SURFACE2, ACCENT, MUTED, TEXT }) {
  const covered = STRIXHAVEN_SCHOOLS.filter(school =>
    decks.some(d => exactColorMatch(d.colors, school.colors))
  ).length;

  return (
    <div>
      {/* Header card */}
      <div style={{
        background: SURFACE, borderRadius: 12, padding: "20px 24px",
        marginBottom: 28, border: `1px solid ${ACCENT}33`,
        backgroundImage: "radial-gradient(ellipse at top right, #2a1f3d44, transparent)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 4, color: ACCENT, textTransform: "uppercase", marginBottom: 6 }}>
              🎓 Arcavios University
            </div>
            <h2 style={{ margin: 0, fontSize: 22, color: TEXT }}>Strixhaven Schools</h2>
            <p style={{ margin: "6px 0 0", fontSize: 13, color: MUTED, maxWidth: 480 }}>
              The five colleges of Strixhaven each represent a unique two-colour philosophy.
              Which halls have you represented in your collection?
            </p>
          </div>
          <div style={{
            background: covered === 5 ? `${ACCENT}22` : "#1a1a22",
            border: `1px solid ${covered === 5 ? ACCENT : "#333"}`,
            borderRadius: 10, padding: "12px 20px", textAlign: "center", minWidth: 100,
          }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: covered === 5 ? ACCENT : TEXT }}>
              {covered}/5
            </div>
            <div style={{ fontSize: 11, color: MUTED, letterSpacing: 1, textTransform: "uppercase" }}>
              {covered === 5 ? "Complete! 🎉" : "Schools"}
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          {STRIXHAVEN_SCHOOLS.map(school => {
            const have = decks.some(d => exactColorMatch(d.colors, school.colors));
            return (
              <div key={school.id} title={school.name} style={{
                flex: 1, height: 6, borderRadius: 3,
                background: have
                  ? `linear-gradient(90deg, ${COLORS[school.colors[0]].border}, ${COLORS[school.colors[1]].border})`
                  : "#2a2a32",
                transition: "background 0.3s",
              }} />
            );
          })}
        </div>
      </div>

      {/* School cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {STRIXHAVEN_SCHOOLS.map(school => {
          const matchDecks = decks.filter(d => exactColorMatch(d.colors, school.colors));
          const have = matchDecks.length > 0;
          const c0 = COLORS[school.colors[0]];
          const c1 = COLORS[school.colors[1]];

          return (
            <div key={school.id} style={{
              background: SURFACE,
              border: `1px solid ${have ? c0.border + "55" : "#252528"}`,
              borderRadius: 14, overflow: "hidden",
              boxShadow: have ? `0 4px 24px ${c0.border}18` : "none",
              transition: "all 0.2s",
            }}>
              {/* Top banner */}
              <div style={{
                background: `linear-gradient(135deg, ${school.gradient[0]}, ${school.gradient[1]})`,
                padding: "18px 20px",
                display: "flex", alignItems: "center", gap: 16,
                opacity: have ? 1 : 0.5,
              }}>
                <div style={{ fontSize: 36, lineHeight: 1 }}>{school.crest}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 2 }}>
                    {school.name}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", fontStyle: "italic" }}>
                    "{school.motto}"
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  {school.colors.map(c => <ColorPip key={c} c={c} size={26} />)}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 13, color: MUTED, marginBottom: 6 }}>
                    {school.flavour}
                  </div>
                  <div style={{ fontSize: 12, color: MUTED }}>
                    Colour identity: <span style={{ color: TEXT }}>
                      {school.colors.map(c => COLORS[c].label).join(" / ")}
                    </span>
                  </div>
                </div>

                {have ? (
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: ACCENT, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>
                      ✓ Enrolled
                    </div>
                    {matchDecks.map(d => (
                      <div key={d.id} style={{
                        fontSize: 12, color: TEXT, background: SURFACE2,
                        borderRadius: 6, padding: "4px 10px", marginBottom: 3,
                        border: "1px solid #333",
                      }}>
                        {d.commander}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{
                    fontSize: 13, color: "#cc6644", fontStyle: "italic",
                    background: "#cc664410", borderRadius: 8, padding: "8px 14px",
                    border: "1px solid #cc664430",
                  }}>
                    ✗ Not yet enrolled
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
