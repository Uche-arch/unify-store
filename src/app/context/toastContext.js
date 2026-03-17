"use client";

import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // const showToast = useCallback((message) => {
  //   const id = Date.now();

  //   setToasts((prev) => [...prev, { id, message }]);

  //   // Remove after 3 seconds
  //   setTimeout(() => {
  //     setToasts((prev) => prev.filter((t) => t.id !== id));
  //   }, 3000);
  // }, []);

  const showToast = useCallback((message) => {
  setToasts((prev) => {
    // If this exact message is already showing, don't add again
    if (prev.some((t) => t.message === message)) {
      return prev;
    }

    const id = Date.now();

    // Remove after 3 seconds
    setTimeout(() => {
      setToasts((current) => current.filter((t) => t.id !== id));
    }, 3000);

    return [...prev, { id, message }];
  });
}, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* TOAST CONTAINER */}
      <div className="fixed top-22 right-5 space-y-2 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-black text-white px-4 py-2 rounded shadow animate-slide-in"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
