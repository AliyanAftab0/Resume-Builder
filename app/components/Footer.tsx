import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-800 text-center py-4">
        &copy; {new Date().getFullYear()} Resume Builder. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
