<template>
    <nav class="bg-gray-400 border-b text-gray-700 border-gray-200 ">
      <div class="flex justify-between items-center h-16 px-4">
        <!-- Left side: Menu Icon and Brand -->
        <div class="flex items-center">
          <button 
            @click="toggleMenu" 
            class=" focus:outline-none hover:text-gray-300"
          >
            <svg 
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            </svg>
          </button>
          <a href="#" class="text-lg font-semibold  ml-2">
            Brand
          </a>
        </div>
  
        <!-- Center: Search Box -->
        <div class="flex-1 flex justify-center lg:justify-end px-4">
          <input 
            type="text" 
            placeholder="Search..." 
            class="w-full lg:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <!-- Right side: Login and Signup buttons -->
        <div class="hidden md:flex space-x-4">
          <button class=" font-medium hover:text-gray-200">Login</button>
          <button class="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class=" bg-gray-500 w-full">
        <div class="px-2   md:flex items-center">
          <a href="#" class="block px-3 py-3  text-base font-medium text-gray-300 hover:bg-[#d50000] hover:text-white">Home</a>
          <a href="#" class="block px-3 py-3  text-base font-medium text-gray-300 hover:bg-[#d50000] hover:text-white">Services</a>
          <a href="#" class="block px-3 py-3  text-base font-medium text-gray-300 hover:bg-[#d50000] hover:text-white">Contact</a>
          <a href="#" class="block px-3 py-3  text-base font-medium text-gray-300 hover:bg-[#d50000] hover:text-white">About</a>
          <div class="pt-4 border-t border-gray-200 md:hidden">
            <button class="text-gray-800 font-medium hover:text-gray-600 w-full text-left">Login</button>
            <button class="mt-1 bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 w-full text-left">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  