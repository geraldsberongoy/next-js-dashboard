import { fetchFilteredCustomers } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers - Acme Dashboard",
};

export default async function Page() {
  const customers = await fetchFilteredCustomers("");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <p>Total customers: {customers.length}</p>
    </div>
  );
}
