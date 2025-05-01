import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (optional)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="editor-container">
          <textarea
            className="textarea"
            value={markdown}
            onChange={handleChange}
            placeholder="Enter your Markdown here..."
          />
          <div className="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      )}
    </>
  );
}

export default MarkdownEditor;

