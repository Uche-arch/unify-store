// "use client";

// import { useState, useEffect } from "react";

// export default function AdminPage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(false);

//   // Product form state
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     oldPrice: "",
//     description: "",
//     images: "",
//     category: "",
//   });
//   const [formError, setFormError] = useState("");
//   const [formLoading, setFormLoading] = useState(false);

//   // Editing
//   const [editingId, setEditingId] = useState(null);
//   const [editProduct, setEditProduct] = useState({
//     name: "",
//     price: "",
//     oldPrice: "",
//     description: "",
//     images: "",
//     category: "",
//   });
//   const [editError, setEditError] = useState("");
//   const [editLoading, setEditLoading] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (token) setIsLoggedIn(true);
//   }, []);

//   async function handleLogin(e) {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("/api/admin/login", {
//         method: "POST",
//         body: JSON.stringify({ password }),
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Login failed");
//         return;
//       }

//       localStorage.setItem("adminToken", data.token);
//       setIsLoggedIn(true);
//       setPassword("");
//       fetchProducts();
//     } catch (err) {
//       setError("Network error");
//     }
//   }

//   async function fetchProducts() {
//     setLoadingProducts(true);
//     try {
//       const res = await fetch("/api/products");
//       const data = await res.json();
//       setProducts(data);
//     } catch {
//       setProducts([]);
//     } finally {
//       setLoadingProducts(false);
//     }
//   }

//   useEffect(() => {
//     if (isLoggedIn) fetchProducts();
//   }, [isLoggedIn]);

//   async function handleLogout() {
//     localStorage.removeItem("adminToken");
//     setIsLoggedIn(false);
//     setProducts([]);
//   }

//   // New: Handle image upload to Cloudinary
//   async function handleImageUpload(e) {
//     const files = e.target.files;
//     if (!files.length) return;

//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       formData.append("images", files[i]);
//     }

//     try {
//       const res = await fetch("/api/uploadImage", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Upload failed");
//         return;
//       }

//       // Append uploaded URLs to images input (comma separated)
//       setNewProduct((prev) => ({
//         ...prev,
//         images: prev.images
//           ? prev.images + ", " + data.urls.join(", ")
//           : data.urls.join(", "),
//       }));
//     } catch (err) {
//       alert("Upload error");
//     }
//   }

//   // Add product
//   async function handleAddProduct(e) {
//     e.preventDefault();
//     setFormError("");
//     setFormLoading(true);

//     // Validate required fields
//     if (!newProduct.name || !newProduct.price) {
//       setFormError("Name and price are required");
//       setFormLoading(false);
//       return;
//     }

//     const token = localStorage.getItem("adminToken");

//     try {
//       const res = await fetch("/api/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           ...newProduct,
//           price: Number(newProduct.price),
//           oldPrice: newProduct.oldPrice
//             ? Number(newProduct.oldPrice)
//             : undefined,
//           images: newProduct.images
//             ? newProduct.images.split(",").map((url) => url.trim())
//             : [],
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setFormError(data.error || "Failed to add product");
//         setFormLoading(false);
//         return;
//       }

//       setNewProduct({
//         name: "",
//         price: "",
//         oldPrice: "",
//         description: "",
//         images: "",
//         category: "",
//       });

//       fetchProducts();
//     } catch (err) {
//       setFormError("Network error");
//     } finally {
//       setFormLoading(false);
//     }
//   }

//   // ... rest of your editing, deleting code unchanged ...

//   if (!isLoggedIn) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
//         <form
//           onSubmit={handleLogin}
//           className="bg-white p-8 rounded shadow-md w-80"
//         >
//           <h2 className="text-2xl mb-4 font-semibold">Admin Login</h2>

//           <input
//             type="password"
//             placeholder="Admin Password"
//             className="border p-2 w-full mb-4 rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           {error && (
//             <p className="text-red-500 mb-4 text-sm font-medium">{error}</p>
//           )}

//           <button
//             type="submit"
//             className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r p-4 flex flex-col">
//         <h1 className="text-xl font-bold mb-6">My Store Admin</h1>
//         <nav className="flex flex-col space-y-3">
//           <button className="text-left font-semibold">Products</button>
//           <button className="text-left font-semibold opacity-50 cursor-not-allowed">
//             Orders (Coming Soon)
//           </button>
//         </nav>

//         <button
//           onClick={handleLogout}
//           className="mt-auto bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
//         >
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-auto bg-gray-50">
//         <h2 className="text-2xl font-semibold mb-6">Manage Products</h2>

//         {/* Add Product Form */}
//         <form
//           onSubmit={handleAddProduct}
//           className="mb-8 bg-white p-6 rounded shadow"
//         >
//           <h3 className="text-lg font-semibold mb-4">Add New Product</h3>

//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <input
//               type="text"
//               placeholder="Name *"
//               className="border p-2 rounded"
//               value={newProduct.name}
//               onChange={(e) =>
//                 setNewProduct((prev) => ({ ...prev, name: e.target.value }))
//               }
//             />
//             <input
//               type="number"
//               placeholder="Price *"
//               className="border p-2 rounded"
//               value={newProduct.price}
//               onChange={(e) =>
//                 setNewProduct((prev) => ({ ...prev, price: e.target.value }))
//               }
//             />
//             <input
//               type="number"
//               placeholder="Old Price"
//               className="border p-2 rounded"
//               value={newProduct.oldPrice}
//               onChange={(e) =>
//                 setNewProduct((prev) => ({ ...prev, oldPrice: e.target.value }))
//               }
//             />
//             <input
//               type="text"
//               placeholder="Category"
//               className="border p-2 rounded"
//               value={newProduct.category}
//               onChange={(e) =>
//                 setNewProduct((prev) => ({ ...prev, category: e.target.value }))
//               }
//             />
//             {/* Images input + file uploader */}
//             <div className="flex items-center space-x-4 md:col-span-2">
//               <input
//                 type="text"
//                 placeholder="Images (comma separated URLs)"
//                 className="border p-2 rounded flex-grow"
//                 value={newProduct.images}
//                 onChange={(e) =>
//                   setNewProduct((prev) => ({ ...prev, images: e.target.value }))
//                 }
//               />
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="cursor-pointer"
//               />
//             </div>

//             <textarea
//               placeholder="Description"
//               className="border p-2 rounded md:col-span-2"
//               rows={3}
//               value={newProduct.description}
//               onChange={(e) =>
//                 setNewProduct((prev) => ({
//                   ...prev,
//                   description: e.target.value,
//                 }))
//               }
//             />
//           </div>

//           {formError && <p className="text-red-500 mt-2 mb-2">{formError}</p>}

//           <button
//             type="submit"
//             disabled={formLoading}
//             className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition disabled:opacity-60"
//           >
//             {formLoading ? "Adding..." : "Add Product"}
//           </button>
//         </form>

//         {/* Products Table */}
//         {loadingProducts && <p>Loading products...</p>}

//         {!loadingProducts && products.length === 0 && <p>No products found.</p>}

//         {!loadingProducts && products.length > 0 && (
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-white border-b">
//                 <th className="border p-2 text-left">Name</th>
//                 <th className="border p-2 text-left">Price</th>
//                 <th className="border p-2 text-left">Category</th>
//                 <th className="border p-2 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map(({ _id, name, price, category }) => (
//                 <tr key={_id} className="bg-white border-b hover:bg-gray-100">
//                   <td className="border p-2">{name}</td>
//                   <td className="border p-2">₦{price}</td>
//                   <td className="border p-2">{category}</td>
//                   <td className="border p-2 space-x-2">
//                     <button
//                       onClick={() =>
//                         startEdit(products.find((p) => p._id === _id))
//                       }
//                       className="text-blue-600 hover:underline"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(_id)}
//                       className="text-red-600 hover:underline"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}

//         {/* Edit Product Modal */}
//         {editingId && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//             <form
//               onSubmit={handleEditProduct}
//               className="bg-white p-6 rounded shadow-md w-96"
//             >
//               <h3 className="text-lg font-semibold mb-4">Edit Product</h3>

//               <input
//                 type="text"
//                 placeholder="Name *"
//                 className="border p-2 w-full mb-2 rounded"
//                 value={editProduct.name}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({
//                     ...prev,
//                     name: e.target.value,
//                   }))
//                 }
//               />
//               <input
//                 type="number"
//                 placeholder="Price *"
//                 className="border p-2 w-full mb-2 rounded"
//                 value={editProduct.price}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({
//                     ...prev,
//                     price: e.target.value,
//                   }))
//                 }
//               />
//               <input
//                 type="number"
//                 placeholder="Old Price"
//                 className="border p-2 w-full mb-2 rounded"
//                 value={editProduct.oldPrice}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({
//                     ...prev,
//                     oldPrice: e.target.value,
//                   }))
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder="Category"
//                 className="border p-2 w-full mb-2 rounded"
//                 value={editProduct.category}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({
//                     ...prev,
//                     category: e.target.value,
//                   }))
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder="Images (comma separated URLs)"
//                 className="border p-2 w-full mb-2 rounded"
//                 value={editProduct.images}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({
//                     ...prev,
//                     images: e.target.value,
//                   }))
//                 }
//               />
//               <textarea
//                 placeholder="Description"
//                 className="border p-2 w-full mb-2 rounded"
//                 rows={3}
//                 value={editProduct.description}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({
//                     ...prev,
//                     description: e.target.value,
//                   }))
//                 }
//               />

//               {editError && <p className="text-red-500 mb-2">{editError}</p>}

//               <div className="flex justify-end space-x-2 mt-4">
//                 <button
//                   type="button"
//                   onClick={cancelEdit}
//                   className="py-2 px-4 rounded border"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={editLoading}
//                   className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-60"
//                 >
//                   {editLoading ? "Saving..." : "Save"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";

// export default function AdminPage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(false);

//   // Product form state with images as array
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     oldPrice: "",
//     description: "",
//     images: [],
//     category: "",
//   });
//   const [formError, setFormError] = useState("");
//   const [formLoading, setFormLoading] = useState(false);

//   // Editing
//   const [editingId, setEditingId] = useState(null);
//   const [editProduct, setEditProduct] = useState({
//     name: "",
//     price: "",
//     oldPrice: "",
//     description: "",
//     images: [],
//     category: "",
//   });
//   const [editError, setEditError] = useState("");
//   const [editLoading, setEditLoading] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (token) setIsLoggedIn(true);
//   }, []);

//   async function handleLogin(e) {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("/api/admin/login", {
//         method: "POST",
//         body: JSON.stringify({ password }),
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Login failed");
//         return;
//       }

//       localStorage.setItem("adminToken", data.token);
//       setIsLoggedIn(true);
//       setPassword("");
//       fetchProducts();
//     } catch (err) {
//       setError("Network error");
//     }
//   }

//   async function fetchProducts() {
//     setLoadingProducts(true);
//     try {
//       const res = await fetch("/api/products");
//       const data = await res.json();
//       setProducts(data);
//     } catch {
//       setProducts([]);
//     } finally {
//       setLoadingProducts(false);
//     }
//   }

//   useEffect(() => {
//     if (isLoggedIn) fetchProducts();
//   }, [isLoggedIn]);

//   async function handleLogout() {
//     localStorage.removeItem("adminToken");
//     setIsLoggedIn(false);
//     setProducts([]);
//   }

//   // Handle image upload to Cloudinary and append URLs to images array
//   async function handleImageUpload(e) {
//     const files = e.target.files;
//     if (!files.length) return;

//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       formData.append("images", files[i]);
//     }

//     try {
//       const res = await fetch("/api/uploadImage", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Upload failed");
//         return;
//       }

//       setNewProduct((prev) => ({
//         ...prev,
//         images: [...prev.images, ...data.urls],
//       }));
//     } catch (err) {
//       alert("Upload error");
//     }
//   }

//   // Add product
//   async function handleAddProduct(e) {
//     e.preventDefault();
//     setFormError("");
//     setFormLoading(true);

//     if (!newProduct.name || !newProduct.price) {
//       setFormError("Name and price are required");
//       setFormLoading(false);
//       return;
//     }

//     const token = localStorage.getItem("adminToken");

//     try {
//       const res = await fetch("/api/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           ...newProduct,
//           price: Number(newProduct.price),
//           oldPrice: newProduct.oldPrice
//             ? Number(newProduct.oldPrice)
//             : undefined,
//           images: newProduct.images.filter(Boolean), // just in case
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setFormError(data.error || "Failed to add product");
//         setFormLoading(false);
//         return;
//       }

//       setNewProduct({
//         name: "",
//         price: "",
//         oldPrice: "",
//         description: "",
//         images: [],
//         category: "",
//       });

//       fetchProducts();
//     } catch (err) {
//       setFormError("Network error");
//     } finally {
//       setFormLoading(false);
//     }
//   }

//   // Start editing product
//   function startEdit(product) {
//     setEditingId(product._id);
//     setEditProduct({
//       name: product.name || "",
//       price: product.price || "",
//       oldPrice: product.oldPrice || "",
//       description: product.description || "",
//       images: product.images || [],
//       category: product.category || "",
//     });
//     setEditError("");
//   }

//   // Cancel editing
//   function cancelEdit() {
//     setEditingId(null);
//     setEditProduct({
//       name: "",
//       price: "",
//       oldPrice: "",
//       description: "",
//       images: [],
//       category: "",
//     });
//     setEditError("");
//   }

//   // Handle edit product submit
//   async function handleEditProduct(e) {
//     e.preventDefault();
//     setEditError("");
//     setEditLoading(true);

//     if (!editProduct.name || !editProduct.price) {
//       setEditError("Name and price are required");
//       setEditLoading(false);
//       return;
//     }

//     const token = localStorage.getItem("adminToken");

//     try {
//       const res = await fetch(`/api/products/${editingId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           ...editProduct,
//           price: Number(editProduct.price),
//           oldPrice: editProduct.oldPrice
//             ? Number(editProduct.oldPrice)
//             : undefined,
//           images: editProduct.images.filter(Boolean),
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setEditError(data.error || "Failed to update product");
//         setEditLoading(false);
//         return;
//       }

//       cancelEdit();
//       fetchProducts();
//     } catch (err) {
//       setEditError("Network error");
//     } finally {
//       setEditLoading(false);
//     }
//   }

//   // Delete product
//   async function handleDelete(id) {
//     if (!confirm("Are you sure you want to delete this product?")) return;

//     const token = localStorage.getItem("adminToken");

//     try {
//       const res = await fetch(`/api/products/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) {
//         alert("Failed to delete product");
//         return;
//       }

//       fetchProducts();
//     } catch {
//       alert("Network error");
//     }
//   }

//   if (!isLoggedIn) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
//         <form
//           onSubmit={handleLogin}
//           className="bg-white p-8 rounded shadow-md w-80"
//         >
//           <h2 className="text-2xl mb-4 font-semibold">Admin Login</h2>

//           <input
//             type="password"
//             placeholder="Admin Password"
//             className="border p-2 w-full mb-4 rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           {error && (
//             <p className="text-red-500 mb-4 text-sm font-medium">{error}</p>
//           )}

//           <button
//             type="submit"
//             className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r p-4 flex flex-col">
//         <h1 className="text-xl font-bold mb-6">My Store Admin</h1>
//         <nav className="flex flex-col space-y-3">
//           <button className="text-left font-semibold">Products</button>
//           <button className="text-left font-semibold opacity-50 cursor-not-allowed">
//             Orders (Coming Soon)
//           </button>
//         </nav>

//         <button
//           onClick={handleLogout}
//           className="mt-auto bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
//         >
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-auto bg-gray-50">
//         <h2 className="text-2xl font-semibold mb-6">Manage Products</h2>

//         {/* Add Product Form */}
//         <form
//           onSubmit={handleAddProduct}
//           className="mb-8 bg-white p-6 rounded shadow"
//         >
//           <h3 className="text-lg font-semibold mb-4">Add New Product</h3>

//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <input
//               type="text"
//               placeholder="Name *"
//               className="border p-2 rounded"
//               value={newProduct.name}
//               onChange={(e) =>
//                 setNewProduct((prev) => ({ ...prev, name: e.target.value }))
//               }
//             />
//             <input
//               type="number"
//               placeholder="Price *"
//               className="border p-2 rounded"
//               value={newProduct.price}
//               onChange={(e) =>
//                 setNewProduct((prev) => ({ ...prev, price: e.target.value }))
//               }
//             />
//             <input
//               type="number"
//               placeholder="Old Price"
//               className="border p-2 rounded"
//               value={newProduct.oldPrice}
//               onChange={(e) =>
//                 setNewProduct((prev) => ({ ...prev, oldPrice: e.target.value }))
//               }
//             />
//             <input
//               type="text"
//               placeholder="Category"
//               className="border p-2 rounded"
//               value={newProduct.category}
//               onChange={(e) =>
//                 setNewProduct((prev) => ({ ...prev, category: e.target.value }))
//               }
//             />
//             {/* Images input + file uploader */}
//             <div className="flex items-center space-x-4 md:col-span-2">
//               <input
//                 type="text"
//                 placeholder="Images (comma separated URLs)"
//                 className="border p-2 rounded flex-grow"
//                 value={newProduct.images.join(", ")}
//                 onChange={(e) =>
//                   setNewProduct((prev) => ({
//                     ...prev,
//                     images: e.target.value
//                       .split(",")
//                       .map((url) => url.trim())
//                       .filter(Boolean),
//                   }))
//                 }
//               />
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="cursor-pointer"
//               />
//             </div>

//             <textarea
//               placeholder="Description"
//               className="border p-2 rounded md:col-span-2"
//               rows={3}
//               value={newProduct.description}
//               onChange={(e) =>
//                 setNewProduct((prev) => ({
//                   ...prev,
//                   description: e.target.value,
//                 }))
//               }
//             />
//           </div>

//           {formError && <p className="text-red-500 mt-2 mb-2">{formError}</p>}

//           <button
//             type="submit"
//             disabled={formLoading}
//             className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition disabled:opacity-60"
//           >
//             {formLoading ? "Adding..." : "Add Product"}
//           </button>
//         </form>

//         {/* Products Table */}
//         {loadingProducts && <p>Loading products...</p>}

//         {!loadingProducts && products.length === 0 && <p>No products found.</p>}

//         {!loadingProducts && products.length > 0 && (
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-white border-b">
//                 <th className="border p-2 text-left">Name</th>
//                 <th className="border p-2 text-left">Price</th>
//                 <th className="border p-2 text-left">Category</th>
//                 <th className="border p-2 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map(({ _id, name, price, category }) => (
//                 <tr key={_id} className="bg-white border-b hover:bg-gray-100">
//                   <td className="border p-2">{name}</td>
//                   <td className="border p-2">₦{price}</td>
//                   <td className="border p-2">{category}</td>
//                   <td className="border p-2 space-x-2">
//                     <button
//                       onClick={() =>
//                         startEdit(products.find((p) => p._id === _id))
//                       }
//                       className="text-blue-600 hover:underline"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(_id)}
//                       className="text-red-600 hover:underline"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}

//         {/* Edit Product Modal */}
//         {editingId && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//             <form
//               onSubmit={handleEditProduct}
//               className="bg-white p-6 rounded shadow-md w-96"
//             >
//               <h3 className="text-lg font-semibold mb-4">Edit Product</h3>

//               <input
//                 type="text"
//                 placeholder="Name *"
//                 className="border p-2 w-full mb-2 rounded"
//                 value={editProduct.name}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({ ...prev, name: e.target.value }))
//                 }
//               />
//               <input
//                 type="number"
//                 placeholder="Price *"
//                 className="border p-2 w-full mb-2 rounded"
//                 value={editProduct.price}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({ ...prev, price: e.target.value }))
//                 }
//               />
//               <input
//                 type="number"
//                 placeholder="Old Price"
//                 className="border p-2 w-full mb-2 rounded"
//                 value={editProduct.oldPrice}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({
//                     ...prev,
//                     oldPrice: e.target.value,
//                   }))
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder="Category"
//                 className="border p-2 w-full mb-2 rounded"
//                 value={editProduct.category}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({
//                     ...prev,
//                     category: e.target.value,
//                   }))
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder="Images (comma separated URLs)"
//                 className="border p-2 w-full mb-2 rounded"
//                 value={editProduct.images.join(", ")}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({
//                     ...prev,
//                     images: e.target.value
//                       .split(",")
//                       .map((url) => url.trim())
//                       .filter(Boolean),
//                   }))
//                 }
//               />
//               <textarea
//                 placeholder="Description"
//                 className="border p-2 w-full mb-2 rounded"
//                 rows={3}
//                 value={editProduct.description}
//                 onChange={(e) =>
//                   setEditProduct((prev) => ({
//                     ...prev,
//                     description: e.target.value,
//                   }))
//                 }
//               />

//               {editError && <p className="text-red-500 mb-2">{editError}</p>}

//               <div className="flex justify-end space-x-2 mt-4">
//                 <button
//                   type="button"
//                   onClick={cancelEdit}
//                   className="py-2 px-4 rounded border"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={editLoading}
//                   className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-60"
//                 >
//                   {editLoading ? "Saving..." : "Save"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";

// export default function AdminPage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(false);

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     oldPrice: "",
//     description: "",
//     images: [],
//     category: "",
//     popular: false, // initialize here
//   });

//   const [formError, setFormError] = useState("");
//   const [formLoading, setFormLoading] = useState(false);

//   // ---------- Login ----------
//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (token) setIsLoggedIn(true);
//   }, []);

//   async function handleLogin(e) {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("/api/admin/login", {
//         method: "POST",
//         body: JSON.stringify({ password }),
//         headers: { "Content-Type": "application/json" },
//       });

//       const data = await res.json();
//       if (!res.ok) return setError(data.error || "Login failed");

//       localStorage.setItem("adminToken", data.token);
//       setIsLoggedIn(true);
//       fetchProducts();
//     } catch {
//       setError("Network error");
//     }
//   }

//   // ---------- Fetch Products ----------
//   async function fetchProducts() {
//     setLoadingProducts(true);
//     try {
//       const res = await fetch("/api/products");
//       const data = await res.json();
//       setProducts(data);
//     } catch {
//       setProducts([]);
//     } finally {
//       setLoadingProducts(false);
//     }
//   }

//   useEffect(() => {
//     if (isLoggedIn) fetchProducts();
//   }, [isLoggedIn]);

//   // ---------- Logout ----------
//   function handleLogout() {
//     localStorage.removeItem("adminToken");
//     setIsLoggedIn(false);
//   }

//   //Handle delte product
//   async function handleDeleteProduct(id) {
//     if (!confirm("Are you sure you want to delete this product?")) return;

//     const token = localStorage.getItem("adminToken");

//     try {
//       const res = await fetch(`/api/products/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Failed to delete product");
//         return;
//       }

//       // Refresh the products list after deletion
//       fetchProducts();
//     } catch (error) {
//       alert("Network error, try again.");
//     }
//   }

//   // ---------- Image Upload ----------
//   async function handleImageUpload(e) {
//     const files = e.target.files;
//     if (!files.length) return;

//     const formData = new FormData();
//     for (let file of files) formData.append("images", file);

//     try {
//       const res = await fetch("/api/uploadImage", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       if (!res.ok) return alert(data.error || "Upload failed");

//       setNewProduct((prev) => ({
//         ...prev,
//         images: [...prev.images, ...data.urls],
//       }));
//     } catch {
//       alert("Upload error");
//     }
//   }

//   // ---------- Add Product ----------
//   async function handleAddProduct(e) {
//     e.preventDefault();
//     setFormError("");

//     if (!newProduct.name || !newProduct.price)
//       return setFormError("Name and price are required");

//     if (newProduct.images.length === 0)
//       return setFormError("Upload at least one image");

//     setFormLoading(true);

//     const token = localStorage.getItem("adminToken");

//     try {
//       console.log("Submitting product:", {
//         ...newProduct,
//         popular: newProduct.popular,
//         price: Number(newProduct.price),
//         oldPrice: newProduct.oldPrice ? Number(newProduct.oldPrice) : undefined,
//       });

//       const res = await fetch("/api/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           ...newProduct,
//           popular: newProduct.popular,
//           price: Number(newProduct.price),
//           oldPrice: newProduct.oldPrice
//             ? Number(newProduct.oldPrice)
//             : undefined,
//         }),
//       });

//       const data = await res.json();
//       if (!res.ok) return setFormError(data.error);

//       // Reset Form
//       setNewProduct({
//         name: "",
//         price: "",
//         oldPrice: "",
//         description: "",
//         images: [],
//         category: "",
//         popular: false, // reset popular too
//       });

//       fetchProducts();
//     } catch {
//       setFormError("Network error");
//     } finally {
//       setFormLoading(false);
//     }
//   }

//   // ----------------------------------------------
//   //                    UI
//   // ----------------------------------------------
//   if (!isLoggedIn) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
//         <form
//           onSubmit={handleLogin}
//           className="bg-white p-8 rounded shadow w-80"
//         >
//           <h2 className="text-2xl mb-4 font-semibold">Admin Login</h2>

//           <input
//             type="password"
//             placeholder="Admin Password"
//             className="border p-2 w-full mb-4 rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           {error && <p className="text-red-500 mb-2">{error}</p>}

//           <button className="bg-blue-600 text-white w-full py-2 rounded">
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       {/* <aside className="w-64 bg-white border-r p-4 flex flex-col">
//         <h1 className="text-xl font-bold mb-6">My Store Admin</h1>

//         <button
//           onClick={handleLogout}
//           className="mt-auto bg-red-500 text-white py-2 rounded"
//         >
//           Logout
//         </button>
//       </aside> */}
//       <aside className="w-64 bg-white border-r p-4 flex flex-col">
//         // <h1 className="text-xl font-bold mb-6">My Store Admin</h1>
//         //{" "}
//         <nav className="flex flex-col space-y-3">
//           // <button className="text-left font-semibold">Products</button>
//           //{" "}
//           <button className="text-left font-semibold opacity-50 cursor-not-allowed">
//             // Orders (Coming Soon) //{" "}
//           </button>
//           //{" "}
//         </nav>
//         //{" "}
//         <button
//           onClick={handleLogout}
//           className="mt-auto bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
//         >
//           Logout
//         </button>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-6 bg-gray-50 overflow-auto">
//         <h2 className="text-2xl font-semibold mb-6">Manage Products</h2>

//         {/* Add Product */}
//         <form
//           onSubmit={handleAddProduct}
//           className="bg-white p-6 rounded shadow mb-10"
//         >
//           <h3 className="text-lg font-semibold mb-4">Add New Product</h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="Name *"
//               className="border p-2 rounded"
//               value={newProduct.name}
//               onChange={(e) =>
//                 setNewProduct({ ...newProduct, name: e.target.value })
//               }
//             />

//             <input
//               type="number"
//               placeholder="Price *"
//               className="border p-2 rounded"
//               value={newProduct.price}
//               onChange={(e) =>
//                 setNewProduct({ ...newProduct, price: e.target.value })
//               }
//             />

//             <input
//               type="number"
//               placeholder="Old Price"
//               className="border p-2 rounded"
//               value={newProduct.oldPrice}
//               onChange={(e) =>
//                 setNewProduct({ ...newProduct, oldPrice: e.target.value })
//               }
//             />

//             <input
//               type="text"
//               placeholder="Category"
//               className="border p-2 rounded"
//               value={newProduct.category}
//               onChange={(e) =>
//                 setNewProduct({ ...newProduct, category: e.target.value })
//               }
//             />

//             {/* Image Upload */}
//             <div className="md:col-span-2">
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="cursor-pointer"
//               />

//               {/* Preview images */}
//               <div className="flex gap-3 mt-3 flex-wrap">
//                 {newProduct.images.map((img, i) => (
//                   <img
//                     key={i}
//                     src={img}
//                     className="h-20 w-20 rounded object-cover border"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={newProduct.popular || false}
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, popular: e.target.checked })
//                 }
//               />
//               <label>Mark as Popular</label>
//             </div>

//             <textarea
//               placeholder="Description"
//               rows={3}
//               className="border p-2 rounded md:col-span-2"
//               value={newProduct.description}
//               onChange={(e) =>
//                 setNewProduct({ ...newProduct, description: e.target.value })
//               }
//             />
//           </div>

//           {formError && <p className="text-red-500 mt-3">{formError}</p>}

//           <button
//             type="submit"
//             className="mt-4 bg-green-600 text-white py-2 px-4 rounded"
//           >
//             {formLoading ? "Adding..." : "Add Product"}
//           </button>
//         </form>

//         {/* Products List */}
//         <h3 className="text-xl font-semibold mb-4">All Products</h3>

//         {loadingProducts && <p>Loading...</p>}

//         {!loadingProducts && products.length === 0 && <p>No products found.</p>}

//         {!loadingProducts && products.length > 0 && (
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-white border-b">
//                 <th className="p-2 text-left">Name</th>
//                 <th className="p-2 text-left">Price</th>
//                 <th className="p-2 text-left">Category</th>
//                 <th className="p-2 text-left">Popular</th> {/* New */}
//                 <th className="p-2 text-left">Actions</th> {/* Add this */}
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((p) => (
//                 <tr key={p._id} className="bg-white border-b">
//                   <td className="p-2">{p.name}</td>
//                   <td className="p-2">₦{p.price}</td>
//                   <td className="p-2">{p.category}</td>
//                   <td className="p-2">{p.popular ? "⭐" : ""}</td> {/* New */}
//                   <td className="p-2">
//                     <button
//                       onClick={() => handleDeleteProduct(p._id)}
//                       className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </main>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [colorInput, setColorInput] = useState("");

  // --- Products states ---
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    oldPrice: "",
    description: "",
    images: [],
    category: "",
    popular: false,
    sizes: [], // NEW
    colors: [], // NEW
  });

  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  // --- Orders states ---
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [view, setView] = useState("products"); // "products" or "orders"
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ---------- Login ----------
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsLoggedIn(true);
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (!res.ok) return setError(data.error || "Login failed");

      localStorage.setItem("adminToken", data.token);
      setIsLoggedIn(true);
      if (view === "products") fetchProducts();
      else if (view === "orders") fetchOrders();
    } catch {
      setError("Network error");
    }
  }

  function addSize() {
    if (!sizeInput.trim()) return;
    if (newProduct.sizes.includes(sizeInput.trim())) return;
    setNewProduct((prev) => ({
      ...prev,
      sizes: [...prev.sizes, sizeInput.trim()],
    }));
    setSizeInput("");
  }

  function addColor() {
    if (!colorInput.trim()) return;
    if (newProduct.colors.includes(colorInput.trim())) return;
    setNewProduct((prev) => ({
      ...prev,
      colors: [...prev.colors, colorInput.trim()],
    }));
    setColorInput("");
  }

  function removeSize(size) {
    setNewProduct((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((s) => s !== size),
    }));
  }

  function removeColor(color) {
    setNewProduct((prev) => ({
      ...prev,
      colors: prev.colors.filter((c) => c !== color),
    }));
  }

  // ---------- Fetch Products ----------
  async function fetchProducts() {
    setLoadingProducts(true);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch {
      setProducts([]);
    } finally {
      setLoadingProducts(false);
    }
  }

  // ---------- Fetch Orders ----------
  async function fetchOrders() {
    setLoadingOrders(true);
    try {
      const res = await fetch("/api/orders");
      const data = await res.json();
      setOrders(data);
    } catch {
      setOrders([]);
    } finally {
      setLoadingOrders(false);
    }
  }

  // Fetch products or orders on login and view change
  useEffect(() => {
    if (isLoggedIn) {
      if (view === "products") fetchProducts();
      else if (view === "orders") fetchOrders();
    }
  }, [view, isLoggedIn]);

  // ---------- Logout ----------
  function handleLogout() {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
  }

  // ---------- Delete Product ----------
  async function handleDeleteProduct(id) {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to delete product");
        return;
      }

      fetchProducts();
    } catch {
      alert("Network error, try again.");
    }
  }

  // ---------- Update Order Status ----------
  async function updateOrderStatus(orderId, newStatus) {
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");
      // Refresh orders after update
      fetchOrders();
      setSelectedOrder(null);
    } catch (err) {
      alert(err.message);
    }
  }

  // ---------- Image Upload ----------
  async function handleImageUpload(e) {
    const files = e.target.files;
    if (!files.length) return;

    const formData = new FormData();
    for (let file of files) formData.append("images", file);

    try {
      const res = await fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) return alert(data.error || "Upload failed");

      setNewProduct((prev) => ({
        ...prev,
        images: [...prev.images, ...data.urls],
      }));
    } catch {
      alert("Upload error");
    }
  }

  // ---------- Add Product ----------
  async function handleAddProduct(e) {
    e.preventDefault();
    setFormError("");

    if (!newProduct.name || !newProduct.price)
      return setFormError("Name and price are required");

    if (newProduct.images.length === 0)
      return setFormError("Upload at least one image");

    setFormLoading(true);

    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newProduct,
          popular: newProduct.popular,
          price: Number(newProduct.price),
          oldPrice: newProduct.oldPrice
            ? Number(newProduct.oldPrice)
            : undefined,
          sizes: newProduct.sizes,
          colors: newProduct.colors,
        }),
      });

      const data = await res.json();
      if (!res.ok) return setFormError(data.error);

      // Reset Form
      setNewProduct({
        name: "",
        price: "",
        oldPrice: "",
        description: "",
        images: [],
        category: "",
        popular: false,
        sizes: [],
        colors: [],
        stock: 1,
      });

      fetchProducts();
      setView("products");
    } catch {
      setFormError("Network error");
    } finally {
      setFormLoading(false);
    }
  }

  // ----------------------------------------------
  //                    UI
  // ----------------------------------------------
  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-indigo-700 p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-sm"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center text-gray-900">
            Admin Login
          </h2>

          <input
            type="password"
            placeholder="Admin Password"
            className="border border-gray-300 p-3 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-600 text-center mb-4 font-medium text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-3 rounded-md font-semibold transition shadow-md active:scale-95 transform duration-150"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-gray-100">
      {/* Hamburger Button - Visible only on mobile */}
      <button
        className="md:hidden fixed top-2 right-4 z-50 p-2 bg-indigo-600 text-white rounded-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar Overlay - Closes menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
  fixed inset-y-0 left-0 z-30 w-64 bg-white border-r shadow-md transform transition-transform duration-300 ease-in-out flex flex-col p-6
  ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
  md:relative md:translate-x-0 md:flex md:h-full md:w-64
`}
      >
        <h1 className="text-2xl font-bold mb-8 text-indigo-700 tracking-wide">
          UnifyStore Admin
        </h1>

        <nav className="flex flex-col space-y-4 mb-8">
          <button
            className={`text-left font-semibold text-lg transition-colors duration-300 py-2 ${
              view === "products"
                ? "text-indigo-600 border-l-4 border-indigo-600 pl-4 bg-indigo-50"
                : "text-gray-600 hover:text-indigo-600 pl-4"
            }`}
            onClick={() => {
              setView("products");
              setIsMenuOpen(false);
            }}
          >
            Products
          </button>

          <button
            className={`text-left font-semibold text-lg transition-colors duration-300 py-2 ${
              view === "orders"
                ? "text-indigo-600 border-l-4 border-indigo-600 pl-4 bg-indigo-50"
                : "text-gray-600 hover:text-indigo-600 pl-4"
            }`}
            onClick={() => {
              setView("orders");
              setIsMenuOpen(false);
            }}
          >
            Orders
          </button>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md font-semibold transition text-base w-full"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto h-full w-full">
        {view === "products" && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Manage Products
            </h2>

            {/* Add Product */}
            <form
              onSubmit={handleAddProduct}
              className="bg-white rounded-lg shadow p-4 md:p-6 mb-10 max-w-5xl mx-auto"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-indigo-700 border-b pb-2">
                Add New Product
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Inputs */}
                <input
                  type="text"
                  placeholder="Name *"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-full"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Price *"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-full"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Old Price"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-full"
                  value={newProduct.oldPrice}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, oldPrice: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Category"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-full"
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                />

                {/* Sizes input */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-2 text-sm md:text-base">
                    Sizes
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="e.g. S, M"
                      className="border border-gray-300 p-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-full"
                      value={sizeInput}
                      onChange={(e) => setSizeInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addSize();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={addSize}
                      className="bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-700 transition"
                    >
                      Add
                    </button>
                  </div>

                  {/* Display sizes */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {newProduct.sizes.map((size) => (
                      <div
                        key={size}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full flex items-center gap-2 shadow-sm text-sm"
                      >
                        <span>{size}</span>
                        <button
                          type="button"
                          onClick={() => removeSize(size)}
                          className="text-indigo-900 font-bold hover:text-red-600 transition"
                          aria-label={`Remove size ${size}`}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors input */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-2 text-sm md:text-base">
                    Colors
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="e.g. Red"
                      className="border border-gray-300 p-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-full"
                      value={colorInput}
                      onChange={(e) => setColorInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addColor();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={addColor}
                      className="bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-700 transition"
                    >
                      Add
                    </button>
                  </div>

                  {/* Display colors */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {newProduct.colors.map((color) => (
                      <div
                        key={color}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full flex items-center gap-2 shadow-sm text-sm"
                      >
                        <span>{color}</span>
                        <button
                          type="button"
                          onClick={() => removeColor(color)}
                          className="text-indigo-900 font-bold hover:text-red-600 transition"
                          aria-label={`Remove color ${color}`}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Upload */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="image-upload"
                    className="block mb-2 font-semibold text-gray-700 text-sm md:text-base"
                  >
                    Upload Images
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="cursor-pointer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />

                  {/* Preview images */}
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {newProduct.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Preview ${i + 1}`}
                        className="h-20 w-20 md:h-24 md:w-24 rounded-lg object-cover border border-gray-300 shadow-sm"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:col-span-2 mt-2 w-full">
                  <input
                    type="number"
                    min={0}
                    placeholder="Stock Quantity *"
                    className="border p-3 rounded-md w-full sm:w-auto"
                    value={newProduct.stock || ""}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        stock: Number(e.target.value),
                      })
                    }
                  />

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="popular-checkbox"
                      checked={newProduct.popular || false}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          popular: e.target.checked,
                        })
                      }
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="popular-checkbox"
                      className="font-semibold text-gray-700 select-none cursor-pointer"
                    >
                      Mark as Popular
                    </label>
                  </div>
                </div>

                <textarea
                  placeholder="Description"
                  rows={4}
                  className="border border-gray-300 p-3 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none w-full"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              {formError && (
                <p className="text-red-600 mt-4 text-center font-semibold">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md font-semibold transition block w-full md:w-auto md:mx-auto shadow-md"
                disabled={formLoading}
              >
                {formLoading ? "Adding..." : "Add Product"}
              </button>
            </form>

            {/* Products List */}
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
              All Products
            </h3>

            {loadingProducts && (
              <p className="text-center text-gray-500">Loading products...</p>
            )}

            {!loadingProducts && products.length === 0 && (
              <p className="text-center text-gray-500">No products found.</p>
            )}

            {!loadingProducts && products.length > 0 && (
              <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
                <table className="w-full table-auto border-collapse bg-white">
                  <thead>
                    <tr className="bg-indigo-100 text-indigo-700 uppercase text-xs md:text-sm font-semibold tracking-wide">
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Name
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Price
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Category
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Sizes
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Colors
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Popular
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Stock
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr
                        key={p._id}
                        className="border-b border-indigo-50 hover:bg-indigo-50 transition cursor-default"
                      >
                        <td
                          className="p-3 whitespace-nowrap font-medium text-gray-800 truncate max-w-[150px]"
                          title={p.name} // This creates the "native" browser tooltip
                        >
                          {p.name}
                        </td>
                        <td className="p-3 whitespace-nowrap font-mono text-gray-700">
                          ₦{p.price.toLocaleString()}
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          {p.category || "-"}
                        </td>
                        <td className="p-3 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">
                          {p.sizes?.join(", ") || "-"}
                        </td>
                        <td className="p-3 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">
                          {p.colors?.join(", ") || "-"}
                        </td>
                        <td className="p-3 text-center whitespace-nowrap">
                          {p.popular ? "⭐" : ""}
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          {p.stock > 0 ? (
                            <span className="text-green-600 font-semibold text-sm">
                              {p.stock}
                            </span>
                          ) : (
                            <span className="text-red-600 font-semibold text-sm">
                              Out of Stock
                            </span>
                          )}
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          <button
                            onClick={() => handleDeleteProduct(p._id)}
                            className="bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white px-3 py-1 rounded text-sm font-semibold transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {view === "orders" && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Orders
            </h2>

            {loadingOrders && (
              <p className="text-center text-gray-500">Loading orders...</p>
            )}

            {!loadingOrders && orders.length === 0 && (
              <p className="text-center text-gray-500">No orders found.</p>
            )}

            {!loadingOrders && orders.length > 0 && (
              <div className="overflow-x-auto shadow rounded-lg border border-gray-200 max-w-full">
                <table className="w-full table-auto border-collapse bg-white">
                  <thead>
                    <tr className="bg-indigo-100 text-indigo-700 uppercase text-xs md:text-sm font-semibold tracking-wide">
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Order ID
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Customer
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Email
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Total
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Status
                      </th>
                      <th className="p-3 text-left border-b border-indigo-200 whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order._id}
                        className="border-b border-indigo-50 hover:bg-indigo-50 cursor-pointer transition active:bg-indigo-100"
                        onClick={() => setSelectedOrder(order)}
                      >
                        <td className="p-3 font-mono text-sm whitespace-nowrap font-bold text-indigo-600">
                          #{order._id.slice(-6).toUpperCase()}
                        </td>
                        <td className="p-3 whitespace-nowrap text-gray-800">{`${order.customer.firstName} ${order.customer.lastName}`}</td>
                        <td className="p-3 whitespace-nowrap text-gray-600">
                          {order.customer.email}
                        </td>
                        <td className="p-3 font-mono font-medium whitespace-nowrap">
                          ₦{order.total.toLocaleString()}
                        </td>
                        <td className="p-3 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                              order.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : order.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : order.status === "cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="p-3 whitespace-nowrap text-gray-500 text-sm">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Selected Order Modal */}
            {selectedOrder && (
              <div
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
                onClick={() => setSelectedOrder(null)}
              >
                <div
                  className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto p-4 md:p-8 animate-fadeIn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-6 border-b pb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-indigo-700">
                      Order #{selectedOrder._id.slice(-6).toUpperCase()}
                    </h3>
                    <button
                      onClick={() => setSelectedOrder(null)}
                      className="text-gray-400 hover:text-red-500 text-2xl font-bold leading-none"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <section>
                      <h4 className="font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-1 uppercase text-xs tracking-wider">
                        Customer Info
                      </h4>
                      <div className="text-sm md:text-base space-y-1 text-gray-700">
                        <p className="font-medium">{`${selectedOrder.customer.firstName} ${selectedOrder.customer.lastName}`}</p>
                        <p className="text-indigo-600">
                          {selectedOrder.customer.email}
                        </p>
                        <p>{selectedOrder.customer.phone}</p>
                        <p className="mt-2 text-gray-500">
                          {`${selectedOrder.customer.street}, ${selectedOrder.customer.city}, ${selectedOrder.customer.state}, ${selectedOrder.customer.country}`}
                        </p>
                        {selectedOrder.customer.notes && (
                          <div className="mt-2 bg-yellow-50 p-2 rounded text-sm text-yellow-800">
                            <strong>Note:</strong>{" "}
                            {selectedOrder.customer.notes}
                          </div>
                        )}
                      </div>
                    </section>

                    <section>
                      <h4 className="font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-1 uppercase text-xs tracking-wider">
                        Order Summary
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2 text-sm text-gray-600">
                          <span>Subtotal</span>
                          <span>-</span>
                        </div>
                        <div className="flex justify-between mb-2 text-sm text-gray-600">
                          <span>Shipping</span>
                          <span>
                            ₦
                            {selectedOrder.shippingFee
                              ? selectedOrder.shippingFee.toLocaleString()
                              : 0}
                          </span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg text-gray-800">
                          <span>Total</span>
                          <span>₦{selectedOrder.total.toLocaleString()}</span>
                        </div>
                        <p className="text-xs text-right mt-1">
                          Free Shipping:{" "}
                          <span
                            className={
                              selectedOrder.freeShippingApplied
                                ? "text-green-600 font-bold"
                                : "text-gray-500"
                            }
                          >
                            {selectedOrder.freeShippingApplied ? "YES" : "NO"}
                          </span>
                        </p>
                      </div>
                    </section>
                  </div>

                  <section className="mt-8">
                    <h4 className="font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-1 uppercase text-xs tracking-wider">
                      Items
                    </h4>
                    <div className="bg-white border rounded-lg overflow-hidden">
                      <ul className="divide-y divide-gray-100 max-h-60 overflow-auto">
                        {selectedOrder.cart.map((item, i) => (
                          <li
                            key={i}
                            className="p-3 md:p-4 flex flex-col sm:flex-row justify-between sm:items-center text-sm md:text-base hover:bg-gray-50"
                          >
                            <div>
                              <p className="font-medium text-gray-800">
                                {item.name}
                              </p>
                              <div className="text-xs text-gray-500 flex gap-2 mt-1">
                                {item.selectedSize && (
                                  <span className="bg-gray-200 px-2 py-0.5 rounded">
                                    Size: {item.selectedSize}
                                  </span>
                                )}
                                {item.selectedColor && (
                                  <span className="bg-gray-200 px-2 py-0.5 rounded">
                                    Color: {item.selectedColor}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="mt-2 sm:mt-0 font-mono text-gray-600 text-right">
                              <span className="text-xs text-gray-400 block sm:inline mr-2">
                                ₦{item.price.toLocaleString()} x {item.qty}
                              </span>
                              <span className="font-semibold text-indigo-600">
                                ₦{(item.price * item.qty).toLocaleString()}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-4 justify-between bg-gray-50 -mx-4 md:-mx-8 -mb-4 md:-mb-8 p-4 md:p-6 rounded-b-xl">
                    <label
                      htmlFor="status"
                      className="font-semibold text-gray-700 whitespace-nowrap"
                    >
                      Update Status:
                    </label>
                    <div className="flex w-full sm:w-auto gap-3">
                      <select
                        id="status"
                        value={selectedOrder.status}
                        onChange={(e) =>
                          updateOrderStatus(selectedOrder._id, e.target.value)
                        }
                        className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition bg-white"
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>

                      <button
                        onClick={() => setSelectedOrder(null)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-md transition"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
