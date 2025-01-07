"use client";

import React from "react";

const FollowUsBanner = () => {
  return (
    <div className="follow-us-banner bg-gradient-to-r from-blue-500 to-blue-700 py-8 px-4 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Show some love! </h2>
        <p className="text-lg mb-6"> Follow Us On Social Media <br />Stay updated with our latest products, offers, and news!</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:bg-blue-600 p-3 rounded-full transition"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-8 h-8" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:bg-blue-600 p-3 rounded-full transition"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-8 h-8" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:bg-blue-600 p-3 rounded-full transition"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_logo_2012.svg" alt="Twitter" className="w-8 h-8" />
          </a>
          {/* Add more icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default FollowUsBanner;
