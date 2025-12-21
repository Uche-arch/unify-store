"use client";

import { useState } from "react";
import ProductCard from "@/app/components/ProductCard";
// import Header from "./components/Header";
import Header from "@/app/components/Header";



export default function ShopPageClient({ products }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Extract category list
  const categories = [
    ...new Set(products.map((p) => p.category || "Uncategorized")),
  ];

  // Filter Logic
  const filtered = products.filter((p) => {
    const matchTitle = (p.name || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category ? p.category === category : true;

    return matchTitle && matchCategory;
  });


  return (
    <main className="min-h-screen flex flex-col pt-6">
      <Header />

      {/* FILTER BAR
      <div
        className="
      fixed top-20 left-0 w-full z-40 
      bg-white border-b 
      flex flex-col md:flex-row gap-4 
      p-4 mt--4
    "
      >
        <div className="max-w-6xl mx-auto w-full flex flex-row gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border rounded-md"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-60 p-3 border rounded-md"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div> */}
      {/* FILTER BAR */}
      <div
        className="
    fixed top-20 left-0 w-full z-40 
    bg-white 
    flex flex-col md:flex-row gap-4 
    p-4
    shadow-sm
  "
      >
        <div className="max-w-6xl mx-auto w-full flex flex-row gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
        w-full p-3 
        rounded-lg
        bg-gray-100 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition
      "
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
        w-60 p-3 
        rounded-lg
        bg-gray-100 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition
      "
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* SPACER TO PUSH PRODUCTS DOWN */}
      <div className="h-16"></div>

      {/* MAIN CONTENT */}
      <div className="flex-grow mx-6 pt-4">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-600 text-lg mt-20">
            Sorry, no products found matching your criteria.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {filtered.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* PRODUCTS
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 mx-6">
        {filtered.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div> */}

      {/* FOOTER
      <footer className="mt-auto text-center py-6 border-t">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} unifystore. All rights reserved.
        </p>
      </footer> */}
      {/* FOOTER */}
      <footer className="mt-14 bg-gray-900 text-gray-400 text-center text-sm py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p>© 2025 UnifyStore — All Rights Reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Contact Us"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
