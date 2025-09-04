import React from "react";
import { MapPin, Clock, Shield, MessageCircle} from "lucide-react";


const BookingCard = () => {
  return (
    <div className="space-y-6">
      {/* Booking Card */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Cleaning
          </span>
        </div>

        <div className="text-gray-600 text-sm mb-2">Starts From</div>
        <div className="text-3xl font-bold text-gray-900 mb-6">₦24.00</div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            <MessageCircle className="w-4 h-4" />
            Chat Now
          </button>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
            Submit a Offer
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Verified & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-600" />
            <span>7 Days Availability</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <span>Manhattan Coverage</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
