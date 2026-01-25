"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    open: false,
    message: "",
  });

  function openModal(message) {
    setModal({ open: true, message });
  }

  function closeModal() {
    setModal({ open: false, message: "" });
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-lg animate-fadeIn">
            <h2 className="text-lg font-semibold mb-3">Stock Limit</h2>

            <p className="text-gray-700 mb-5">{modal.message}</p>

            <button
              onClick={closeModal}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
