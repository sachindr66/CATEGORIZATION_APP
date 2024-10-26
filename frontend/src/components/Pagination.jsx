// src/components/Pagination.jsx
import React from 'react';

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageLimit = 6;
  let startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
  let endPage = Math.min(totalPages, startPage + pageLimit - 1);

  if (endPage - startPage + 1 < pageLimit) {
    startPage = Math.max(1, endPage - pageLimit + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1} className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50">{"<<"}</button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50">{"<"}</button>
      {pageNumbers.map((page) => (
        <button key={page} onClick={() => onPageChange(page)} className={`px-3 py-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{page}</button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50">{">"}</button>
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50">{">>"}</button>
    </div>
  );
}

export default Pagination;
