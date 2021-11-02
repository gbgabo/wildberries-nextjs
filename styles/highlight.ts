const prism = {
  'code[class*="language-"]': {
    color: "#FF0E82",
    background: "none",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#f8f8f2",
    background: "#19002E",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#19002E",
    padding: ".1em",
    borderRadius: ".3em",
    whiteSpace: "normal",
  },
  comment: {
    color: "#6272a4",
  },
  prolog: {
    color: "#6272a4",
  },
  doctype: {
    color: "#6272a4",
  },
  cdata: {
    color: "#6272a4",
  },
  punctuation: {
    color: "#AC4EA4",
  },
  ".namespace": {
    Opacity: ".7",
  },
  property: {
    color: "#ff79c6",
  },
  tag: {
    color: "#ff79c6",
  },
  constant: {
    color: "#ff79c6",
  },
  symbol: {
    color: "#ff79c6",
  },
  deleted: {
    color: "#ff79c6",
  },
  boolean: {
    color: "#bd93f9",
  },
  number: {
    color: "#bd93f9",
  },
  selector: {
    color: "#A470D8",
  },
  "attr-name": {
    color: "#A470D8",
  },
  string: {
    color: "#A470D8",
  },
  char: {
    color: "#A470D8",
  },
  builtin: {
    color: "#A470D8",
  },
  inserted: {
    color: "#A470D8",
  },
  operator: {
    color: "#FFB86C",
  },
  entity: {
    color: "#f8f8f2",
    cursor: "help",
  },
  url: {
    color: "#f8f8f2",
  },
  ".language-css .token.string .token": {
    color: "#00ffb7",
  },
  ".style .token.string": {
    color: "#00ffb7",
  },
  variable: {
    color: "#FFB86C",
  },
  atrule: {
    color: "#00ffb7",
  },
  "attr-value": {
    color: "#00ffb7",
  },
  function: {
    color: "#00ffb7",
  },
  "class-name": {
    color: "#00ffb7",
  },
  keyword: {
    color: "#03A5C9",
  },
  regex: {
    color: "#ffb86c",
  },
  important: {
    color: "#ffb86c",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

const hljs = {
  hljs: {
    display: "block",
    overflowX: "auto",
    padding: "0.5em",
    background: "#19002E",
    color: "#f8f8f2",
  },
  "hljs-keyword": {
    color: "#8be9fd",
    fontWeight: "bold",
  },
  "hljs-selector-tag": {
    color: "#8be9fd",
    fontWeight: "bold",
  },
  "hljs-literal": {
    color: "#8be9fd",
    fontWeight: "bold",
  },
  "hljs-section": {
    color: "#8be9fd",
    fontWeight: "bold",
  },
  "hljs-link": {
    color: "#8be9fd",
  },
  "hljs-function .hljs-keyword": {
    color: "#ff79c6",
  },
  "hljs-subst": {
    color: "#f8f8f2",
  },
  "hljs-string": {
    color: "#f1fa8c",
  },
  "hljs-title": {
    color: "#f1fa8c",
    fontWeight: "bold",
  },
  "hljs-name": {
    color: "#f1fa8c",
    fontWeight: "bold",
  },
  "hljs-type": {
    color: "#f1fa8c",
    fontWeight: "bold",
  },
  "hljs-attribute": {
    color: "#f1fa8c",
  },
  "hljs-symbol": {
    color: "#f1fa8c",
  },
  "hljs-bullet": {
    color: "#f1fa8c",
  },
  "hljs-addition": {
    color: "#f1fa8c",
  },
  "hljs-variable": {
    color: "#f1fa8c",
  },
  "hljs-template-tag": {
    color: "#f1fa8c",
  },
  "hljs-template-variable": {
    color: "#f1fa8c",
  },
  "hljs-comment": {
    color: "#6272a4",
  },
  "hljs-quote": {
    color: "#6272a4",
  },
  "hljs-deletion": {
    color: "#6272a4",
  },
  "hljs-meta": {
    color: "#6272a4",
  },
  "hljs-doctag": {
    fontWeight: "bold",
  },
  "hljs-strong": {
    fontWeight: "bold",
  },
  "hljs-emphasis": {
    fontStyle: "italic",
  },
};

export { hljs, prism };
