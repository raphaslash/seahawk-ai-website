/* @ds-bundle: {"format":4,"namespace":"GoldenHourKitchenTasteBuddyDS_b05d19","components":[{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/display/Tooltip.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"MatchScore","sourcePath":"components/recipe/MatchScore.jsx"},{"name":"MatchSeal","sourcePath":"components/recipe/MatchSeal.jsx"},{"name":"PantryChip","sourcePath":"components/recipe/PantryChip.jsx"},{"name":"RecipeCard","sourcePath":"components/recipe/RecipeCard.jsx"},{"name":"StreakFlame","sourcePath":"components/recipe/StreakFlame.jsx"}],"sourceHashes":{"components/display/Card.jsx":"4bf0c3b74a5e","components/display/Tabs.jsx":"3a2f92401ca4","components/display/Tag.jsx":"aeec67053db9","components/display/Tooltip.jsx":"8de6f57b4d4c","components/feedback/Dialog.jsx":"9ba926eb4c19","components/feedback/Toast.jsx":"f882d8d7b7e0","components/forms/Button.jsx":"1950b4d44277","components/forms/Checkbox.jsx":"1f0680aa8455","components/forms/IconButton.jsx":"897c41909e86","components/forms/Input.jsx":"8560b2e5bd58","components/forms/Radio.jsx":"e553e4d0c43e","components/forms/Select.jsx":"45b26016fa03","components/forms/Switch.jsx":"c54663b7c132","components/recipe/MatchScore.jsx":"cefdd4a0c0fa","components/recipe/MatchSeal.jsx":"688d37f1b04f","components/recipe/PantryChip.jsx":"d0de0afa416e","components/recipe/RecipeCard.jsx":"6dc3621f370e","components/recipe/StreakFlame.jsx":"4b3dc372c4c0","ui_kits/taste-buddy/app.jsx":"2fed8fd1c946","ui_kits/taste-buddy/data.js":"e629f2312cc6","ui_kits/taste-buddy/screens.jsx":"e703cf6e2ca9"},"inlinedExternals":[],"unexposedExports":[{"name":"tier","sourcePath":"components/recipe/MatchScore.jsx"}]} */

(() => {

const __ds_ns = (window.GoldenHourKitchenTasteBuddyDS_b05d19 = window.GoldenHourKitchenTasteBuddyDS_b05d19 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Card.jsx
try { (() => {
function Card({
  children,
  raised,
  dark,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--surface-dark-raised)' : 'var(--surface-card)',
      color: dark ? 'var(--ink-inverse)' : 'var(--ink-1)',
      borderRadius: 'var(--radius-md)',
      border: dark ? 'none' : '1px solid var(--border-soft)',
      boxShadow: raised ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      padding: 'var(--space-5)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      background: 'var(--cream-2)',
      borderRadius: 'var(--radius-pill)',
      padding: 4,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    role: "tab",
    "aria-selected": t === active,
    onClick: () => onChange && onChange(t),
    style: {
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 14,
      fontWeight: 700,
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      background: t === active ? 'var(--toasted-charcoal)' : 'transparent',
      color: t === active ? 'var(--ink-inverse)' : 'var(--ink-2)',
      transition: 'all var(--dur-med) var(--ease-out)'
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
const tones = {
  neutral: ['var(--cream-2)', 'var(--ink-2)'],
  fresh: ['var(--sage-tint)', 'var(--sage-dark)'],
  warm: ['var(--honey-tint)', '#9a6b14'],
  heat: ['var(--paprika-tint)', 'var(--paprika-dark)'],
  earth: ['var(--terracotta-tint)', '#8a5238']
};
function Tag({
  tone = 'neutral',
  children,
  style
}) {
  const [bg, fg] = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  text,
  children
}) {
  const [show, setShow] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--toasted-charcoal)',
      color: 'var(--ink-inverse)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-raised)',
      zIndex: 10
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(42,33,27,.45)',
      display: 'grid',
      placeItems: 'center',
      zIndex: 100,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-pop)',
      padding: 'var(--space-6)',
      maxWidth: 440,
      width: 'calc(100% - 48px)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      margin: '0 0 12px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-2)',
      lineHeight: 1.55
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 24
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'neutral',
  children,
  style
}) {
  const border = {
    neutral: 'var(--border-strong)',
    fresh: 'var(--sage-leaf)',
    warm: 'var(--honey-butter)',
    heat: 'var(--paprika)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--toasted-charcoal)',
      color: 'var(--ink-inverse)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      padding: '12px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-pop)',
      borderLeft: 'none',
      borderBottom: '3px solid ' + border,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const {
  useState
} = React;
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  onClick,
  style
}) {
  const [hov, setHov] = useState(false),
    [act, setAct] = useState(false);
  const pad = {
    sm: '6px 14px',
    md: '10px 20px',
    lg: '14px 28px'
  }[size];
  const fs = {
    sm: 14,
    md: 16,
    lg: 17
  }[size];
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: fs,
    padding: pad,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '2px solid transparent',
    transition: 'all var(--dur-fast) var(--ease-out)',
    transform: act && !disabled ? 'scale(.97)' : 'none',
    opacity: disabled ? .5 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8
  };
  const v = {
    primary: {
      background: hov && !disabled ? 'var(--accent-hover)' : 'var(--accent)',
      color: '#fff'
    },
    secondary: {
      background: hov && !disabled ? 'var(--cream-2)' : 'transparent',
      color: 'var(--ink-1)',
      borderColor: 'var(--toasted-charcoal)'
    },
    ghost: {
      background: hov && !disabled ? 'var(--honey-tint)' : 'transparent',
      color: 'var(--ink-1)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => {
      setHov(false);
      setAct(false);
    },
    onMouseDown: () => setAct(true),
    onMouseUp: () => setAct(false),
    style: {
      ...base,
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 22,
      height: 22,
      borderRadius: 7,
      flexShrink: 0,
      border: '2px solid ' + (checked ? 'var(--paprika)' : 'var(--border-strong)'),
      background: checked ? 'var(--paprika)' : 'var(--surface-card)',
      display: 'grid',
      placeItems: 'center',
      transition: 'all var(--dur-fast) var(--ease-spring)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5.5 4.2 8.5 11 1.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
const {
  useState
} = React;
function IconButton({
  label,
  children,
  onClick,
  dark,
  style
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hov ? dark ? 'var(--charcoal-2)' : 'var(--honey-tint)' : 'transparent',
      color: dark ? 'var(--ink-inverse)' : 'var(--ink-1)',
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  hint,
  type = 'text',
  value,
  onChange,
  placeholder,
  style
}) {
  const [foc, setFoc] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '10px 14px',
      fontSize: 16,
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-1)',
      background: 'var(--surface-card)',
      border: '1.5px solid ' + (foc ? 'var(--paprika)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: foc ? 'var(--focus-ring)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--ink-3)',
      marginTop: 5
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(true),
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      flexShrink: 0,
      border: '2px solid ' + (checked ? 'var(--paprika)' : 'var(--border-strong)'),
      background: 'var(--surface-card)',
      display: 'grid',
      placeItems: 'center',
      transition: 'all var(--dur-fast) var(--ease-spring)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--paprika)',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-spring)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      width: '100%',
      padding: '10px 14px',
      fontSize: 16,
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-1)',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      ...style
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--sage-leaf)' : 'var(--cream-3)',
      position: 'relative',
      transition: 'background var(--dur-med) var(--ease-out)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-card)',
      transition: 'left var(--dur-med) var(--ease-spring)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/recipe/MatchScore.jsx
try { (() => {
function tier(v) {
  return v >= 90 ? ['var(--match-perfect)', '#fff'] : v >= 70 ? ['var(--match-great)', 'var(--ink-1)'] : v >= 50 ? ['var(--match-good)', '#fff'] : ['var(--cream-3)', 'var(--match-stretch)'];
}
function MatchScore({
  value = 0,
  size = 'md',
  style
}) {
  const [bg, fg] = tier(value);
  const s = size === 'lg' ? {
    fontSize: 20,
    padding: '8px 16px'
  } : {
    fontSize: 14,
    padding: '4px 12px'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      borderRadius: 'var(--radius-pill)',
      ...s,
      ...style
    }
  }, value, "% match");
}
Object.assign(__ds_scope, { tier, MatchScore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/recipe/MatchScore.jsx", error: String((e && e.message) || e) }); }

// components/recipe/MatchSeal.jsx
try { (() => {
function MatchSeal({
  size = 56,
  style
}) {
  const lobes = [...Array(12)].map((_, i) => {
    const a = i / 12 * Math.PI * 2;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: 32 + 24 * Math.cos(a),
      cy: 32 + 24 * Math.sin(a),
      r: "7.5",
      fill: "var(--paprika)"
    });
  });
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    style: style,
    "aria-label": "Perfect match"
  }, lobes, /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "26",
    fill: "var(--paprika)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "20",
    fill: "#FFFDF7",
    stroke: "var(--honey-butter)",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 32.5 29.5 39 42 25.5",
    fill: "none",
    stroke: "var(--toasted-charcoal)",
    strokeWidth: "4.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { MatchSeal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/recipe/MatchSeal.jsx", error: String((e && e.message) || e) }); }

// components/recipe/PantryChip.jsx
try { (() => {
const {
  useState
} = React;
function PantryChip({
  emoji,
  label,
  onRemove,
  style
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      boxShadow: hov ? 'var(--shadow-card)' : 'none',
      transition: 'box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, emoji), label, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": 'Remove ' + label,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--ink-3)',
      fontSize: 14,
      padding: 0,
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { PantryChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/recipe/PantryChip.jsx", error: String((e && e.message) || e) }); }

// components/recipe/RecipeCard.jsx
try { (() => {
const {
  useState
} = React;
const artBg = {
  heat: 'var(--paprika-tint)',
  fresh: 'var(--sage-tint)',
  warm: 'var(--honey-tint)',
  earth: 'var(--terracotta-tint)'
};
function RecipeCard({
  emoji = '🍳',
  title,
  match = 0,
  time,
  have,
  need,
  tags = [],
  tone = 'warm',
  onClick,
  style
}) {
  const [hov, setHov] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: 260,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)',
      boxShadow: hov ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      transform: hov ? 'translateY(-3px)' : 'none',
      transition: 'all var(--dur-med) var(--ease-out)',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: artBg[tone] || artBg.warm,
      height: 110,
      display: 'grid',
      placeItems: 'center',
      fontSize: 52
    }
  }, emoji), match >= 100 && /*#__PURE__*/React.createElement(__ds_scope.MatchSeal, {
    size: 44,
    style: {
      position: 'absolute',
      top: 88,
      right: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MatchScore, {
    value: match
  }), time && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.2,
      marginBottom: 6
    }
  }, title), have != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: need ? 'var(--ink-2)' : 'var(--sage-dark)',
      fontWeight: 600,
      marginBottom: tags.length ? 10 : 0
    }
  }, need ? `You have ${have} of ${have + need} — need ${need} more` : 'You have everything ✓'), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t.label || t,
    tone: t.tone || 'neutral'
  }, t.label || t)))));
}
Object.assign(__ds_scope, { RecipeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/recipe/RecipeCard.jsx", error: String((e && e.message) || e) }); }

// components/recipe/StreakFlame.jsx
try { (() => {
function StreakFlame({
  size = 56,
  count,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    "aria-label": "Cooking streak"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "32",
    cy: "55",
    rx: "17",
    ry: "5",
    fill: "var(--toasted-charcoal)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 6c2 8-10 13-10 26a10 10 0 0 0 3 7c-6-2-12-8-12-16C13 34 8 38 8 45c0 9 11 14 24 14s24-5 24-14c0-7-5-11-5-22 0 8-6 14-12 16a10 10 0 0 0 3-7C42 19 30 14 32 6Z",
    fill: "var(--honey-butter)",
    transform: "translate(0,-2) scale(.98)",
    "transform-origin": "32 32"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 22c1 6-7 9-7 17 0 6 4 9 7 9s7-3 7-9c0-8-8-11-7-17Z",
    fill: "var(--paprika)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28.5",
    cy: "41",
    r: "1.6",
    fill: "var(--toasted-charcoal)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "35.5",
    cy: "41",
    r: "1.6",
    fill: "var(--toasted-charcoal)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.5 44.5q2.5 2.2 5 0",
    fill: "none",
    stroke: "var(--toasted-charcoal)",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: size * .3,
      color: 'var(--ink-1)'
    }
  }, count));
}
Object.assign(__ds_scope, { StreakFlame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/recipe/StreakFlame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/taste-buddy/app.jsx
try { (() => {
const {
  Button,
  IconButton,
  Dialog,
  Toast,
  Tag,
  MatchScore,
  MatchSeal,
  StreakFlame
} = window.GoldenHourKitchenTasteBuddyDS_b05d19;
function Nav({
  page,
  setPage
}) {
  const links = ['Tonight', 'Pantry', 'Cookbook'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(250,243,228,.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '10px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-c-wordmark.png",
    alt: "Taste Buddy",
    style: {
      height: 44,
      cursor: 'pointer'
    },
    onClick: () => setPage('Tonight')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setPage(l),
    style: {
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 700,
      padding: '8px 16px',
      borderRadius: 999,
      background: page === l ? 'var(--cream-2)' : 'transparent',
      color: page === l ? 'var(--ink-1)' : 'var(--ink-2)'
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('Quiz'),
    style: {
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 700,
      padding: '8px 14px',
      borderRadius: 999,
      background: page === 'Quiz' ? 'var(--honey-tint)' : 'transparent',
      color: 'var(--ink-1)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(StreakFlame, {
    size: 24
  }), "7-day streak"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--sage-tint)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--sage-dark)'
    }
  }, "RJ")));
}
function RecipeDialog({
  recipe,
  onClose,
  toast
}) {
  if (!recipe) return null;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: true,
    title: recipe.title,
    onClose: onClose,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Not tonight"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        toast('Saved to your cookbook');
        onClose();
      }
    }, "Cook this tonight"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44
    }
  }, recipe.emoji), /*#__PURE__*/React.createElement(MatchScore, {
    value: recipe.match,
    size: "lg"
  }), recipe.match >= 100 && /*#__PURE__*/React.createElement(MatchSeal, {
    size: 40
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px'
    }
  }, recipe.need ? `You have ${recipe.have} of ${recipe.have + recipe.need} ingredients — the missing ${recipe.need === 1 ? 'one is' : 'ones are'} easy to skip or swap.` : 'You have every single ingredient. It\'s meant to be.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, recipe.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t.label,
    tone: t.tone
  }, t.label)), /*#__PURE__*/React.createElement(Tag, null, recipe.time)));
}
function App() {
  const [page, setPage] = React.useState('Tonight');
  const [recipe, setRecipe] = React.useState(null);
  const [toastMsg, setToastMsg] = React.useState(null);
  const toast = m => {
    setToastMsg(m);
    setTimeout(() => setToastMsg(null), 2600);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    page: page,
    setPage: setPage
  }), page === 'Tonight' && /*#__PURE__*/React.createElement(TonightScreen, {
    openRecipe: setRecipe
  }), page === 'Pantry' && /*#__PURE__*/React.createElement(PantryScreen, {
    toast: toast
  }), page === 'Cookbook' && /*#__PURE__*/React.createElement(CookbookScreen, {
    openRecipe: setRecipe
  }), page === 'Quiz' && /*#__PURE__*/React.createElement(QuizScreen, {
    done: () => setPage('Tonight')
  }), /*#__PURE__*/React.createElement(RecipeDialog, {
    recipe: recipe,
    onClose: () => setRecipe(null),
    toast: toast
  }), toastMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "fresh"
  }, toastMsg)), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-soft)',
      padding: '20px 32px',
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "Made with what you've already got. \uD83E\uDED5"));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/taste-buddy/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/taste-buddy/data.js
try { (() => {
window.TB_DATA = {
  recipes: [{
    emoji: "🍜",
    title: "Weeknight miso noodles",
    match: 100,
    time: "20 min",
    have: 7,
    need: 0,
    tone: "heat",
    tags: [{
      label: "cozy",
      tone: "warm"
    }, {
      label: "spicy",
      tone: "heat"
    }],
    cat: "Comfort food"
  }, {
    emoji: "🥘",
    title: "Lazy chickpea shakshuka",
    match: 94,
    time: "25 min",
    have: 6,
    need: 1,
    tone: "warm",
    tags: [{
      label: "one-pot",
      tone: "earth"
    }, {
      label: "veggie",
      tone: "fresh"
    }],
    cat: "Comfort food"
  }, {
    emoji: "🍳",
    title: "Crispy rice with fried egg",
    match: 88,
    time: "15 min",
    have: 5,
    need: 0,
    tone: "warm",
    tags: [{
      label: "quick",
      tone: "warm"
    }],
    cat: "Quick & easy"
  }, {
    emoji: "🥗",
    title: "Charred corn & sage salad",
    match: 76,
    time: "18 min",
    have: 5,
    need: 2,
    tone: "fresh",
    tags: [{
      label: "fresh",
      tone: "fresh"
    }],
    cat: "Healthy"
  }, {
    emoji: "🍝",
    title: "Pantry puttanesca",
    match: 71,
    time: "22 min",
    have: 6,
    need: 2,
    tone: "heat",
    tags: [{
      label: "salty-good",
      tone: "earth"
    }],
    cat: "Quick & easy"
  }, {
    emoji: "🍲",
    title: "Golden lentil stew",
    match: 58,
    time: "40 min",
    have: 4,
    need: 3,
    tone: "earth",
    tags: [{
      label: "slow & warm",
      tone: "warm"
    }, {
      label: "veggie",
      tone: "fresh"
    }],
    cat: "Comfort food"
  }],
  pantry: [{
    emoji: "🧄",
    label: "Garlic"
  }, {
    emoji: "🍅",
    label: "Canned tomatoes"
  }, {
    emoji: "🍚",
    label: "Rice"
  }, {
    emoji: "🥚",
    label: "Eggs"
  }, {
    emoji: "🌶",
    label: "Chili flakes"
  }, {
    emoji: "🧅",
    label: "Onions"
  }, {
    emoji: "🫒",
    label: "Olive oil"
  }, {
    emoji: "🍋",
    label: "Lemon"
  }, {
    emoji: "🧀",
    label: "Parmesan"
  }, {
    emoji: "🥫",
    label: "Chickpeas"
  }, {
    emoji: "🍜",
    label: "Noodles"
  }, {
    emoji: "🌿",
    label: "Sage"
  }],
  cookTabs: {
    "All saved": "tab-all-saved",
    "Comfort food": "tab-comfort-food",
    "Quick & easy": "tab-quick-easy",
    "Healthy": "tab-healthy",
    "Breakfast": "tab-breakfast",
    "Desserts": "tab-desserts",
    "Favorites": "tab-favorites"
  },
  quiz: {
    q: "Last one — sweet tooth or salt tooth?",
    n: 20,
    of: 20,
    options: ["Sweet, always", "Salt, obviously", "Depends on the day", "Both. Next question."]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/taste-buddy/data.js", error: String((e && e.message) || e) }); }

// ui_kits/taste-buddy/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.GoldenHourKitchenTasteBuddyDS_b05d19;
const {
  Button,
  IconButton,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Card,
  Tag,
  Tabs,
  Tooltip,
  Dialog,
  Toast,
  RecipeCard,
  MatchScore,
  MatchSeal,
  StreakFlame,
  PantryChip
} = DS;
const D = window.TB_DATA;
function TonightScreen({
  openRecipe
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 380,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    poster: "../../assets/motion/motion-poster.jpg",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "../../assets/motion/motion-hero-loop.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(42,33,27,.82) 0%, rgba(42,33,27,.45) 45%, transparent 75%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1120,
      margin: '0 auto',
      padding: '72px 32px',
      color: 'var(--butter-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'var(--honey-butter)',
      marginBottom: 14
    }
  }, "Friday, golden hour"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 52,
      lineHeight: 1.08,
      maxWidth: 520,
      margin: 0
    }
  }, "What's for dinner? You already have it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      maxWidth: 420,
      color: 'rgba(250,243,228,.85)',
      margin: '16px 0 24px'
    }
  }, "Six recipes match your shelf tonight. One of them is perfect."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => openRecipe(D.recipes[0])
  }, "Show me tonight's matches"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '40px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 16,
      marginBottom: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      margin: 0
    }
  }, "Tonight's easy wins"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      margin: '6px 0 0'
    }
  }, "Scored against your pantry and your taste quiz.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Best match', 'Fastest', 'Fewest missing']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, D.recipes.map(r => /*#__PURE__*/React.createElement(RecipeCard, _extends({
    key: r.title
  }, r, {
    onClick: () => openRecipe(r)
  }))))));
}
function PantryScreen({
  toast
}) {
  const [items, setItems] = React.useState(D.pantry);
  const [val, setVal] = React.useState('');
  const add = () => {
    if (!val.trim()) return;
    setItems([...items, {
      emoji: '🫙',
      label: val.trim()
    }]);
    setVal('');
    toast('Added to your pantry');
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '48px 32px',
      backgroundImage: "url('../../assets/textures/texture-cream-linen.jpg')",
      backgroundSize: 'cover',
      backgroundBlendMode: 'multiply'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 36,
      margin: 0
    }
  }, "Your shelf"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      margin: '8px 0 28px'
    }
  }, items.length, " things, zero timers. Add what you've got \u2014 we'll do the matching."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end',
      maxWidth: 480,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Add to pantry",
    placeholder: "e.g. smoked paprika",
    value: val,
    onChange: e => setVal(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: add
  }, "Add it")), items.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, items.map((p, i) => /*#__PURE__*/React.createElement(PantryChip, {
    key: p.label + i,
    emoji: p.emoji,
    label: p.label,
    onRemove: () => setItems(items.filter((_, j) => j !== i))
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/empty-pantry.jpg",
    alt: "",
    style: {
      height: 200
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      margin: '12px 0 4px'
    }
  }, "Your shelf's looking peaceful."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      margin: 0
    }
  }, "Add a few staples to get matched.")));
}
function CookbookScreen({
  openRecipe
}) {
  const tabs = Object.keys(D.cookTabs);
  const [tab, setTab] = React.useState('Comfort food');
  const recipes = D.recipes.filter(r => tab === 'All saved' || r.cat === tab);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url('../../assets/tabs/${D.cookTabs[tab]}.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'opacity .4s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(250,243,228,.55)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      maxWidth: 1120,
      margin: '0 auto',
      padding: '44px 32px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 36,
      margin: '0 0 20px'
    }
  }, "Cookbook"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: tabs.slice(0, 5),
    active: tab,
    onChange: setTab,
    style: {
      marginBottom: 28,
      background: 'rgba(255,253,247,.75)'
    }
  }), recipes.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, recipes.map(r => /*#__PURE__*/React.createElement(RecipeCard, _extends({
    key: r.title
  }, r, {
    onClick: () => openRecipe(r)
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '30px 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/empty-basket.jpg",
    alt: "",
    style: {
      height: 180
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      margin: '12px 0 4px'
    }
  }, "Nothing saved here yet."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      margin: 0
    }
  }, "Anything you cook from Tonight lands here automatically."))));
}
function QuizScreen({
  done
}) {
  const [pick, setPick] = React.useState(null);
  const q = D.quiz;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-3)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "Taste quiz"), /*#__PURE__*/React.createElement("span", null, q.n, " of ", q.of)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--cream-3)',
      borderRadius: 999,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${q.n / q.of * 100}%`,
      height: '100%',
      background: 'var(--honey-butter)',
      borderRadius: 999,
      transition: 'width .4s var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement(Card, {
    raised: true,
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      margin: '0 0 20px'
    }
  }, q.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14,
      marginBottom: 28
    }
  }, q.options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o,
    name: "quiz",
    label: o,
    checked: pick === o,
    onChange: () => setPick(o)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: done
  }, "Skip"), /*#__PURE__*/React.createElement(Button, {
    disabled: !pick,
    onClick: done
  }, "Finish \u2014 show my matches"))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 14,
      marginTop: 20
    }
  }, "No wrong answers. Except skipping dessert."));
}
Object.assign(window, {
  TonightScreen,
  PantryScreen,
  CookbookScreen,
  QuizScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/taste-buddy/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.MatchScore = __ds_scope.MatchScore;

__ds_ns.MatchSeal = __ds_scope.MatchSeal;

__ds_ns.PantryChip = __ds_scope.PantryChip;

__ds_ns.RecipeCard = __ds_scope.RecipeCard;

__ds_ns.StreakFlame = __ds_scope.StreakFlame;

})();
