/* @ds-bundle: {"format":4,"namespace":"SeahawkAIDesignSystem_2e2732","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"LINE_ART_VARIANTS","sourcePath":"components/motifs/LineArt.jsx"},{"name":"LineArt","sourcePath":"components/motifs/LineArt.jsx"}],"sourceHashes":{"components/core/Button.jsx":"de739e650927","components/core/Callout.jsx":"0b28e758fe9b","components/core/Card.jsx":"f03923212529","components/core/Divider.jsx":"74ca04170a6a","components/core/Kicker.jsx":"9ac936b6a892","components/core/Pill.jsx":"d3fbf81a65ba","components/core/Stat.jsx":"80f6076b8160","components/motifs/LineArt.jsx":"3779ef7998a8","ui_kits/slides/slides.jsx":"f3ddf0ab2fa6","ui_kits/stories/stories.jsx":"b4dd01a5aa5b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SeahawkAIDesignSystem_2e2732 = window.SeahawkAIDesignSystem_2e2732 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const VARIANTS = {
  filled: {
    background: "var(--green-accent)",
    color: "#fff",
    border: "1px solid var(--green-accent)"
  },
  outline: {
    background: "transparent",
    color: "var(--green-accent)",
    border: "1px solid var(--green-accent)"
  },
  black: {
    background: "#000",
    color: "#fff",
    border: "1px solid #000"
  },
  darkOutline: {
    background: "transparent",
    color: "var(--ink)",
    border: "1px solid var(--ink)"
  },
  inverted: {
    background: "#fff",
    color: "var(--green-accent)",
    border: "1px solid #fff"
  },
  outlineOnDark: {
    background: "transparent",
    color: "#fff",
    border: "1px solid #fff"
  }
};
const SIZES = {
  sm: {
    padding: "7px 16px",
    fontSize: "14px"
  },
  md: {
    padding: "10px 24px",
    fontSize: "16px"
  },
  lg: {
    padding: "14px 40px",
    fontSize: "16px"
  }
};

/**
 * Seahawk AI pill button. Universal 50px full-pill radius, scale(0.95) active press.
 */
function Button({
  variant = "filled",
  size = "md",
  as = "button",
  icon = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.filled;
  const s = SIZES[size] || SIZES.md;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === "button" ? disabled : undefined,
    onPointerDown: () => !disabled && setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      letterSpacing: "var(--track-tight)",
      lineHeight: "var(--lh-compact)",
      textDecoration: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      borderRadius: "var(--radius-pill)",
      width: fullWidth ? "100%" : "auto",
      transition: "all var(--dur-fast) ease",
      transform: pressed ? "scale(var(--press-scale))" : "scale(1)",
      opacity: disabled ? 0.45 : 1,
      ...v,
      ...s,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginLeft: "-2px"
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginRight: "-2px"
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  mint: {
    background: "var(--green-light)",
    color: "var(--green-deep)",
    accent: "var(--green-accent)"
  },
  brass: {
    background: "var(--brass-lightest)",
    color: "var(--ink)",
    accent: "var(--brass)"
  },
  deep: {
    background: "var(--green-deep)",
    color: "#fff",
    accent: "var(--brass)"
  }
};

/**
 * Callout note block — a tinted panel to spotlight a key point. `deep` for dark bands,
 * `mint` for affirmative notes, `brass` for ceremony emphasis.
 */
function Callout({
  tone = "mint",
  title = null,
  icon = null,
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.mint;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "14px",
      padding: "16px 20px",
      borderRadius: "var(--radius-card)",
      background: t.background,
      color: t.color,
      borderLeft: `3px solid ${t.accent}`,
      fontFamily: "var(--font-sans)",
      letterSpacing: "var(--track-tight)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent,
      flexShrink: 0,
      marginTop: "1px"
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "16px",
      marginBottom: children ? "4px" : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      lineHeight: "var(--lh-normal)",
      opacity: 0.92
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  default: {
    background: "var(--surface-card)",
    color: "var(--ink)"
  },
  deep: {
    background: "var(--green-deep)",
    color: "#fff"
  },
  brass: {
    background: "var(--brass-lightest)",
    color: "var(--ink)"
  },
  cool: {
    background: "var(--neutral-cool)",
    color: "var(--ink)"
  },
  mint: {
    background: "var(--green-light)",
    color: "var(--green-deep)"
  }
};

/**
 * Content card — 12px radius, whisper-soft layered shadow. `deep` variant is the
 * dark-green feature panel; shadow is dropped on non-white surfaces by default.
 */
function Card({
  variant = "default",
  padding = "24px",
  elevated = true,
  children,
  style = {},
  ...rest
}) {
  const s = SURFACES[variant] || SURFACES.default;
  const showShadow = elevated && (variant === "default" || variant === "cool");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-card)",
      padding,
      boxShadow: showShadow ? "var(--shadow-card)" : "none",
      fontFamily: "var(--font-sans)",
      letterSpacing: "var(--track-tight)",
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thin rule. Uses the system hairline; `soft` fades at the ends, `ondark` for dark surfaces.
 */
function Divider({
  variant = "hairline",
  ondark = false,
  style = {},
  ...rest
}) {
  const color = ondark ? "var(--white-24)" : "var(--hairline)";
  const base = {
    border: 0,
    height: "1px",
    width: "100%",
    margin: 0,
    ...style
  };
  if (variant === "soft") {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        ...base,
        background: `linear-gradient(90deg, transparent, ${ondark ? "var(--white-40)" : "var(--input-border)"}, transparent)`
      }
    }, rest));
  }
  if (variant === "dashed") {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        ...base,
        height: 0,
        borderTop: `1px dashed ${color}`
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      ...base,
      background: color
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  accent: "var(--green-accent)",
  brass: "var(--brass)",
  muted: "var(--ink-soft)",
  ondark: "var(--on-dark-soft)"
};

/**
 * Uppercase tracked eyebrow label — the section/kicker line above a headline.
 */
function Kicker({
  tone = "accent",
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--track-looser)",
      color: TONES[tone] || TONES.accent,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  accent: {
    background: "transparent",
    color: "var(--green-accent)",
    border: "1px solid var(--green-accent)"
  },
  brass: {
    background: "transparent",
    color: "var(--brass)",
    border: "1px solid var(--brass)"
  },
  solid: {
    background: "var(--green-accent)",
    color: "#fff",
    border: "1px solid var(--green-accent)"
  },
  mint: {
    background: "var(--green-light)",
    color: "var(--green-deep)",
    border: "1px solid transparent"
  },
  ondark: {
    background: "var(--white-10)",
    color: "#fff",
    border: "1px solid var(--white-40)"
  }
};

/**
 * Small full-pill label / tag. Brass tone is reserved for ceremony ("200★ item") moments.
 */
function Pill({
  tone = "accent",
  icon = null,
  children,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.accent;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "0.5px",
      lineHeight: 1,
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...t,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big metric block for stats/metrics slides. Serif display value in Brand Green,
 * sans label below. `dark` inverts for Brand-Deep surfaces.
 */
function Stat({
  value,
  label,
  sub = null,
  tone = "light",
  align = "left",
  style = {},
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      fontFamily: "var(--font-sans)",
      letterSpacing: "var(--track-tight)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      lineHeight: 1,
      fontSize: "clamp(40px, 6vw, 64px)",
      color: dark ? "#fff" : "var(--green-primary)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "8px",
      fontSize: "15px",
      fontWeight: 600,
      color: dark ? "var(--on-dark)" : "var(--ink)"
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2px",
      fontSize: "13px",
      fontWeight: 400,
      color: dark ? "var(--on-dark-soft)" : "var(--ink-soft)"
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/motifs/LineArt.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ----- geometry helpers (module scope) ----- */
const f = n => Number(n).toFixed(1);

// cubic bezier: p = [x0,y0, x1,y1, x2,y2, x3,y3]
function cub(p, t) {
  const mt = 1 - t,
    a = mt * mt * mt,
    b = 3 * mt * mt * t,
    c = 3 * mt * t * t,
    d = t * t * t;
  return [a * p[0] + b * p[2] + c * p[4] + d * p[6], a * p[1] + b * p[3] + c * p[5] + d * p[7]];
}
function cubTan(p, t) {
  const mt = 1 - t,
    a = 3 * mt * mt,
    b = 6 * mt * t,
    c = 3 * t * t;
  const x = a * (p[2] - p[0]) + b * (p[4] - p[2]) + c * (p[6] - p[4]);
  const y = a * (p[3] - p[1]) + b * (p[5] - p[3]) + c * (p[7] - p[5]);
  const m = Math.hypot(x, y) || 1;
  return [x / m, y / m];
}

// leaf whose BASE is exactly (x,y) — so it stays attached to a stem
function leafAt(x, y, dx, dy, len, width) {
  const tx = x + dx * len,
    ty = y + dy * len;
  const nx = -dy,
    ny = dx,
    w = len * width;
  const c1x = x + dx * len * 0.44 + nx * w,
    c1y = y + dy * len * 0.44 + ny * w;
  const c2x = x + dx * len * 0.44 - nx * w,
    c2y = y + dy * len * 0.44 - ny * w;
  return `M${f(x)} ${f(y)} Q${f(c1x)} ${f(c1y)} ${f(tx)} ${f(ty)} Q${f(c2x)} ${f(c2y)} ${f(x)} ${f(y)} Z`;
}

// one leaf growing off a stem curve at parameter t, leaning toward the tip
function leafOnCurve(p, t, side, len, width, leanDeg) {
  const [x, y] = cub(p, t);
  const [ux, uy] = cubTan(p, t);
  const nx = -uy,
    ny = ux;
  const a = leanDeg * Math.PI / 180,
    ca = Math.cos(a),
    sa = Math.sin(a);
  let dx = side * nx * ca + ux * sa,
    dy = side * ny * ca + uy * sa;
  const m = Math.hypot(dx, dy) || 1;
  dx /= m;
  dy /= m;
  return {
    x,
    y,
    dx,
    dy,
    tx: x + dx * len,
    ty: y + dy * len,
    d: leafAt(x, y, dx, dy, len, width)
  };
}

// elongated pointed feather-plume (for the wing); widest ~40% out
function plume(bx, by, angDeg, len, wid) {
  const a = angDeg * Math.PI / 180,
    dx = Math.cos(a),
    dy = Math.sin(a);
  const nx = -dy,
    ny = dx,
    tx = bx + dx * len,
    ty = by + dy * len,
    w = len * wid;
  const c1x = bx + dx * len * 0.4 + nx * w,
    c1y = by + dy * len * 0.4 + ny * w;
  const c2x = bx + dx * len * 0.4 - nx * w,
    c2y = by + dy * len * 0.4 - ny * w;
  return [`M${f(bx)} ${f(by)} Q${f(c1x)} ${f(c1y)} ${f(tx)} ${f(ty)} Q${f(c2x)} ${f(c2y)} ${f(bx)} ${f(by)} Z`, `M${f(bx)} ${f(by)} L${f(tx)} ${f(ty)}`];
}

// symmetric barbs about a central shaft B->A (feather)
function featherBarbs() {
  const B = [92, 210],
    A = [58, 14],
    N = 14;
  const ux = A[0] - B[0],
    uy = A[1] - B[1],
    um = Math.hypot(ux, uy),
    u = [ux / um, uy / um];
  const n = [-u[1], u[0]],
    a = 46 * Math.PI / 180,
    ca = Math.cos(a),
    sa = Math.sin(a);
  const out = [];
  for (let i = 0; i < N; i++) {
    const t = 0.1 + i / (N - 1) * 0.86;
    const px = B[0] + (A[0] - B[0]) * t,
      py = B[1] + (A[1] - B[1]) * t;
    const L = 9 + 41 * Math.pow(1 - t, 0.72);
    for (const s of [1, -1]) {
      const dx = s * n[0] * ca + u[0] * sa,
        dy = s * n[1] * ca + u[1] * sa;
      const cx = px + dx * L * 0.5 + u[0] * L * 0.22,
        cy = py + dy * L * 0.5 + u[1] * L * 0.22;
      out.push(`M${f(px)} ${f(py)} Q${f(cx)} ${f(cy)} ${f(px + dx * L)} ${f(py + dy * L)}`);
    }
  }
  return {
    shaft: `M${f(B[0])} ${f(B[1])} L${f(A[0])} ${f(A[1])}`,
    barbs: out
  };
}

/* ----- per-variant renderers ----- */
const VARIANTS = {
  // 1. Feather — central shaft down the middle, barbs symmetric so the angle reads
  feather: {
    vb: "0 0 150 220",
    draw: sw => {
      const {
        shaft,
        barbs
      } = featherBarbs();
      return /*#__PURE__*/React.createElement("g", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, barbs.map((d, i) => /*#__PURE__*/React.createElement("path", {
        key: i,
        d: d,
        strokeWidth: sw * 0.72
      })), /*#__PURE__*/React.createElement("path", {
        d: shaft
      }));
    }
  },
  // 2. Wing — a fan of overlapping feathers with visible spines
  wing: {
    vb: "0 0 226 152",
    draw: sw => {
      const cx = 46,
        cy = 132,
        K = 7,
        els = [];
      for (let k = 0; k < K; k++) {
        const ang = -20 - k * 9.4;
        const len = 94 + 54 * Math.sin((k + 0.5) / K * Math.PI);
        const bx = cx + k * 4.6,
          by = cy - k * 3.1;
        const [outline, spine] = plume(bx, by, ang, len, 0.12);
        els.push(/*#__PURE__*/React.createElement("path", {
          key: "o" + k,
          d: outline,
          strokeWidth: sw * 0.92
        }));
        els.push(/*#__PURE__*/React.createElement("path", {
          key: "s" + k,
          d: spine,
          strokeWidth: sw * 0.6,
          opacity: "0.65"
        }));
      }
      return /*#__PURE__*/React.createElement("g", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M18 148 Q34 139 46 132",
        strokeWidth: sw
      }), els);
    }
  },
  // 3. Flight path — directional arrow with a dotted tail
  flight: {
    vb: "0 0 244 120",
    draw: sw => /*#__PURE__*/React.createElement("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 92 C64 92 86 40 150 40 C192 40 208 62 236 54",
      strokeWidth: sw
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 104 C64 104 86 54 150 54",
      strokeWidth: sw * 0.7,
      strokeDasharray: "1 9",
      opacity: "0.75"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M224 44 L236 54 L223 63",
      strokeWidth: sw
    }), /*#__PURE__*/React.createElement("path", {
      d: "M92 24 l7 7 l7 -9",
      strokeWidth: sw * 0.8
    }), /*#__PURE__*/React.createElement("path", {
      d: "M120 20 l6 6 l6 -8",
      strokeWidth: sw * 0.8,
      opacity: "0.8"
    }))
  },
  // 4. Botanical branch — leaves grow directly off the stem, angled toward the tip
  branch: {
    vb: "0 0 224 128",
    draw: sw => {
      const p = [6, 112, 66, 104, 128, 66, 216, 26];
      const ts = [0.14, 0.3, 0.46, 0.62, 0.78, 0.9];
      const leaves = ts.map((t, i) => leafOnCurve(p, t, i % 2 ? 1 : -1, 33 - 9 * t, 0.36, 52));
      return /*#__PURE__*/React.createElement("g", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        d: `M${p[0]} ${p[1]} C${p[2]} ${p[3]} ${p[4]} ${p[5]} ${p[6]} ${p[7]}`
      }), leaves.map((l, i) => /*#__PURE__*/React.createElement("path", {
        key: i,
        d: l.d,
        strokeWidth: sw * 0.85
      })), leaves.map((l, i) => /*#__PURE__*/React.createElement("path", {
        key: "v" + i,
        d: `M${f(l.x)} ${f(l.y)} L${f(l.tx)} ${f(l.ty)}`,
        strokeWidth: sw * 0.55,
        opacity: "0.5"
      })));
    }
  },
  // 5. Swoosh — curved arrow pointing to a CTA
  swoosh: {
    vb: "0 0 200 140",
    draw: sw => /*#__PURE__*/React.createElement("g", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: sw,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10 22 C72 8 150 26 176 96"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M158 82 L177 99 L186 76"
    }))
  },
  // 6. Sprig — delicate botanical sprig with buds, leaves attached to the stem
  sprig: {
    vb: "0 0 120 164",
    draw: sw => {
      const p = [60, 158, 54, 120, 60, 86, 70, 18];
      const ts = [0.22, 0.44, 0.66, 0.84];
      const leaves = ts.map((t, i) => leafOnCurve(p, t, i % 2 ? 1 : -1, 26, 0.42, 46));
      return /*#__PURE__*/React.createElement("g", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        d: `M${p[0]} ${p[1]} C${p[2]} ${p[3]} ${p[4]} ${p[5]} ${p[6]} ${p[7]}`
      }), leaves.map((l, i) => /*#__PURE__*/React.createElement("path", {
        key: i,
        d: l.d,
        strokeWidth: sw * 0.85
      })), /*#__PURE__*/React.createElement("circle", {
        cx: "70",
        cy: "15",
        r: "3.4",
        strokeWidth: sw * 0.85
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "60",
        cy: "25",
        r: "2.4",
        strokeWidth: sw * 0.85
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "79",
        cy: "26",
        r: "2",
        strokeWidth: sw * 0.85
      }));
    }
  },
  // 7. Olive branch — opposite leaf pairs with a few olives (peace / growth)
  olive: {
    vb: "0 0 224 132",
    draw: sw => {
      const p = [8, 118, 70, 100, 130, 98, 212, 50];
      const nodes = [0.28, 0.46, 0.64, 0.82];
      const paths = [];
      nodes.forEach((t, i) => {
        [1, -1].forEach(s => {
          const l = leafOnCurve(p, t, s, 30, 0.24, 40);
          paths.push(/*#__PURE__*/React.createElement("path", {
            key: `l${i}${s}`,
            d: l.d,
            strokeWidth: sw * 0.85
          }));
          paths.push(/*#__PURE__*/React.createElement("path", {
            key: `v${i}${s}`,
            d: `M${f(l.x)} ${f(l.y)} L${f(l.tx)} ${f(l.ty)}`,
            strokeWidth: sw * 0.5,
            opacity: "0.5"
          }));
        });
      });
      [0.4, 0.6, 0.78].forEach((t, i) => {
        const [x, y] = cub(p, t),
          [ux, uy] = cubTan(p, t);
        const ox = x - uy * 11,
          oy = y + ux * 11;
        paths.push(/*#__PURE__*/React.createElement("path", {
          key: `os${i}`,
          d: `M${f(x)} ${f(y)} L${f(ox)} ${f(oy)}`,
          strokeWidth: sw * 0.5,
          opacity: "0.6"
        }));
        paths.push(/*#__PURE__*/React.createElement("ellipse", {
          key: `o${i}`,
          cx: f(ox),
          cy: f(oy),
          rx: "5.2",
          ry: "6.4",
          strokeWidth: sw * 0.85,
          transform: `rotate(${Math.atan2(ux, -uy) * 180 / Math.PI} ${f(ox)} ${f(oy)})`
        }));
      });
      return /*#__PURE__*/React.createElement("g", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        d: `M${p[0]} ${p[1]} C${p[2]} ${p[3]} ${p[4]} ${p[5]} ${p[6]} ${p[7]}`
      }), paths);
    }
  },
  // 8. Sword — upright blade with fuller, crossguard, wrapped grip, pommel
  sword: {
    vb: "0 0 92 232",
    draw: sw => /*#__PURE__*/React.createElement("g", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: sw,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M46 12 L58 150 L34 150 Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M46 26 L46 144",
      strokeWidth: sw * 0.6,
      opacity: "0.55"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 150 Q46 142 72 150"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41 150 L41 198"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M51 150 L51 198"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41 162 L51 158",
      strokeWidth: sw * 0.7,
      opacity: "0.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41 174 L51 170",
      strokeWidth: sw * 0.7,
      opacity: "0.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41 186 L51 182",
      strokeWidth: sw * 0.7,
      opacity: "0.7"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46",
      cy: "208",
      r: "9"
    }))
  },
  // 9. Kunai — a crossed pair of throwing knives with ring pommels
  kunai: {
    vb: "0 0 200 176",
    draw: sw => {
      const knife = rot => /*#__PURE__*/React.createElement("g", {
        transform: `rotate(${rot} 100 86)`
      }, /*#__PURE__*/React.createElement("path", {
        d: "M100 14 L113 60 L100 78 L87 60 Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M94 78 L94 132"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M106 78 L106 132"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M94 132 L106 132"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "100",
        cy: "144",
        r: "11"
      }));
      return /*#__PURE__*/React.createElement("g", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, knife(26), knife(-26));
    }
  },
  // 10. Spark — radiating tapered rays (AI spark; echoes the brand starburst)
  spark: {
    vb: "0 0 168 168",
    draw: sw => {
      const cx = 84,
        cy = 84,
        N = 11,
        ri = 9;
      const lens = [66, 49, 62, 46, 69, 51, 59, 44, 65, 53, 57];
      const jit = [0, 4, -3, 5, -2, 3, -5, 2, -4, 4, -2];
      const rays = [];
      for (let k = 0; k < N; k++) {
        const ang = (-90 + 360 / N * k + jit[k]) * Math.PI / 180;
        const dx = Math.cos(ang),
          dy = Math.sin(ang),
          nx = -dy,
          ny = dx;
        const len = lens[k],
          w = len * 0.16;
        const ix = cx + dx * ri,
          iy = cy + dy * ri,
          tx = cx + dx * len,
          ty = cy + dy * len;
        const mx = cx + dx * (ri + (len - ri) * 0.38),
          my = cy + dy * (ri + (len - ri) * 0.38);
        rays.push(`M${f(ix)} ${f(iy)} Q${f(mx + nx * w)} ${f(my + ny * w)} ${f(tx)} ${f(ty)} Q${f(mx - nx * w)} ${f(my - ny * w)} ${f(ix)} ${f(iy)} Z`);
      }
      return /*#__PURE__*/React.createElement("g", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: sw * 0.95,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, rays.map((d, i) => /*#__PURE__*/React.createElement("path", {
        key: i,
        d: d
      })));
    }
  }
};
const LINE_ART_VARIANTS = Object.keys(VARIANTS);

/**
 * Thin-stroke decorative line art — ten flowing motifs to rotate as section accents.
 * Render as a low-opacity background flourish or a pointer toward a CTA.
 */
function LineArt({
  variant = "feather",
  size = 160,
  color = "currentColor",
  opacity = 0.3,
  strokeWidth = 1.5,
  flip = false,
  style = {},
  ...rest
}) {
  const spec = VARIANTS[variant] || VARIANTS.feather;
  const [,, w, h] = spec.vb.split(" ").map(Number);
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: spec.vb,
    width: size,
    height: size * h / w,
    role: "presentation",
    "aria-hidden": "true",
    style: {
      color,
      opacity,
      overflow: "visible",
      pointerEvents: "none",
      transform: flip ? "scaleX(-1)" : undefined,
      ...style
    }
  }, rest), spec.draw(strokeWidth));
}
Object.assign(__ds_scope, { LINE_ART_VARIANTS, LineArt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motifs/LineArt.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/slides.jsx
try { (() => {
/* Seahawk AI — Slides UI kit. Meeting-presentation deck (1280×720).
   Composes primitives from the compiled bundle; rotates LineArt motifs 1–2 per slide. */
const NS = window.SeahawkAIDesignSystem_2e2732 || {};
const {
  Button,
  Pill,
  Card,
  Callout,
  Stat,
  Kicker,
  Divider,
  LineArt
} = NS;
const W = 1280,
  H = 720;
function SlideFrame({
  bg = "var(--neutral-warm)",
  label,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": label,
    style: {
      width: W,
      height: H,
      position: "relative",
      overflow: "hidden",
      background: bg,
      fontFamily: "var(--font-sans)",
      letterSpacing: "var(--track-tight)",
      ...style
    }
  }, children);
}
const LOGO_GREEN = "../../assets/seahawk-logo-green.png";
const LOGO_CREAM = "../../assets/seahawk-logo-cream.png";
function Wordmark({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: dark ? LOGO_CREAM : LOGO_GREEN,
    alt: "Seahawk AI",
    style: {
      height: 40,
      width: "auto",
      display: "block"
    }
  });
}
const Check = ({
  c = "var(--green-accent)"
}) => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: c,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6L9 17l-5-5"
}));
const Dot = ({
  c = "var(--ink-soft)"
}) => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: c,
  strokeWidth: "2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6L6 18"
}));

/* 1 — Title (motifs: feather + wing) */
function TitleSlide() {
  return /*#__PURE__*/React.createElement(SlideFrame, {
    label: "Title"
  }, /*#__PURE__*/React.createElement(LineArt, {
    variant: "feather",
    size: 340,
    color: "var(--green-accent)",
    opacity: 0.15,
    strokeWidth: 1.4,
    style: {
      position: "absolute",
      left: -30,
      top: 70
    }
  }), /*#__PURE__*/React.createElement(LineArt, {
    variant: "wing",
    size: 360,
    color: "var(--green-primary)",
    opacity: 0.09,
    strokeWidth: 1.4,
    flip: true,
    style: {
      position: "absolute",
      right: -40,
      bottom: 24
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: LOGO_GREEN,
    alt: "Seahawk AI",
    style: {
      position: "absolute",
      right: 56,
      top: "50%",
      transform: "translateY(-50%)",
      width: 500,
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Seahawk AI \xB7 Weekly Meeting"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 92,
      lineHeight: 1.0,
      fontWeight: 600,
      letterSpacing: "-0.16px",
      color: "var(--ink)",
      margin: "18px 0 0"
    }
  }, "Fall Kickoff"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      color: "var(--ink-soft)",
      margin: "22px 0 0",
      maxWidth: 560,
      lineHeight: 1.5
    }
  }, "What we're building this semester \u2014 and how you can jump in."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      marginTop: 38,
      fontSize: 15,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", null, "September 12"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .4
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Room 214"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .4
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Led by the core team"))));
}

/* 2 — Agenda (motif: branch) */
function AgendaSlide() {
  const items = [["01", "Recap", "Last sprint & wins", "5 min"], ["02", "Roadmap", "What ships next", "10 min"], ["03", "Demos", "Live from the crew", "15 min"], ["04", "Open floor", "Questions & ideas", "10 min"]];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    label: "Agenda"
  }, /*#__PURE__*/React.createElement(LineArt, {
    variant: "branch",
    size: 380,
    color: "var(--green-uplift)",
    opacity: 0.16,
    strokeWidth: 1.4,
    style: {
      position: "absolute",
      right: -20,
      top: 44
    }
  }), /*#__PURE__*/React.createElement(LineArt, {
    variant: "spark",
    size: 148,
    color: "var(--green-accent)",
    opacity: 0.1,
    strokeWidth: 1.6,
    style: {
      position: "absolute",
      left: -24,
      bottom: -24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      top: 150,
      right: 96
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Meeting Agenda"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 52,
      fontWeight: 600,
      color: "var(--ink)",
      margin: "12px 0 30px"
    }
  }, "What we're covering"), /*#__PURE__*/React.createElement("div", null, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "19px 0",
      borderBottom: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      border: "1px solid var(--green-accent)",
      color: "var(--green-accent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 16,
      flex: "none"
    }
  }, it[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, it[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "var(--ink-soft)"
    }
  }, it[2])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--ink-soft)",
      fontWeight: 600
    }
  }, it[3]))))));
}

/* 3 — Section divider (motif: sprig) — the dark color-block moment */
function SectionSlide() {
  return /*#__PURE__*/React.createElement(SlideFrame, {
    bg: "var(--green-deep)",
    label: "Section"
  }, /*#__PURE__*/React.createElement(LineArt, {
    variant: "sprig",
    size: 230,
    color: "var(--brass)",
    opacity: 0.3,
    strokeWidth: 1.4,
    style: {
      position: "absolute",
      right: 110,
      top: 80
    }
  }), /*#__PURE__*/React.createElement(LineArt, {
    variant: "wing",
    size: 440,
    color: "var(--brass)",
    opacity: 0.1,
    strokeWidth: 1.4,
    flip: true,
    style: {
      position: "absolute",
      right: -30,
      bottom: -24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    dark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      bottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 26,
      color: "var(--brass)",
      marginBottom: 6
    }
  }, "01"), /*#__PURE__*/React.createElement(Kicker, {
    tone: "brass"
  }, "Recap"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: 76,
      color: "#fff",
      margin: "10px 0 0",
      lineHeight: 1.04
    }
  }, "Where we left off")));
}

/* 4 — Content (motifs: wing + sprig-in-figure) */
function ContentSlide() {
  const pts = ["Ship the beta by Friday", "Onboard six new members", "Lock the demo lineup"];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    label: "Content"
  }, /*#__PURE__*/React.createElement(LineArt, {
    variant: "wing",
    size: 300,
    color: "var(--green-accent)",
    opacity: 0.12,
    strokeWidth: 1.4,
    flip: true,
    style: {
      position: "absolute",
      left: -30,
      bottom: -8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      top: 150,
      width: 600
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "This week"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 48,
      fontWeight: 600,
      color: "var(--ink)",
      margin: "12px 0 28px",
      lineHeight: 1.1
    }
  }, "Three things to land"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, pts.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Check, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: "var(--ink)"
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "mint",
    title: "Owners"
  }, "Beta \u2192 Dana \xB7 Onboarding \u2192 the crew"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 64,
      top: 150,
      width: 470,
      height: 428,
      background: "var(--surface-card)",
      borderRadius: 12,
      boxShadow: "var(--shadow-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(LineArt, {
    variant: "sprig",
    size: 126,
    color: "var(--green-light)",
    opacity: 1,
    strokeWidth: 1.8
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 16,
      fontSize: 13,
      color: "var(--ink-soft)"
    }
  }, "Screenshot / photo")));
}

/* 5 — Comparison (motif: flight, pointing before→after) */
function ComparisonSlide() {
  const before = [["Manual weekly notes", "Someone types recaps by hand"], ["Ad-hoc onboarding", "New folks left to figure it out"], ["Scattered demos", "Shown whenever, wherever"]];
  const after = [["Auto-drafted recaps", "Notes ready before you leave"], ["Guided first project", "A clear path from day one"], ["One demo showcase", "Everyone ships on the same night"]];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    label: "Comparison"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement(LineArt, {
    variant: "spark",
    size: 150,
    color: "var(--green-accent)",
    opacity: 0.1,
    strokeWidth: 1.6,
    style: {
      position: "absolute",
      right: 46,
      top: 66
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      right: 64,
      top: 116,
      bottom: 56,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Before / after"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 48,
      fontWeight: 600,
      margin: "12px 0 26px",
      color: "var(--ink)"
    }
  }, "What changed"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30,
      alignItems: "stretch",
      position: "relative",
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1,
      padding: "34px 38px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--track-looser)",
      color: "var(--ink-soft)",
      marginBottom: 6
    }
  }, "Before"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      justifyContent: "space-around"
    }
  }, before.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
      borderTop: i ? "1px solid var(--hairline)" : "none",
      paddingTop: i ? 20 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Dot, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: "var(--ink)",
      marginBottom: 3
    }
  }, b[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "var(--ink-soft)",
      lineHeight: 1.4
    }
  }, b[1])))))), /*#__PURE__*/React.createElement(Card, {
    variant: "deep",
    style: {
      flex: 1,
      padding: "34px 38px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--track-looser)",
      color: "var(--brass)",
      marginBottom: 6
    }
  }, "After"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      justifyContent: "space-around"
    }
  }, after.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
      borderTop: i ? "1px solid rgba(255,255,255,0.14)" : "none",
      paddingTop: i ? 20 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 3,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Check, {
    c: "var(--brass)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: "#fff",
      marginBottom: 3
    }
  }, a[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "var(--on-dark-soft)",
      lineHeight: 1.4
    }
  }, a[1])))))), /*#__PURE__*/React.createElement(LineArt, {
    variant: "flight",
    size: 150,
    color: "var(--brass)",
    opacity: 0.85,
    strokeWidth: 1.9,
    style: {
      position: "absolute",
      left: "calc(50% - 75px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }))));
}

/* 6 — Metrics (motif: swoosh) */
function MetricsSlide() {
  const stats = [["312%", "YoY growth", "vs. last quarter"], ["1.4K", "Active members", "+220 this term"], ["48", "Projects shipped", "across 6 teams"]];
  return /*#__PURE__*/React.createElement(SlideFrame, {
    label: "Metrics"
  }, /*#__PURE__*/React.createElement(LineArt, {
    variant: "swoosh",
    size: 150,
    color: "var(--brass)",
    opacity: 0.75,
    strokeWidth: 1.9,
    style: {
      position: "absolute",
      left: 372,
      top: 150
    }
  }), /*#__PURE__*/React.createElement(LineArt, {
    variant: "olive",
    size: 380,
    color: "var(--green-uplift)",
    opacity: 0.13,
    strokeWidth: 1.4,
    style: {
      position: "absolute",
      left: 44,
      bottom: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      top: 150,
      right: 64
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "By the numbers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 48,
      fontWeight: 600,
      margin: "12px 0 46px",
      color: "var(--ink)"
    }
  }, "A strong quarter"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    style: {
      flex: 1,
      padding: "36px 30px"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: s[0],
    label: s[1],
    sub: s[2]
  }))))));
}

/* 7 — Quote (motif: feather) — dark moment */
function QuoteSlide() {
  return /*#__PURE__*/React.createElement(SlideFrame, {
    bg: "var(--green-deep)",
    label: "Quote"
  }, /*#__PURE__*/React.createElement(LineArt, {
    variant: "feather",
    size: 430,
    color: "var(--brass)",
    opacity: 0.14,
    strokeWidth: 1.4,
    style: {
      position: "absolute",
      right: 50,
      top: 70
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    dark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      right: 200,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 120,
      lineHeight: 0.6,
      color: "var(--brass)"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: 46,
      lineHeight: 1.28,
      color: "#fff",
      margin: "12px 0 0"
    }
  }, "The best part isn't the tech \u2014 it's watching the crew teach each other."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      fontSize: 17,
      color: "var(--on-dark-soft)"
    }
  }, "Jordan Reyes \xB7 Club lead"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 36,
      color: "var(--brass)",
      marginTop: 8
    }
  }, "\u2014 see you Thursday")));
}

/* 8 — Closing (motifs: flight + swoosh pointing at CTA) */
function ClosingSlide() {
  return /*#__PURE__*/React.createElement(SlideFrame, {
    label: "Closing"
  }, /*#__PURE__*/React.createElement(LineArt, {
    variant: "flight",
    size: 240,
    color: "var(--green-accent)",
    opacity: 0.15,
    strokeWidth: 1.4,
    style: {
      position: "absolute",
      left: 40,
      top: 70
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: LOGO_GREEN,
    alt: "Seahawk AI",
    style: {
      position: "absolute",
      right: 72,
      top: "50%",
      transform: "translateY(-50%)",
      width: 360,
      height: "auto",
      opacity: 0.96
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Thanks for coming"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 82,
      fontWeight: 600,
      letterSpacing: "-0.16px",
      margin: "16px 0 0",
      lineHeight: 1.02,
      color: "var(--ink)"
    }
  }, "Questions?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      color: "var(--ink-soft)",
      margin: "18px 0 36px",
      maxWidth: 520,
      lineHeight: 1.5
    }
  }, "Come build with us. Next meeting drops in #seahawk-ai."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Join #seahawk-ai"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "See the roadmap"), /*#__PURE__*/React.createElement(LineArt, {
    variant: "swoosh",
    size: 116,
    color: "var(--brass)",
    opacity: 0.8,
    strokeWidth: 1.9,
    flip: true,
    style: {
      position: "absolute",
      left: -96,
      top: -60
    }
  }))));
}
const SLIDES = [{
  name: "Title",
  Comp: TitleSlide
}, {
  name: "Agenda",
  Comp: AgendaSlide
}, {
  name: "Section",
  Comp: SectionSlide
}, {
  name: "Content",
  Comp: ContentSlide
}, {
  name: "Comparison",
  Comp: ComparisonSlide
}, {
  name: "Metrics",
  Comp: MetricsSlide
}, {
  name: "Quote",
  Comp: QuoteSlide
}, {
  name: "Closing",
  Comp: ClosingSlide
}];
Object.assign(window, {
  SlideFrame,
  Wordmark,
  TitleSlide,
  AgendaSlide,
  SectionSlide,
  ContentSlide,
  ComparisonSlide,
  MetricsSlide,
  QuoteSlide,
  ClosingSlide,
  SLIDES,
  SLIDE_W: W,
  SLIDE_H: H
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/stories/stories.jsx
try { (() => {
/* Seahawk AI — Stories UI kit. Instagram stories (1080×1920).
   Composes primitives from the bundle; IG-style chrome; rotates LineArt motifs. */
const NSS = window.SeahawkAIDesignSystem_2e2732 || {};
const {
  Button: SButton,
  Pill: SPill,
  Card: SCard,
  Callout: SCallout,
  Stat: SStat,
  Kicker: SKicker,
  LineArt: SLineArt
} = NSS;
const SW = 1080,
  SH = 1920;
function StoryFrame({
  bg = "var(--neutral-warm)",
  dark = false,
  label,
  index = 0,
  total = 6,
  children,
  style = {}
}) {
  const seg = dark ? "var(--white-24)" : "rgba(0,0,0,0.12)";
  const segOn = dark ? "#fff" : "var(--green-accent)";
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": label,
    style: {
      width: SW,
      height: SH,
      position: "relative",
      overflow: "hidden",
      background: bg,
      fontFamily: "var(--font-sans)",
      letterSpacing: "var(--track-tight)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 40,
      left: 40,
      right: 40,
      display: "flex",
      gap: 8
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 5,
      borderRadius: 3,
      background: i === index ? segOn : seg
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 68,
      left: 40,
      right: 40,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SLineArt, {
    variant: "feather",
    size: 26,
    color: dark ? "var(--brass)" : "var(--green-accent)",
    opacity: 0.95,
    strokeWidth: 1.8
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 26,
      color: dark ? "#fff" : "var(--green-primary)"
    }
  }, "seahawk.ai"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      color: dark ? "var(--on-dark-soft)" : "var(--ink-soft)",
      fontWeight: 500
    }
  }, "\xB7 2h")), children);
}
const Sticker = ({
  children,
  tone = "mint"
}) => {
  const t = tone === "brass" ? {
    background: "var(--brass)",
    color: "#fff"
  } : tone === "deep" ? {
    background: "var(--green-deep)",
    color: "#fff"
  } : {
    background: "var(--green-light)",
    color: "var(--green-deep)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "16px 30px",
      borderRadius: 50,
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: "0.02em",
      ...t
    }
  }, children);
};

/* 1 — Cover (feather + wing) */
function CoverStory() {
  return /*#__PURE__*/React.createElement(StoryFrame, {
    label: "Cover",
    index: 0
  }, /*#__PURE__*/React.createElement(SLineArt, {
    variant: "feather",
    size: 360,
    color: "var(--green-accent)",
    opacity: 0.15,
    strokeWidth: 1.5,
    style: {
      position: "absolute",
      left: -40,
      top: 200
    }
  }), /*#__PURE__*/React.createElement(SLineArt, {
    variant: "wing",
    size: 760,
    color: "var(--green-primary)",
    opacity: 0.1,
    strokeWidth: 1.5,
    flip: true,
    style: {
      position: "absolute",
      right: -120,
      bottom: 260
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72,
      right: 72,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SKicker, null, "Seahawk AI \xB7 Weekly"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 150,
      lineHeight: 0.98,
      fontWeight: 600,
      letterSpacing: "-0.16px",
      color: "var(--ink)",
      margin: "26px 0 0"
    }
  }, "Fall", /*#__PURE__*/React.createElement("br", null), "Kickoff"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 40,
      color: "var(--ink-soft)",
      margin: "36px 0 0",
      lineHeight: 1.4,
      maxWidth: 720
    }
  }, "What we're building this semester."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Sticker, null, "September 12 \xB7 6pm"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 90,
      textAlign: "center",
      fontSize: 30,
      color: "var(--ink-soft)",
      fontWeight: 600
    }
  }, "Swipe up to RSVP \u2191"));
}

/* 2 — Announcement (swoosh → CTA) */
function AnnouncementStory() {
  return /*#__PURE__*/React.createElement(StoryFrame, {
    bg: "var(--green-deep)",
    dark: true,
    label: "Announcement",
    index: 1
  }, /*#__PURE__*/React.createElement(SLineArt, {
    variant: "sprig",
    size: 280,
    color: "var(--brass)",
    opacity: 0.26,
    strokeWidth: 1.5,
    style: {
      position: "absolute",
      right: 90,
      top: 260
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72,
      right: 72,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SKicker, {
    tone: "brass"
  }, "New meeting"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 120,
      lineHeight: 1.0,
      fontWeight: 600,
      color: "#fff",
      margin: "24px 0 0",
      letterSpacing: "-0.16px"
    }
  }, "We're back this Thursday"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 38,
      color: "var(--on-dark-soft)",
      margin: "40px 0 0",
      lineHeight: 1.45
    }
  }, "Demos, roadmap, and open floor. Bring a friend."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      position: "relative",
      alignSelf: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(SButton, {
    size: "lg",
    style: {
      fontSize: 34,
      padding: "22px 56px"
    }
  }, "Tap for details"), /*#__PURE__*/React.createElement(SLineArt, {
    variant: "swoosh",
    size: 190,
    color: "var(--brass)",
    opacity: 0.85,
    strokeWidth: 2.2,
    flip: true,
    style: {
      position: "absolute",
      right: -150,
      top: -96
    }
  }))));
}

/* 3 — Quote (feather) */
function QuoteStory() {
  return /*#__PURE__*/React.createElement(StoryFrame, {
    label: "Quote",
    index: 2
  }, /*#__PURE__*/React.createElement(SLineArt, {
    variant: "feather",
    size: 520,
    color: "var(--green-accent)",
    opacity: 0.12,
    strokeWidth: 1.5,
    style: {
      position: "absolute",
      right: -30,
      top: 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72,
      right: 96,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 200,
      lineHeight: 0.5,
      color: "var(--brass)"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: 74,
      lineHeight: 1.24,
      color: "var(--ink)",
      margin: "40px 0 0"
    }
  }, "Watching the crew teach each other \u2014 that's the best part."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      fontSize: 32,
      color: "var(--ink-soft)",
      fontWeight: 600
    }
  }, "Jordan Reyes \xB7 Club lead"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 66,
      color: "var(--green-accent)",
      marginTop: 14
    }
  }, "for the crew")));
}

/* 4 — Stat (sprig) */
function StatStory() {
  return /*#__PURE__*/React.createElement(StoryFrame, {
    bg: "var(--green-deep)",
    dark: true,
    label: "Stat",
    index: 3
  }, /*#__PURE__*/React.createElement(SLineArt, {
    variant: "sprig",
    size: 320,
    color: "var(--brass)",
    opacity: 0.24,
    strokeWidth: 1.5,
    style: {
      position: "absolute",
      left: 80,
      top: 260
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72,
      right: 72,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SKicker, {
    tone: "brass"
  }, "By the numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: 340,
      lineHeight: 0.9,
      color: "#fff",
      margin: "20px 0 0"
    }
  }, "312%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 52,
      fontWeight: 600,
      color: "#fff",
      marginTop: 8
    }
  }, "Year-over-year growth"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 36,
      color: "var(--on-dark-soft)",
      marginTop: 28,
      lineHeight: 1.4
    }
  }, "More members, more projects, more shipping."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(SStat, {
    value: "1.4K",
    label: "Members",
    tone: "dark"
  }), /*#__PURE__*/React.createElement(SStat, {
    value: "48",
    label: "Projects",
    tone: "dark"
  }))));
}

/* 5 — Event (branch) */
function EventStory() {
  return /*#__PURE__*/React.createElement(StoryFrame, {
    label: "Event",
    index: 4
  }, /*#__PURE__*/React.createElement(SLineArt, {
    variant: "branch",
    size: 560,
    color: "var(--green-uplift)",
    opacity: 0.14,
    strokeWidth: 1.5,
    style: {
      position: "absolute",
      right: -60,
      top: 210
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72,
      right: 72,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SKicker, null, "You're invited"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 108,
      lineHeight: 1.0,
      fontWeight: 600,
      color: "var(--ink)",
      margin: "24px 0 44px",
      letterSpacing: "-0.16px"
    }
  }, "Fall Kickoff"), /*#__PURE__*/React.createElement(SCard, {
    style: {
      padding: 44
    }
  }, [["When", "Thu, Sep 12 · 6:00pm"], ["Where", "Room 214, Bldg C"], ["Bring", "A laptop & a friend"]].map((r, i, a) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "24px 0",
      borderBottom: i < a.length - 1 ? "1px solid var(--hairline)" : "0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--track-looser)",
      color: "var(--green-accent)"
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 36,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, r[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    tone: "brass"
  }, "\u2605 RSVP in bio"))));
}

/* 6 — Closing (flight + swoosh) */
function ClosingStory() {
  return /*#__PURE__*/React.createElement(StoryFrame, {
    label: "Closing",
    index: 5
  }, /*#__PURE__*/React.createElement(SLineArt, {
    variant: "flight",
    size: 520,
    color: "var(--green-accent)",
    opacity: 0.15,
    strokeWidth: 1.5,
    style: {
      position: "absolute",
      left: 30,
      top: 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72,
      right: 72,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SKicker, null, "See you there"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 140,
      lineHeight: 0.98,
      fontWeight: 600,
      color: "var(--ink)",
      margin: "26px 0 0",
      letterSpacing: "-0.16px"
    }
  }, "Come build with us"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 40,
      color: "var(--ink-soft)",
      margin: "40px 0 64px",
      lineHeight: 1.4
    }
  }, "Follow along and jump into your first project."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      alignSelf: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(SButton, {
    size: "lg",
    style: {
      fontSize: 34,
      padding: "22px 56px"
    }
  }, "Follow @seahawk.ai"), /*#__PURE__*/React.createElement(SLineArt, {
    variant: "swoosh",
    size: 180,
    color: "var(--brass)",
    opacity: 0.85,
    strokeWidth: 2.2,
    style: {
      position: "absolute",
      left: -150,
      top: -100
    }
  }))));
}
const STORIES = [{
  name: "Cover",
  Comp: CoverStory
}, {
  name: "Announcement",
  Comp: AnnouncementStory
}, {
  name: "Quote",
  Comp: QuoteStory
}, {
  name: "Stat",
  Comp: StatStory
}, {
  name: "Event",
  Comp: EventStory
}, {
  name: "Closing",
  Comp: ClosingStory
}];
Object.assign(window, {
  StoryFrame,
  CoverStory,
  AnnouncementStory,
  QuoteStory,
  StatStory,
  EventStory,
  ClosingStory,
  STORIES,
  STORY_W: SW,
  STORY_H: SH
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stories/stories.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.LINE_ART_VARIANTS = __ds_scope.LINE_ART_VARIANTS;

__ds_ns.LineArt = __ds_scope.LineArt;

})();
