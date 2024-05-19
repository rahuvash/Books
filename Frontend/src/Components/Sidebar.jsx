import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa'; // Import FaBars icon

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef();
  const navigate = useNavigate();
  const [isToggleHidden, setIsToggleHidden] = useState(false);

  const handleToggleClick = () => {
    toggleSidebar();
    setIsToggleHidden(!isToggleHidden); // Toggle the state of isToggleHidden
  };

  const handleUploadClick = () => {
    navigate('/uploadbook');
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      toggleSidebar(); // Close the sidebar if the click is outside
      setIsToggleHidden(false); // Show the toggle button when closing the sidebar
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div ref={sidebarRef} className="w-64 bg-white h-full shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menu</h2>
          {/* Show the X icon if the sidebar is open */}
          {isOpen ? (
            <button onClick={handleToggleClick} className="text-gray-800">
              <FaTimes />
            </button>
          ) : (
            // Show the bars icon if the sidebar is closed
            <button onClick={handleToggleClick} className="text-gray-800">
              <FaBars />
            </button>
          )}
        </div>
        <ul>
          <li className="mb-4">
            <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
          </li>
          <li className="mb-4">
            <button onClick={handleUploadClick} className="text-gray-800 hover:text-gray-600">Upload Book</button>
          </li>
          {/* Add more links or buttons here */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
