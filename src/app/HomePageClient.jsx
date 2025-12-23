"use client";

import ProductCard from "./components/ProductCard";
// import { useCart } from "@/app/context/cartContext";
import Header from "./components/Header";
import Testimonials from "./components/client";

export default function HomePageClient({ hotSales, popularProducts }) {
  return (
    <main className="">
      <Header></Header>
      {/* <section className="bg-gray-900 text-white py-20 md:py-40 mb-10 text-center flex flex-col justify-center items-center"> */}
      <section
        className="
  bg-gray-900 text-white
  py-20 md:py-40
  px-4
  mb-10
  text-center
  flex flex-col
  justify-center
  items-center
"
      >
        <p className="text-sm md:text-base tracking-wide">
          WELCOME TO UNIFYSTORE
        </p>

        <h2 className="text-2xl md:text-4xl font-bold mb-6 max-w-2xl">
          Elevate Your Style With Premium Fashion
        </h2>

        <p className="text-gray-300 text-base md:text-lg mb-6 max-w-xl">
          Discover trendy wear, quality materials, & timeless outfits.
        </p>

        <a
          href="/shop"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-7 rounded shadow transition"
        >
          Shop Now
        </a>
      </section>

      {/* FEATURES */}
      {/* <section className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-14 mx-6 border-b border-gray-300 pb-6"> */}
      <section
        className="
  grid grid-cols-2 sm:grid-cols-4
  gap-6
  text-center
  mb-14
  px-2 md:px-6
  border-b border-gray-300
  pb-6
"
      >
        {[
          {
            icon: "fas fa-lock",
            label: "Secured Payment",
            subtext: "100% Safe",
          },
          {
            icon: "fas fa-truck",
            label: "Free Shipping",
            subtext: "Orders > 50k",
          },
          {
            icon: "fas fa-box",
            label: "Delivered With Care",
            subtext: "Safe Handling",
          },
          {
            icon: "fas fa-star",
            label: "Excellent Service",
            subtext: "24/7 Support",
          },
        ].map(({ icon, label, subtext }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center">
              <i className={`${icon} text-lg md:text-xl text-dark-700`}></i>
            </div>

            <span className="mt-2 font-medium text-sm text-gray-900">
              {label}
            </span>

            <span className="text-xs text-gray-500 mt-0.5">{subtext}</span>
          </div>
        ))}
      </section>

      {/* HOT SALES */}
      <section className="mb-12 mx-1 md:mx-6">
        <h3 className="text-2xl font-normal mb-6 text-center">
          Exclusive Deals
        </h3>

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1"> */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4"> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {hotSales.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      {/* FLASH SALES HERO */}
      {/* <section className="bg-red-700 text-white p-12 rounded-xl my-24 text-center shadow-lg max-w-6xl mx-auto"> */}
      <section
        className="
    bg-red-600 md:bg-red-700
    text-red-50 md:text-white
    px-5 py-8 md:p-12
    rounded-xl
    my-12 md:my-24
    text-center
    shadow-lg
    max-w-6xl
    mx-4 md:mx-auto
  "
      >
        <h2 className="text-xl md:text-4xl font-extrabold mb-2 md:mb-3">
          FLASH SALES ALERT!
        </h2>

        <p className="text-sm md:text-lg max-w-xl mx-auto mb-5 md:mb-6 leading-relaxed">
          Don't miss out on our limited-time offer — enjoy up to{" "}
          <span className="font-bold text-white md:text-white">50% OFF</span> on
          selected premium items. Elevate your wardrobe with unbeatable deals
          today!
        </p>

        <a
          href="/shop"
          className="
      inline-block
      bg-gray-900 hover:bg-black
      text-white
      px-6 py-2.5 md:px-8 md:py-3
      rounded-full
      text-sm md:text-base
      font-semibold
      uppercase
      tracking-wide
      shadow-lg
      hover:bg-gray-900
      transition
    "
          aria-label="Shop the flash sales now"
        >
          Shop Now
        </a>
      </section>

      {/* POPULAR */}
      <section className="mb-12">
        <h3 className="text-2xl font-normal mb-6 text-center">Trending Now</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1 mx-1 md:mx-6">
          {popularProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <Testimonials></Testimonials>

      {/* <section className="mt-16 text-left mx-9"> */}
      <section className="mt-5 text-left px-4 md:px-9">
        <p className="mb-3">Follow Us</p>
        <div className="flex justify-start  gap-6 text-gray-600">
          {/* <a
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
          </a> */}
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
      <footer className="mt-6 bg-gray-900 text-gray-400 text-center text-sm py-4">
        {/* <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between"> */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2025 UnifyStore — All Rights Reserved.</p>
          {/* <div className="flex space-x-6 mt-3 md:mt-0">
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
          </div> */}
        </div>
      </footer>
    </main>
  );
}
