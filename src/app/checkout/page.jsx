// app/admin/page.js
import CheckoutClient from "./checkoutClient";

export const metadata = {
  title: "Secure Checkout | UnifyStore",
  description: "Complete your purchase securely at UnifyStore. We accept all major Nigerian cards and bank transfers.",
  // This tells Google NOT to show this page in search results
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <CheckoutClient/>;
}