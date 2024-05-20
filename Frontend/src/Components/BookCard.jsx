import React from 'react';
import { FaDownload } from 'react-icons/fa';

const BookCard = ({ book }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={book.image}
          alt={book.title}
          className="h-48 w-full object-contain mb-4"
        />
        <a
          href={book.downloadLink}
          target= "_blank"
          download
          className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FaDownload />
        </a>
      </div>
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-gray-700">{book.author}</p>
    </div>
  );
};

export default BookCard;
