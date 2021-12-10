import React, { ReactElement, ReactNode, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "../styles/highlight";
import styles from "../styles/Code.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  children: ReactNode;
  className: string | undefined;
  style?: any;
}

export default function Code({
  children,
  className = "",
  style = prism,
}: Props): ReactElement {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, "");

  const codeLanguage = /language-(\w+)/.exec(className);

  return (
    <div className={styles.codeContainer}>
      <div className={styles.copyButton}>
        <CopyToClipboard
          text={code}
          onCopy={() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
        >
          <img
            className={copied ? styles.checkIcon : styles.copyIcon}
            src={copied ? "/icons/done.svg" : "/icons/content_copy.svg"}
          />
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter
        language={codeLanguage ? codeLanguage[1] : "text"}
        style={style}
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
