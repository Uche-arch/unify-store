// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   // Load cart from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) setCart(JSON.parse(storedCart));
//   }, []);

//   // Save cart to localStorage on change
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

// function addToCart(product, qty = 1, options = {}) {
//   setCart((prev) => {
//     // Find existing cart item with same id AND options (size & color)
//     const existing = prev.find(
//       (item) =>
//         item._id === product._id &&
//         item.selectedSize === options.size &&
//         item.selectedColor === options.color
//     );

//     if (existing) {
//       return prev.map((item) =>
//         item._id === product._id &&
//         item.selectedSize === options.size &&
//         item.selectedColor === options.color
//           ? { ...item, qty: item.qty + qty }
//           : item
//       );
//     } else {
//       return [
//         ...prev,
//         {
//           ...product,
//           qty,
//           selectedSize: options.size || "",
//           selectedColor: options.color || "",
//           image: options.image || product.images?.[0],
//         },
//       ];
//     }
//   });
// }




//   function removeFromCart(productId) {
//     setCart((prev) => prev.filter((item) => item._id !== productId));
//   }

//   function updateQty(productId, qty) {
//     // Allow empty input temporarily
//     if (qty === "") {
//       setCart((prev) =>
//         prev.map((item) =>
//           item._id === productId ? { ...item, qty: "" } : item
//         )
//       );
//       return;
//     }

//     // If user enters something invalid, fallback to 1
//     if (qty <= 0) qty = 1;

//     setCart((prev) =>
//       prev.map((item) => (item._id === productId ? { ...item, qty } : item))
//     );
//   }


//   function clearCart() {
//     setCart([]);
//   }

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }



// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// function makeVariantId(productId, size = "", color = "") {
//   // normalize to avoid accidental mismatches
//   return `${productId}__size:${size || ""}__color:${color || ""}`;
// }

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   // Load cart from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) setCart(JSON.parse(storedCart));
//   }, []);

//   // Save cart to localStorage on change
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);  STOPPPPPPPP

  // product: product object, qty: number, options: { size, color, image }
  // function addToCart(product, qty = 1, options = {}) {
  //   const size = options.size || "";
  //   const color = options.color || "";
  //   const image = options.image || product.images?.[0] || "";

  //   const variantId = makeVariantId(product._id, size, color);

  //   setCart((prev) => {
  //     // Find existing item by variantId
  //     const existing = prev.find((item) => item.variantId === variantId);

  //     if (existing) {
  //       return prev.map((item) =>
  //         item.variantId === variantId ? { ...item, qty: item.qty + qty } : item
  //       );
  //     } else {
  //       return [
  //         ...prev,
  //         {
  //           // keep original product id so orders still reference product._id
  //           _id: product._id,
  //           variantId, // unique id for this product+options
  //           name: product.name,
  //           price: product.price,
  //           qty,
  //           image,
  //           selectedSize: size,
  //           selectedColor: color,
  //         },
  //       ];
  //     }
  //   });
  // }


  // CARRY ONNNNNNNNN
//   function addToCart(product, qty = 1, options = {}) {
//     const size = options.size || "";
//     const color = options.color || "";
//     const image = options.image || product.images?.[0] || "";

//     const variantId = makeVariantId(product._id, size, color);

//     setCart((prev) => {
//       const existing = prev.find((item) => item.variantId === variantId);

//       const currentQty = existing ? existing.qty : 0;
//       const newQty = currentQty + qty;

//       // ✅ BLOCK if exceeds stock
//       if (newQty > product.stock) {
//         alert(`Only ${product.stock} item(s) left in stock`);
//         return prev;
//       }

//       if (existing) {
//         return prev.map((item) =>
//           item.variantId === variantId ? { ...item, qty: newQty } : item
//         );
//       }

//       return [
//         ...prev,
//         {
//           _id: product._id,
//           variantId,
//           name: product.name,
//           price: product.price,
//           qty,
//           image,
//           selectedSize: size,
//           selectedColor: color,
//         },
//       ];
//     });
//   }


//   function removeFromCart(variantId) {
//     setCart((prev) => prev.filter((item) => item.variantId !== variantId));
//   }

//   function updateQty(variantId, qty) {
//     // Allow empty input temporarily
//     if (qty === "") {
//       setCart((prev) =>
//         prev.map((item) =>
//           item.variantId === variantId ? { ...item, qty: "" } : item
//         )
//       );
//       return;
//     }

//     if (qty <= 0) qty = 1;

//     setCart((prev) =>
//       prev.map((item) =>
//         item.variantId === variantId ? { ...item, qty } : item
//       )
//     );
//   }

//  function clearCart() {
//    setCart([]);
//    localStorage.removeItem("cart"); // <-- THIS is the needed fix
//  }


//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }



"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function makeVariantId(productId, size = "", color = "") {
  return `${productId}__size:${size}__color:${color}`;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ ADD TO CART WITH STOCK CHECK
  function addToCart(product, qty = 1, options = {}) {
    const size = options.size || "";
    const color = options.color || "";
    const image = options.image || product.images?.[0] || "";

    const variantId = makeVariantId(product._id, size, color);

    setCart((prev) => {
      const existing = prev.find((i) => i.variantId === variantId);
      const currentQty = existing ? existing.qty : 0;
      const newQty = currentQty + qty;

      const availableStock =
        typeof product.stock === "number" ? product.stock : Infinity;

      if (newQty > availableStock) {
        alert(`Only ${availableStock} item(s) left`);
        return prev;
      }


      if (existing) {
        return prev.map((i) =>
          i.variantId === variantId ? { ...i, qty: newQty } : i
        );
      }

      return [
        ...prev,
        {
          _id: product._id,
          variantId,
          name: product.name,
          price: product.price,
          qty,
          image,
          selectedSize: size,
          selectedColor: color,
        },
      ];
    });
  }

  function removeFromCart(variantId) {
    setCart((prev) => prev.filter((i) => i.variantId !== variantId));
  }

  function updateQty(variantId, qty) {
    if (qty === "" || qty < 1) return;

    setCart((prev) =>
      prev.map((i) => (i.variantId === variantId ? { ...i, qty } : i))
    );
  }

  function clearCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
