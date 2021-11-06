import React, { ReactElement, ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "../styles/highlight";
import styles from "../styles/CodeSnippet.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  children: ReactNode;
  className: string | undefined;
  style?: any;
}

export default function CodeSnippet({
  children,
  className = "",
  style = prism,
}: Props): ReactElement {
  const codeLanguage = /language-(\w+)/.exec(className);
  return (
    <div className={styles.codeContainer}>
      <div className={styles.copyButton}>
        <CopyToClipboard text={String(children).replace(/\n$/, "")}>
          <span className="material-icons">content_copy</span>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter
        language={codeLanguage ? codeLanguage[1] : "text"}
        style={style}
        PreTag="div"
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
}
