import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !description || !image || !category) {
      setError('All fields are required!');
      return;
    }
    
    setError('');
    setSuccess('');

    const productData = {
      title,
      price: parseFloat(price), 
      description,
      image,
      category
    };
    try {
      const response = await axios.post('https://fakestoreapi.com/products', productData);

     
      if (response.status === 200) {
        setSuccess('Product created successfully!');
        navigate("/product")
        setTitle('');
        setPrice('');
        setDescription('');
        setImage('');
        setCategory('');
      } else {
        throw new Error('Failed to create product');
      }
    } catch (error) {
      setError('Error creating product: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create New Product</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter product title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter product price"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter product description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter product category"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
