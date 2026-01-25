// app/admin/page.js
import CartClient from "./cartClient";

export const metadata = {
  title: "Your Cart | UnifyStore",
  description: "Review your selected shoes and bags before proceeding to checkout. Secure your items now before they sell out!",
  // Keep this hidden from search engines
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <CartClient />;
}