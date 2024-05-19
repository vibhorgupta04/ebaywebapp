import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-4 py-6 border-t text-xs text-gray-700">
      <div className='max-w-7xl mx-auto'>
        <div className="pb-6 flex flex-wrap gap-4 cursor-pointer">
          <div className="hover:underline">About eBay</div>
          <div className="hover:underline">Announcements</div>
          <div className="hover:underline">Community</div>
          <div className="hover:underline">Security Center</div>
          <div className="hover:underline">Policy</div>
          <div className="hover:underline">Help & Contact</div>
        </div>
        <div>Copyright © 1995-2024 eBay Inc. All Rights Reserved. </div>
      </div>
    </footer>
  );
};

export default Footer;
