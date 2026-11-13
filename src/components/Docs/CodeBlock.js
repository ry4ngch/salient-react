import React, {useEffect, useRef, useState} from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

import styles from './CodeBlock.module.css';

const CodeBlock = ({code, language = 'jsx'}) => {
	const ref = useRef(null);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (ref.current) {
			Prism.highlightElement(ref.current, false);
		}
	}, [code]);

	const handleCopy = () => {
		navigator.clipboard.writeText(code.trim()).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		});
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<span className={styles.lang}>{language}</span>
				<button type="button" className={styles.copyBtn} onClick={handleCopy}>
					{copied ? 'Copied!' : 'Copy'}
				</button>
			</div>
			<pre className={[styles.codeBlock, `language-${language}`].join(' ')}>
				<code ref={ref} className={`language-${language}`}>{code.trim()}</code>
			</pre>
		</div>
	);
};

export default CodeBlock;
