// PopupPage.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PopupPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const message = location.state?.message||"N/A";
  // Show popup when component is mounted
  useEffect(() => {
    setShowPopup(true);
  }, []);

  // Close popup and return to previous page
  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => navigate("/contact"), 300); // Delay for animation
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {showPopup && (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl mb-4">Thank you 🫶</h2>
          <p>{message}🫶</p>
          <button
            onClick={closePopup}
            className="mt-4 px-4 py-2 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700">
                X
          </button>
        </div>
      )}
    </div>
  );
}

export default PopupPage;
