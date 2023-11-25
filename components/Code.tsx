import React, { ReactElement, ReactNode, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from '../styles/highlight';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  children: ReactNode;
  className: string | undefined;
  style?: any;
}

export default function Code({ children, className = '', style = prism }: Props): ReactElement {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, '');

  const codeLanguage = /language-(\w+)/.exec(className);

  return (
    <div className="relative">
      <div className="absolute bottom-4 right-4 rounded-md">
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
            style={
              copied
                ? {
                    filter: 'invert(83%) sepia(95%) saturate(4281%) hue-rotate(81deg) brightness(99%) contrast(106%)',
                  }
                : {
                    filter: 'invert(28%) sepia(91%) saturate(7000%) hue-rotate(322deg) brightness(103%) contrast(101%)',
                  }
            }
            src={copied ? '/icons/done.svg' : '/icons/content_copy.svg'}
          />
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter language={codeLanguage ? codeLanguage[1] : 'text'} style={style} PreTag="div">
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
