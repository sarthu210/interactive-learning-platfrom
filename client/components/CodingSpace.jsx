import { useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.css';

const CodingSpace = () => {
  const [editor, setEditor] = useState(null);
  const monacoEl = useRef(null);

  useEffect(() => {
    if (monacoEl) {
      setEditor((editor) => {
        if (editor) return editor;

        return monaco.editor.create(monacoEl.current, {
          value: [
            'public class Main {',
            '  public static void main(String[] args) {',
            '    System.out.println("Hello, World!");',
            '  }',
            '}'
          ].join('\n'),     
          language: 'java'
        });
      });
    }

    return () => editor && editor.dispose();
  }, [monacoEl.current]);

  const getUserCode = () => {
    if (editor) {
      const userCode = editor.getValue();
    }
  };

  useEffect(() => {
    if (editor) {
      editor.onDidChangeModelContent(() => {
        getUserCode();
      });
    }
  }, [editor]);

  return <div className={styles.Editor} ref={monacoEl}></div>;
};

export default CodingSpace;