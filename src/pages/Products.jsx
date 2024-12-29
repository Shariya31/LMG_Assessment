import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, updateProduct } from '../features/productSlice';
import { useEffect } from 'react';
import UpdateProductForm from '../components/UpdateForm';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);
  const [editingProduct, setEditingProduct] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    alert('Product deleted');
  };

  const handleUpdate = (product) => {
    setEditingProduct(product);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>

      {/* Search and Filter */}
      <div className="flex justify-between mb-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title or description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />

        {/* Category Filter Dropdown */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Table */}
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Product Title</th>
            <th className="px-4 py-2">Product Price</th>
            <th className="px-4 py-2">Product Description</th>
            <th className="px-4 py-2">Product Category</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-2">{product.title}</td>
              <td className="px-4 py-2">{product.price}</td>
              <td className="px-4 py-2">{product.description}</td>
              <td className="px-4 py-2">{product.category}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleUpdate(product)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Form */}
      {editingProduct && (
        <UpdateProductForm product={editingProduct} setEditingProduct={setEditingProduct} />
      )}
    </div>
  );
}

export default ProductList;
