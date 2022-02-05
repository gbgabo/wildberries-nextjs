---
title: JSON Reader
---

1. Once you have JSON Reader extension installed on your web browser, access the options page for the extension.

2. On the **custom style** section, add the following css properties:

   ```css
   .CodeMirror {
     font-family: monaco, Consolas, Menlo, Courier, monospace;
     font-size: 16px;
     line-height: 1.5em;
     background-color: #250046 !important;
     color: #8d659c !important;
     border: none;
   }
   .CodeMirror-gutters {
     background-color: #240041 !important;
   }
   .CodeMirror-linenumber {
     color: #00ffb7 !important;
   }

   span {
     color: #a60954 !important;
   }
   span.cm-property {
     color: #ff0e82 !important;
   }
   span.cm-atom {
     color: #ff0e82 !important;
   }
   span.cm-number {
     color: #bd93f9 !important;
   }
   span.cm-variable {
     color: #50fa7b !important;
   }
   span.cm-string {
     color: #a470d8 !important;
   }

   .extras .icon svg {
     fill: #00ffb7 !important;
   }
   ```
