"use client";

import ProductCard from "./components/ProductCard";
// import { useCart } from "@/app/context/cartContext";
import Header from "./components/Header";
import Testimonials from "./components/client";


export default function HomePageClient({ hotSales, popularProducts }) {
 

  return (
    <main className="">
      <Header></Header>
      {/* HEADER */}
      {/* HERO */}
      {/* <section className="bg-gray-900 text-white p-10 rounded-lg mb-10 text-center">
        <p>WELCOME TO UNIFYSTORE</p>
        <h2 className="text-4xl font-bold mb-4">
          Elevate Your Style With Premium Fashion
        </h2>
        <p className="text-gray-300 text-lg">
          Discover trendy wear, quality materials, & timeless outfits.
        </p>
      </section> */}
      <section className="bg-gray-900 text-white p-10  mb-10 text-center h-[50vh] lg:h-[90vh] flex flex-col justify-center items-center">
        <p>WELCOME TO UNIFYSTORE</p>
        <h2 className="text-4xl font-bold mb-4">
          Elevate Your Style With Premium Fashion
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Discover trendy wear, quality materials, & timeless outfits.
        </p>

        <a
          href="/shop"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded shadow transition"
        >
          Shop Now
        </a>
      </section>

      {/* FEATURES
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-center mb-14">
        <div className="p-4 bg-gray-100 rounded-lg font-medium">
          <i class="fas fa-lock"></i>
          <br />
          Secured Payment
        </div>
        <div className="p-4 bg-gray-100 rounded-lg font-medium">
          <i class="fas fa-truck"></i>
          <br />
          Free Shipping
        </div>
        <div className="p-4 bg-gray-100 rounded-lg font-medium">
          <i class="fas fa-box"></i> <br />
          Delivered With Care
        </div>
        <div className="p-4 bg-gray-100 rounded-lg font-medium">
          <i class="fas fa-star"></i> <br />
          Excellent Service
        </div>
      </section> */}
      {/* FEATURES */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-14 mx-6 border-b border-gray-300 pb-6">
        {[
          { icon: "fas fa-lock", label: "Secured Payment" },
          { icon: "fas fa-truck", label: "Free Shipping" },
          { icon: "fas fa-box", label: "Delivered With Care" },
          { icon: "fas fa-star", label: "Excellent Service" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <i className={`${icon} text-xl text-dark-700`}></i>
            </div>
            <span className="mt-4 font-medium text-gray-900 max-w-xs">
              {label}
            </span>
          </div>
        ))}
      </section>

      {/* HOT SALES
      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-6">
          <i className="fas fa-fire"></i> Hot Sales
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {hotSales.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section> */}
      {/* HOT SALES */}
      <section className="mb-12 mx-6">
        <h3 className="text-4xl font-normal mb-6 text-center">
          <i className="fas fa-fire mr-2"></i> Hot Sales
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1">
          {hotSales.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      {/* FLASH SALES HERO
      <section className="bg-red-600 text-white p-10 rounded-lg mb-14 text-center">
        <h2 className="text-3xl font-bold mb-4">
          FLASH SALES!! Enjoy 50% Off Selected Items
        </h2>
        <a
          href="/shop"
          className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-lg"
        >
          Shop Now
        </a>
      </section> */}

      {/* FLASH SALES HERO */}
      <section className="bg-red-700 text-white p-12 rounded-xl my-24 text-center shadow-lg max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-3 tracking-wide drop-shadow-md">
          🔥 FLASH SALES ALERT! 🔥
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-6 leading-relaxed drop-shadow-sm">
          Don't miss out on our limited-time offer — enjoy up to{" "}
          <span className="font-bold">50% OFF</span> on selected premium items.
          Elevate your wardrobe with unbeatable deals today!
        </p>
        <a
          href="/shop"
          className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wide shadow-lg hover:bg-gray-900 transition"
          aria-label="Shop the flash sales now"
        >
          Shop Now
        </a>
      </section>

      {/* POPULAR */}
      <section className="mb-12">
        <h3 className="text-4xl font-normal mb-6 text-center">
          <i className="fas fa-star mr-2"></i> Popular Products
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1 mx-6">
          {popularProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <Testimonials></Testimonials>
      {/* SOCIALS
      <section className="mt-16 text-right">
        <p className="text-lg font-semibold">Follow Us</p>
        <div className="flex justify-end gap-4 mt-2">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>
      </section> */}
      {/* SOCIALS */}
      <section className="mt-16 text-left mx-9">
        <p className="text-lg  mb-3">Follow Us</p>
        <div className="flex justify-start  gap-6 text-gray-600">
          <a
            href="#"
            className="hover:text-pink-600 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
            aria-label="Follow us on Twitter"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="#"
            className="hover:text-blue-700 transition-colors"
            aria-label="Follow us on Facebook"
          >
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
        </div>
      </section>

      {/* FOOTER
      <footer className="mt-14 text-center text-sm text-gray-600">
        © 2025 UnifyStore — All Rights Reserved.
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
