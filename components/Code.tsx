import React, { ReactElement, ReactNode, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from '../styles/highlight';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from '@iconify/react';

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
          <Icon
            className={copied ? 'text-acid-green' : 'text-pink'}
            icon={copied ? 'tabler:copy-check' : 'tabler:copy'}
            width="1.7rem"
          />
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter language={codeLanguage ? codeLanguage[1] : 'text'} style={style} PreTag="div">
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
