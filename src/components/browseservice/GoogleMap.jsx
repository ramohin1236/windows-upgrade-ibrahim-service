import React from 'react'

const GoogleMap = () => {
  return (
    <div className="w-full h-full mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=XQwVifyktY1qoS3s6"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-md shadow-md"
      />
    </div>
  )
}

export default GoogleMap