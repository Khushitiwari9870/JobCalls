import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = 'http://localhost:8000/api/jobs/blogs';

const BlogForm = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const isEditMode = useLocation().pathname.includes('edit');
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    image: null,
    description: '',
    seo_title: '',
    seo_keyword: '',
    seo_description: '',
  });
  
  const [loading, setLoading] = useState(isEditMode);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (isEditMode) {
      const fetchBlog = async () => {
        try {
          const { data } = await axios.get(`${API_BASE_URL}/${slug}/`);
          setFormData(prev => ({
            ...prev,
            ...data,
            image: null
          }));
          if (data.image) setImagePreview(data.image);
        } catch (error) {
          console.error('Error fetching blog:', error);
          toast.error('Failed to load blog post');
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    }
  }, [isEditMode, slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) formDataToSend.append(key, value);
      });
      
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
      };
      
      let response;
      if (isEditMode) {
        response = await axios.patch(
          `${API_BASE_URL}/${slug}/update/`,
          formDataToSend,
          config
        );
        toast.success('Blog post updated successfully');
      } else {
        response = await axios.post(
          `${API_BASE_URL}/create/`,
          formDataToSend,
          config
        );
        toast.success('Blog post created successfully');
      }
      
      navigate(`/employer-login/blog/${response.data.slug}`);
      
    } catch (error) {
      console.error('Error saving blog:', error);
      if (error.response?.data) {
        setErrors(error.response.data);
        toast.error('Please fix the form errors');
      } else {
        toast.error('Failed to save blog post');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEditMode) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
      >
        ← Back to {isEditMode ? 'Post' : 'Blog'}
      </button>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">
          {isEditMode ? 'Edit Blog Post' : 'New Blog Post'}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
              required
            />
            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Featured Image
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              accept="image/*"
            />
            {imagePreview && (
              <div className="mt-2">
                <img src={imagePreview} alt="Preview" className="h-40 w-auto" />
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Content *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={10}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* SEO Section */}
          <div className="border-t pt-4 mt-6">
            <h3 className="text-lg font-medium mb-4">SEO Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">SEO Title</label>
                <input
                  type="text"
                  name="seo_title"
                  value={formData.seo_title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">SEO Keywords</label>
                <input
                  type="text"
                  name="seo_keyword"
                  value={formData.seo_keyword}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="comma, separated, keywords"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">SEO Description</label>
                <textarea
                  name="seo_description"
                  value={formData.seo_description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
