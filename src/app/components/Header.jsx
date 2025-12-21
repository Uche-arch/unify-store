// "use client";

// import Link from "next/link";
// import { useCart } from "@/app/context/cartContext";

// export default function Header() {
//   const { cart } = useCart();
//   const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm flex justify-between items-center px-6 py-4">
//       <Link href="/" className="text-2xl font-bold">
//         UnifyStore
//       </Link>

//       <nav className="flex gap-6 text-lg">
//         <Link href="/shop" className="hover:text-green-600">
//           <i className="fas fa-bag-shopping"></i> Shop
//         </Link>

//         <Link href="/cart" className="relative hover:text-green-600">
//           <i className="fas fa-shopping-cart"></i> Cart
//           {/* CART BADGE */}
//           {totalQty > 0 && (
//             <span
//               className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold
//               w-5 h-5 flex items-center justify-center rounded-full"
//             >
//               {totalQty}
//             </span>
//           )}
//         </Link>
//       </nav>
//     </header>
    
     
//   );
// }


// "use client";

// import Link from "next/link";
// import { useCart } from "@/app/context/cartContext";

// export default function Header() {
//   const { cart } = useCart();
//   const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

//   return (
//     <>
//       {/* FIXED HEADER */}
//       <header className="fixed top-0 left-0 w-full z-50 bg-white flex justify-between items-center px-6 py-6">
//         <Link href="/" className="text-2xl font-bold">
//           UnifyStore
//         </Link>

//         <nav className="flex gap-6 text-lg">
//           <Link href="/shop" className="hover:text-green-600">
//             <i className="fas fa-bag-shopping"></i> Shop
//           </Link>

//           <Link href="/cart" className="relative hover:text-green-600">
//             <i className="fas fa-shopping-cart"></i> Cart
//             {totalQty > 0 && (
//               <span
//                 className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold
//                 w-5 h-5 flex items-center justify-center rounded-full"
//               >
//                 {totalQty}
//               </span>
//             )}
//           </Link>
//         </nav>
//       </header>

//       {/* SPACER TO PUSH CONTENT DOWN */}
//       <div className="h-20"></div>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/cartContext";

export default function Header() {
  const { cart } = useCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        className="
        fixed top-0 left-0 w-full z-50 
         bg-white
        
      "
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold tracking-wide">
            UnifyStore
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10 text-lg items-center">
            <NavLink href="/shop">Shop</NavLink>

            <Link
              href="/cart"
              className="relative hover:text-green-600 transition"
            >
              <i className="fas fa-shopping-cart text-xl"></i>

              {totalQty > 0 && (
                <span
                  className="
                  absolute -top-2 -right-3 w-5 h-5 text-xs 
                  bg-green-600 text-white rounded-full 
                  flex items-center justify-center 
                "
                >
                  {totalQty}
                </span>
              )}
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
            <NavLink href="/shop" mobile>
              Shop
            </NavLink>
            <Link href="/cart" className="relative text-lg">
              Cart
              {totalQty > 0 && (
                <span
                  className="
                  absolute -top-2 -right-4 w-5 h-5 text-xs 
                  bg-green-600 text-white rounded-full 
                  flex items-center justify-center 
                "
                >
                  {totalQty}
                </span>
              )}
            </Link>
          </div>
        )}
      </header>

      {/* SPACER */}
      <div className="h-20"></div>
    </>
  );
}

/* REUSABLE NAV LINK COMPONENT */
function NavLink({ href, children, mobile }) {
  return (
    <Link
      href={href}
      className={`
        relative group 
        ${mobile ? "text-lg py-1" : ""}
      `}
    >
      {children}

      {/* Hover Underline Animation */}
      <span
        className="
        absolute left-0 -bottom-1 w-0 h-[2px] 
        bg-green-600 transition-all duration-300 
        group-hover:w-full
      "
      ></span>
    </Link>
  );
}

