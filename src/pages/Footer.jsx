import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-200 bg-black text-sm">
      <div className="container mx-auto px-4 text-center">
        <ul className="flex flex-wrap justify-center gap-4">
          <li><a href="https://about.meta.com/" target="_blank" rel="noopener noreferrer">Meta</a></li>
          <li><a href="https://about.instagram.com/" target="_blank" rel="noopener noreferrer">About</a></li>
          <li><a href="https://about.instagram.com/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li><a href="https://www.metacareers.com/" target="_blank" rel="noopener noreferrer">Jobs</a></li>
          <li><a href="https://help.instagram.com/" target="_blank" rel="noopener noreferrer">Help</a></li>
          <li><a href="https://developers.facebook.com/" target="_blank" rel="noopener noreferrer">API</a></li>
          <li><a href="https://privacycenter.instagram.com/" target="_blank" rel="noopener noreferrer">Privacy</a></li>
          <li><a href="https://help.instagram.com/581066165581870" target="_blank" rel="noopener noreferrer">Terms</a></li>
          <li><a href="https://www.instagram.com/explore/locations/" target="_blank" rel="noopener noreferrer">Locations</a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram Lite</a></li>
          <li><a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer">Threads</a></li>
          <li><a href="https://help.instagram.com/271705822364157" target="_blank" rel="noopener noreferrer">Contact Uploading & Non-Users</a></li>
          <li><a href="https://about.meta.com/technologies/meta-verified/" target="_blank" rel="noopener noreferrer">Meta Verified</a></li>
        </ul>
        <p className="mt-4">© {new Date().getFullYear()} Meta</p>
      </div>
    </footer>
  );
};

export default Footer;
