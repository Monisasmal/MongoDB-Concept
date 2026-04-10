export default function EmbeddedVsReferencedMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        When to Use Embedded vs Referenced Data Model in MongoDB
      </h1>

      {/* Embedded */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-green-600">
          Embedded Data Model (Use When)
        </h2>
        <ul className="list-disc ml-6">
          <li>Data is closely related</li>
          <li>Data is frequently read together</li>
          <li>One-to-few relationships</li>
          <li>Read performance is important</li>
          <li>Data size is small and manageable</li>
        </ul>

        <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
{`{
  name: "Manaswini",
  orders: [
    { product: "Laptop", price: 50000 },
    { product: "Phone", price: 20000 }
  ]
}`}
        </pre>
      </section>

      {/* Referenced */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-red-600">
          Referenced Data Model (Use When)
        </h2>
        <ul className="list-disc ml-6">
          <li>Data is large or complex</li>
          <li>One-to-many or many-to-many relationships</li>
          <li>Data updates frequently</li>
          <li>Avoiding duplication is important</li>
          <li>Data is not always accessed together</li>
        </ul>

        <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
{`// Users
{ _id: "u1", name: "Manaswini" }

// Orders
{ product: "Laptop", userId: "u1" }`}
        </pre>
      </section>

      {/* Key Differences */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Key Differences
        </h2>

        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Feature</th>
              <th className="border p-2">Embedded</th>
              <th className="border p-2">Referenced</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Storage</td>
              <td className="border p-2">Same document</td>
              <td className="border p-2">Separate collections</td>
            </tr>
            <tr>
              <td className="border p-2">Performance</td>
              <td className="border p-2">Faster reads</td>
              <td className="border p-2">Slower (multiple queries)</td>
            </tr>
            <tr>
              <td className="border p-2">Data Duplication</td>
              <td className="border p-2">Possible</td>
              <td className="border p-2">Avoided</td>
            </tr>
            <tr>
              <td className="border p-2">Best For</td>
              <td className="border p-2">Simple data</td>
              <td className="border p-2">Complex data</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Rule */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Golden Rule</h2>
        <p>
          👉 If you read data together → <strong>Embed it</strong><br />
          👉 If you update data frequently or it grows large → <strong>Reference it</strong>
        </p>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Embedded → fast reads, simple structure</li>
          <li>Referenced → scalable, avoids duplication</li>
          <li>Choose based on access pattern</li>
          <li>No one-size-fits-all approach</li>
        </ul>
      </section>

    </div>
  );
}