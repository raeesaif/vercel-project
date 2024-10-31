import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';

export const AddBlog = () => {
  const [titleValue, setTitleValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook

  const handleTitle = (e) => {
    setTitleValue(e.target.value);
  };

  const handleTextarea = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleStore = () => {
    const newBlog = {
      title: titleValue,
      content: textareaValue,
      id: Math.random().toString(36).substring(2, 15), // Generate unique ID
    };

    // Retrieve existing blogs from localStorage
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // Add the new blog to the existing blogs
    const updatedBlogs = [...existingBlogs, newBlog];

    // Store the updated blog list in localStorage
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    // Navigate to the home page programmatically
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome Back, Write Your Blog Here</h1>
          <form className="space-y-6">
            <div>
              <input
                value={titleValue}
                onChange={handleTitle}
                type="text"
                placeholder="Title"
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <textarea
                value={textareaValue}
                onChange={handleTextarea}
                id="content"
                rows={8}
                placeholder="Write your blog content here"
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleStore}
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Publish Blog
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};