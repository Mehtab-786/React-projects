import React from "react";

function Footer() {
  return (
    <section className="bg-neutral-900 text-gray-300 border-t border-neutral-700 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Blog Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Mega Blog</h2>
          <p className="text-sm text-gray-400 max-w-xs">
            Sharing insights, stories, and resources for curious minds. Stay
            inspired and keep learning!
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-4 text-sm">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#posts" className="hover:text-white transition">
            Posts
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

         </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-neutral-800">
        &copy; {new Date().getFullYear()} Mega Blog. All rights reserved.
      </div>
    </section>
  );
}

export default Footer;
