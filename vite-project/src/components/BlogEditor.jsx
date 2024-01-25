// src/components/BlogEditor.jsx
import { useState } from 'react';

function BlogEditor() {
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('Blog content saved:', content);
  };

  return (
    <div>
      <h2>Blog Editor</h2>
      <textarea value={content} onChange={handleContentChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default BlogEditor;
