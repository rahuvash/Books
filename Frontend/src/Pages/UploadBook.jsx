import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadBook = () => {
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    image: null,
    pdf: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBookData({ ...bookData, image: file });
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    setBookData({ ...bookData, pdf: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(bookData);
    // Reset form fields
    setBookData({
      title: '',
      author: '',
      image: null,
      pdf: null
    });
    // Navigate to another page after submission (e.g., dashboard)
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Your Book Here</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 mb-2">Title</label>
            <input type="text" id="title" name="title" value={bookData.title} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-700 mb-2">Author</label>
            <input type="text" id="author" name="author" value={bookData.author} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 mb-2">Image</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="pdf" className="block text-gray-700 mb-2">PDF</label>
            <input type="file" id="pdf" name="pdf" accept=".pdf" onChange={handlePdfChange} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default UploadBook;
