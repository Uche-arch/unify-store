// app/admin/page.js
import AdminClient from "./adminClient";

export const metadata = {
  title: "Admin Dashboard | UnifyStore",
  // This is the "Stay Away" sign for Search Engines
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminPage() {
  return <AdminClient />;
}