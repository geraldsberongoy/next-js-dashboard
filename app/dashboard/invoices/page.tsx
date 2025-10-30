import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function Page() {
  const invoices = await fetchFilteredInvoices('', 1);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Invoices</h1>
      <p>Total invoices: {invoices.length}</p>
    </div>
  );
}