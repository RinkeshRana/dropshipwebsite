import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              We are a team of passionate developers who love to create
              beautiful and functional ecommerce websites using tailwindcss and
              nextjs.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="flex space-x-4 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
            <p className="text-sm">
              Get the latest news and updates from our newsletter.
            </p>
            <form action="#" method="post" className="flex mt-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-2 py-1 border border-gray-600 rounded-l-md focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                name="submit"
                className="px-4 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4 border-t border-gray-600 flex justify-between items-center">
          <p className="text-sm">© 2023 by Ecommerce. All rights reserved.</p>
          <p className="text-sm">Powered by TailwindCSS and NextJS.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
