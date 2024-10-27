import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination';

function ProtectedPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(
    JSON.parse(localStorage.getItem('selectedCategories')) || []
  );
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://categorization-app-api.vercel.app/api/categories?page=${currentPage}&limit=${itemsPerPage}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const updatedCategories = response.data.categories.map((category) => ({
          ...category,
          selected: selectedCategories.includes(category._id),
        }));

        setCategories(updatedCategories);
        setTotalItems(response.data.totalItems);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, [currentPage]);

  const handleSelectionChange = async (categoryId) => {
    const updatedCategories = categories.map((category) =>
      category._id === categoryId ? { ...category, selected: !category.selected } : category
    );
    setCategories(updatedCategories);

    const updatedSelectedCategories = updatedCategories
      .filter((category) => category.selected)
      .map((category) => category._id);

    const mergedSelectedCategories = Array.from(new Set([...selectedCategories, ...updatedSelectedCategories]));
    setSelectedCategories(mergedSelectedCategories);
    localStorage.setItem('selectedCategories', JSON.stringify(mergedSelectedCategories));

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'https://categorization-app-api.vercel.app/api/user/selections',
        { selectedCategories: mergedSelectedCategories },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error('Error saving selections:', error);
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="p-4 w-full flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Please mark your interests!</h2>
      <div className="grid grid-cols-1 gap-4">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category._id} className="flex items-center">
              <input
                type="checkbox"
                checked={category.selected || false}
                onChange={() => handleSelectionChange(category._id)}
                className="mr-2"
              />
              {category.name}
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ProtectedPage;
