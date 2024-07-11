

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogForm.css'; 

function BlogForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // If editing, id will be provided in the URL

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id) {
      fetchBlogDetails();
    }
  }, [id]);

  async function fetchBlogDetails() {
    try {
      const response = await fetch(`https://bloger-6vju.onrender.com/${id}`);
      const data = await response.json();
      setTitle(data.title);
      setContent(data.content);
    } catch (error) {
      console.error('Error fetching blog details:', error);
    }
  }

  async function saveBlog() {
    try {
      const method = id ? 'PUT' : 'POST';
      const url =  'http://localhost:9000/blog/';
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
      if (response.ok) {
        navigate('/');
      } else {
        console.error('Failed to save blog:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  }

  async function deleteBlog() {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const response = await fetch(`https://bloger-6vju.onrender.com/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          navigate('/');
        } else {
          console.error('Failed to delete blog');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  }

  return (
    <div className="blog-form-container">
      <h2>{id ? 'Edit Blog' : 'Create Blog'}</h2>
      <form className="blog-form" onSubmit={saveBlog}>
        <label>Title:</label>
        <input
          type="text"
          className="blog-form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content:</label>
        <textarea
          className="blog-form-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="blog-form-buttons">
          <button type="submit" className="save-button">Save</button>
          {id && (
            <button type="button" className="delete-button" onClick={deleteBlog}>
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
