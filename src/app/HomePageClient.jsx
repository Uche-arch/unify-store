"use client";
import { useState, useEffect } from "react"; // 1. Added missing imports
import ProductCard from "./components/ProductCard";
// import { useCart } from "@/app/context/cartContext";
import Header from "./components/Header";
import Testimonials from "./components/client";
import Image from "next/image";
import Link from "next/link";
import ShopNow from "./components/shop";


export default function HomePageClient({ hotSales, popularProducts }) {
// 2. Move the state and logic directly into the component body
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999);

      const diff = midnight - now;

      if (diff > 0) {
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer); 
  }, []);

  // 3. Define the helper function here so it's accessible below
  const formatNum = (num) => num.toString().padStart(2, '0');
  return (
    <main className="">
      <Header></Header>
      

      <section className="w-full mb-10">
        <div className="relative h-[50vh] md:h-[80vh] w-full">
          <Image
            src="/hero.png"
            alt="Featured Product"
            fill
            priority
            className="object-cover"
          />

          
          {/* Optional content */}
          <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
            <div
              className="hidden hidden md:block
"
            >
             
              <Link href="/shop">
  <button className="bg-dark-900 text-black px-8 py-4 border rounded-lg font-bold cursor-pointer transition absolute left-[75%] top-[85%]">
    Shop Now
  </button>
</Link>
            </div>
          </div>
        </div>
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
      <ShopNow></ShopNow>


      {/* FLASH SALES HERO */}
<section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-black text-white px-4 py-8 md:px-12 md:py-16 
  rounded-2xl md:rounded-[2rem] 
  my-6 md:my-16 text-center shadow-2xl max-w-6xl mx-4 md:mx-auto border border-white/10">

  {/* Decorative Glow Elements - Hidden on mobile to save performance/visual clutter */}
  <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] -translate-x-1/2 -translate-y-1/2" />
  <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 blur-[100px] translate-x-1/4 translate-y-1/4" />

  <div className="relative z-10">
    {/* Heading: Smaller and tighter on mobile */}
    <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-3 tracking-tighter uppercase italic leading-tight">
      Flash Sales <span className="text-red-400">Alert!</span>
    </h2>

    {/* Paragraph: Reduced max-width and bottom margin */}
    <p className="text-sm md:text-lg max-w-prose mx-auto mb-6 text-red-100 font-light leading-snug px-2">
      Don't miss out on our limited-time offer. Enjoy up to{" "}
      <span className="font-bold text-white underline decoration-red-400 decoration-2 md:decoration-4 underline-offset-4">
        50% OFF
      </span>{" "}
      on selected premium items.
    </p>

    {/* Button: Smaller padding for mobile */}
    <a
      href="/shop"
      className="inline-block bg-white text-black px-6 py-2 md:px-10 md:py-4 rounded-full text-xs md:text-base font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
    >
      Shop Now
    </a>

    {/* TIMER SECTION: Tightened gaps and smaller digits on small screens */}
    <div className="flex justify-center gap-2 md:gap-6 mt-8 font-mono">
      <div className="flex flex-col">
        <span className="text-2xl sm:text-3xl md:text-5xl font-bold leading-none">{formatNum(timeLeft.hours)}</span>
        <span className="text-[10px] md:text-xs uppercase text-red-300 mt-1">Hrs</span>
      </div>
      
      <span className="text-xl md:text-4xl font-bold animate-pulse">:</span>
      
      <div className="flex flex-col">
        <span className="text-2xl sm:text-3xl md:text-5xl font-bold leading-none">{formatNum(timeLeft.minutes)}</span>
        <span className="text-[10px] md:text-xs uppercase text-red-300 mt-1">Min</span>
      </div>
      
      <span className="text-xl md:text-4xl font-bold animate-pulse">:</span>
      
      <div className="flex flex-col">
        <span className="text-2xl sm:text-3xl md:text-5xl font-bold leading-none">{formatNum(timeLeft.seconds)}</span>
        <span className="text-[10px] md:text-xs uppercase text-red-300 mt-1">Sec</span>
      </div>
    </div>
  </div>
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
      <ShopNow></ShopNow>

      {/* Testimonials */}
      <Testimonials></Testimonials>
      {/* <ShopNow></ShopNow> */}


      {/* <section className="mt-16 text-left mx-9"> */}
      <section className="mt-5 text-left px-4 md:px-9">
        <p className="mb-3">Stay Inspired</p>
        <div className="flex justify-start  gap-6 text-gray-600">
         
          <a
            href="#"
            className="hover:text-blue-700 transition-colors"
            aria-label="Follow us on Facebook"
          >
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
           <a
            href="#"
            className="hover:text-blue-700 transition-colors"
            aria-label="Follow us on Facebook"
          >
            <i className="fab fa-tiktok fa-lg"></i>
          </a>
        </div>
      </section>


     
      {/* FOOTER */}
      <footer className="mt-6 bg-gray-900 text-gray-400 text-center text-sm py-4">
        {/* <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between"> */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2025 UnifyStore — All Rights Reserved.</p>
          
        </div>
      </footer>
    </main>
  );
}
