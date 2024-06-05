import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "./CodeBlock.css";

const CodeBlock = ({ code }) => {
//   console.log(initialCode)
//   const [code, setCode] = useState(initialCode);
  return (
    <div>
      <Editor
        value={code}
        // onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
        disabled={true}
      />
    </div>
  );
};

export default CodeBlock;
