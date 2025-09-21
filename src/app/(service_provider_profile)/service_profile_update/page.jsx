"use client"
import { ArrowLeft, Camera, Upload, X, Check, User } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef } from "react";
import client from "../../../../public/client.png";
import Link from "next/link";

const ServiceProfileInfoUpdate = () => {
  const [profileImage, setProfileImage] = useState(client);
  const [isUploading, setIsUploading] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        setShowImageModal(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSave = () => {
    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setProfileImage(previewImage);
      setIsUploading(false);
      setShowImageModal(false);
      setPreviewImage(null);
    }, 2000);
  };

  const handleImageCancel = () => {
    setShowImageModal(false);
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Profile updated successfully!');
    }, 2000);
  };

  return (
    <div className="">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <Link href="/service_profile_info">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:p-0 lg:hover:bg-transparent">
              <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
            </button>
          </Link>
          <h2 className="font-semibold text-gray-800 text-lg sm:text-xl lg:text-2xl">
            Update Profile
          </h2>
        </div>

        {/* Content */}
        <div className="bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100">
          
          {/* Profile Image Section */}
          <div className="bg-gray-50 px-6 py-8 lg:py-12 border-b border-gray-200">
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src={profileImage}
                  alt="profile"
                  width={140}
                  height={140}
                  className="rounded-full w-32 h-32 border-4 border-white shadow-lg mx-auto"
                />
                <button
                  onClick={triggerFileInput}
                  className="absolute bottom-2 right-2 bg-[#115e59] hover:bg-[#0d4a42] p-3 rounded-full shadow-lg transition-colors group"
                >
                  <Camera className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wade Warren</h3>
                <p className="text-gray-600 mb-4">Service Provider</p>
                <button
                  onClick={triggerFileInput}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#115e59] hover:text-[#0d4a42] font-medium transition-colors border border-[#115e59] hover:border-[#0d4a42] rounded-lg hover:bg-[#115e59] hover:bg-opacity-5"
                >
                  <Upload className="w-4 h-4" />
                  Change Photo
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  JPG, PNG up to 5MB
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Wade Warren"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#115e59] focus:border-[#115e59] transition-all placeholder-gray-400 text-gray-900"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="wadewarren@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#115e59] focus:border-[#115e59] transition-all placeholder-gray-400 text-gray-900"
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 987-6543"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#115e59] focus:border-[#115e59] transition-all placeholder-gray-400 text-gray-900"
                  />
                </div>

                {/* Location Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="San Diego, California"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#115e59] focus:border-[#115e59] transition-all placeholder-gray-400 text-gray-900"
                  />
                </div>
              </div>

              {/* Full Address Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Full Address
                </label>
                <textarea
                  name="address"
                  rows={3}
                  placeholder="1234 Maple Avenue, Suite 5B, San Diego, California, 92103, USA"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#115e59] focus:border-[#115e59] transition-all placeholder-gray-400 resize-none text-gray-900"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <Link href="/service_profile_info" className="flex-1">
                  <button
                    type="button"
                    className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-[#115e59] text-white font-medium rounded-lg hover:bg-[#0d4a42] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Updating...
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />

        {/* Image Preview Modal */}
        {showImageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Preview Profile Photo
                </h3>
                
                <div className="mb-6">
                  <Image
                    src={previewImage || client}
                    alt="Preview"
                    width={160}
                    height={160}
                    className="rounded-full mx-auto border-4 border-gray-100 shadow-lg"
                  />
                </div>

                <p className="text-sm text-gray-600 mb-6">
                  This will be your new profile picture. Do you want to save this change?
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={handleImageCancel}
                    disabled={isUploading}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleImageSave}
                    disabled={isUploading}
                    className="flex-1 px-4 py-3 bg-[#115e59] text-white rounded-lg hover:bg-[#0d4a42] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isUploading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        Save Photo
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceProfileInfoUpdate;