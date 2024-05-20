// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import BookCard from '../Components/BookCard';
import Sidebar from '../Components/Sidebar';
import booksData from '../data/books.json';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false); // State for sidebar
  const booksPerPage = 8;
  const [books, setBooks] = useState([]);
  const [userName,setUserName]= useState('');

  useEffect(() => {
    setBooks(booksData);
    const name = localStorage.getItem('name');
    if (name) {
      setUserName(name);
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="relative flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 p-4 transition-all duration-300 ${isOpen ? 'ml-64' : ''}`}>
        <button onClick={toggleSidebar} className="p-2 bg-blue-500 text-white rounded-lg fixed top-4 left-4 z-50">
          <FaBars />
        </button>
        <div className="mb-4 flex justify-between">
  <div>
    <input
      type="text"
      placeholder="Search for books..."
      value={searchTerm}
      onChange={handleSearch}
      className=" ml-12 w-3/4 p-2 border border-gray-300 rounded-lg"
    />
  </div>
  <div>
    <p className="text-gray-600">Hi, {userName}</p>
  </div>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handlePreviousPage}
            className={`p-2 bg-gray-800 text-white rounded-lg ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className={`p-2 bg-gray-800 text-white rounded-lg ${(indexOfLastBook >= filteredBooks.length) && 'opacity-50 cursor-not-allowed'}`}
            disabled={indexOfLastBook >= filteredBooks.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
