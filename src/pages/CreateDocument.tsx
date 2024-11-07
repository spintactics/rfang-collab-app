import React, { useState } from 'react';
import axios from 'axios';

const CreateDocument = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateDocument = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8000/api/documents/',
        { title, content },
        { withCredentials: true } // Sends session cookie with the request
      );

      setMessage('Document created successfully!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data?.detail || 'Failed to create document');
      } else {
        setMessage('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <h2>Create Document</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleCreateDocument}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Create Document</button>
      </form>
    </div>
  );
};

export default CreateDocument;
