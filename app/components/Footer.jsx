import React from 'react'

function Footer() {
  return (
    <div>
        <footer class="bg-gray-800 text-white">
  <div class="container mx-auto px-4 py-8 flex flex-wrap justify-between">
    <div class="w-full md:w-1/4 mb-4 md:mb-0">
      <h3 class="text-lg font-semibold mb-2">About Us</h3>
      <p class="text-sm">We are a team of passionate developers who love to create beautiful and functional ecommerce websites using tailwindcss and nextjs.</p>
    </div>
    <div class="w-full md:w-1/4 mb-4 md:mb-0">
      <h3 class="text-lg font-semibold mb-2">Quick Links</h3>
      <ul class="text-sm">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">Products</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
        <li><a href="#" class="hover:underline">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/4 mb-4 md:mb-0">
      <h3 class="text-lg font-semibold mb-2">Follow Us</h3>
      <ul class="flex space-x-4 text-sm">
        <li><a href="#" class="hover:text-blue-400"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#" class="hover:text-blue-400"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#" class="hover:text-blue-400"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#" class="hover:text-blue-400"><i class="fab fa-linkedin-in"></i></a></li>
      </ul>
    </div>
    <div class="w-full md:w-1/4 mb-4 md:mb-0">
      <h3 class="text-lg font-semibold mb-2">Subscribe</h3>
      <p class="text-sm">Get the latest news and updates from our newsletter.</p>
      <form action="#" method="post" class="flex mt-2">
        <input type="email" name="email" placeholder="Enter your email" class="w-full px-2 py-1 border border-gray-600 rounded-l-md focus:outline-none focus:border-blue-400"/>
        <button type="submit" name="submit" class="px-4 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"><i class="fas fa-paper-plane"></i></button>
      </form>
    </div>
  </div>
  <div class="container mx-auto px-4 py-4 border-t border-gray-600 flex justify-between items-center">
    <p class="text-sm">© 2023 by Ecommerce. All rights reserved.</p>
    <p class="text-sm">Powered by TailwindCSS and NextJS.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer