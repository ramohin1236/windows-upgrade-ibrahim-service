"use client"
import React, { useState, useRef } from "react";
import { Plus, Upload, X } from "lucide-react";

const AddService = () => {
  const [formData, setFormData] = useState({
    serviceTitle: "",
    startingPrice: "",
    serviceCategory: "",
    serviceDescription: "",
    serviceImage: null
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);


  const serviceCategories = [
    "Cleaning & Maintenance",
    "Home Repair",
    "Moving & Delivery",
    "Personal Care",
    "Pet Care",
    "Tutoring & Training",
    "Technology Support",
    "Event Services",
    "Business Services",
    "Other"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({
          ...prev,
          serviceImage: "Please select a valid image file"
        }));
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          serviceImage: "Image size should be less than 5MB"
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        serviceImage: file
      }));

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);

      // Clear any previous error
      setErrors(prev => ({
        ...prev,
        serviceImage: ""
      }));
    }
  };

  const removeImage = () => {
    setFormData(prev => ({
      ...prev,
      serviceImage: null
    }));
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Service Title validation
    if (!formData.serviceTitle.trim()) {
      newErrors.serviceTitle = "Service title is required";
    } else if (formData.serviceTitle.trim().length < 3) {
      newErrors.serviceTitle = "Service title must be at least 3 characters";
    }

    // Starting Price validation
    if (!formData.startingPrice.trim()) {
      newErrors.startingPrice = "Starting price is required";
    } else if (isNaN(formData.startingPrice) || parseFloat(formData.startingPrice) <= 0) {
      newErrors.startingPrice = "Please enter a valid price";
    }

    // Service Category validation
    if (!formData.serviceCategory) {
      newErrors.serviceCategory = "Please select a service category";
    }

    // Service Description validation
    if (!formData.serviceDescription.trim()) {
      newErrors.serviceDescription = "Service description is required";
    } else if (formData.serviceDescription.trim().length < 10) {
      newErrors.serviceDescription = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle success
      alert("Service added successfully!");
      
      // Reset form
      setFormData({
        serviceTitle: "",
        startingPrice: "",
        serviceCategory: "",
        serviceDescription: "",
        serviceImage: null
      });
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      
    } catch (error) {
      setErrors({
        submit: "Failed to add service. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="project_container px-6 bg-white p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-green-800 rounded-lg flex items-center justify-center">
          <Plus className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Add Service
        </h1>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Service Image
          </label>
          
          {!imagePreview ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-green-800 hover:bg-green-80 transition-colors"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center">
                  <Upload className="w-8 h-8 text-green-800" />
                </div>
                <div>
                  <p className="text-gray-600 font-medium">
                    + Upload Your Service Image
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="w-44 h-44 lg:w-72 lg:h-72">
                <img
                src={imagePreview}
                alt="Service preview"
                className="w-full h-full object-cover rounded-lg  border-gray-200"
              />
              </div>
              <button
                onClick={removeImage}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          
          {errors.serviceImage && (
            <p className="text-sm text-red-600">{errors.serviceImage}</p>
          )}
        </div>

        {/* Service Title */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Service Title
          </label>
          <input
            type="text"
            value={formData.serviceTitle}
            onChange={(e) => handleInputChange('serviceTitle', e.target.value)}
            placeholder="e.g. Office Cleaning"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent ${
              errors.serviceTitle ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.serviceTitle && (
            <p className="text-sm text-red-600">{errors.serviceTitle}</p>
          )}
        </div>

        {/* Starting Price and Category Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Starting Price */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Starting Price
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={formData.startingPrice}
              onChange={(e) => handleInputChange('startingPrice', e.target.value)}
              placeholder="e.g. 24.00"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent ${
                errors.startingPrice ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.startingPrice && (
              <p className="text-sm text-red-600">{errors.startingPrice}</p>
            )}
          </div>

          {/* Service Category */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Service Category
            </label>
            <select
              value={formData.serviceCategory}
              onChange={(e) => handleInputChange('serviceCategory', e.target.value)}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent bg-white ${
                errors.serviceCategory ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select Service Category</option>
              {serviceCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.serviceCategory && (
              <p className="text-sm text-red-600">{errors.serviceCategory}</p>
            )}
          </div>
        </div>

        {/* Service Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Service Description
          </label>
          <textarea
            rows={4}
            value={formData.serviceDescription}
            onChange={(e) => handleInputChange('serviceDescription', e.target.value)}
            placeholder="Describe what's included in the service, materials used, etc."
            className={`w-full px-4 py-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent ${
              errors.serviceDescription ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.serviceDescription && (
            <p className="text-sm text-red-600">{errors.serviceDescription}</p>
          )}
          <p className="text-xs text-gray-500">
            {formData.serviceDescription.length}/500 characters
          </p>
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{errors.submit}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full cursor-pointer md:w-auto px-8 py-3 rounded-md font-medium transition-colors ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#00786f] hover:bg-green-800 active:bg-green-800'
          } text-white`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Saving Service...
            </div>
          ) : (
            'Save Service'
          )}
        </button>
      </div>
    </div>
  );
};

export default AddService;