export default function WhyIndexingMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Why Indexing Improves Performance in MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          Indexing improves performance in MongoDB by reducing the amount of
          data the database needs to scan when executing a query, allowing
          faster data retrieval.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 Without index: MongoDB scans every document (slow) <br />
          👉 With index: MongoDB directly jumps to the required data (fast)
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When It Matters</h2>
        <ul className="list-disc ml-6">
          <li>Large datasets</li>
          <li>Frequent search queries</li>
          <li>Filtering and sorting operations</li>
          <li>High-performance applications</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where It Helps</h2>
        <ul className="list-disc ml-6">
          <li>find() queries</li>
          <li>Sorting data</li>
          <li>Filtering records</li>
          <li>Backend APIs</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why It Improves Performance</h2>
        <ul className="list-disc ml-6">
          <li>Avoids full collection scan</li>
          <li>Reduces number of documents checked</li>
          <li>Uses efficient data structure (like B-Tree)</li>
          <li>Faster lookup of matching records</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works Internally</h2>
        <ul className="list-disc ml-6">
          <li>Creates a sorted structure of indexed fields</li>
          <li>Stores field values with document references</li>
          <li>Searches index instead of full collection</li>
          <li>Returns matching documents quickly</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Without index (slow)
db.users.find({ name: "Manaswini" });

// Create index
db.users.createIndex({ name: 1 });

// With index (fast)
db.users.find({ name: "Manaswini" });`}
        </pre>
      </section>

      {/* Comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Without vs With Index</h2>

        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Operation</th>
              <th className="border p-2">Without Index</th>
              <th className="border p-2">With Index</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Search</td>
              <td className="border p-2">Full scan</td>
              <td className="border p-2">Direct lookup</td>
            </tr>
            <tr>
              <td className="border p-2">Speed</td>
              <td className="border p-2">Slow</td>
              <td className="border p-2">Fast</td>
            </tr>
            <tr>
              <td className="border p-2">Efficiency</td>
              <td className="border p-2">Low</td>
              <td className="border p-2">High</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Trade-off */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Trade-Off</h2>
        <ul className="list-disc ml-6">
          <li>Faster reads</li>
          <li>Slower writes (insert/update)</li>
          <li>Extra storage required</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Index avoids full collection scan</li>
          <li>Uses efficient data structure (B-Tree)</li>
          <li>Improves query speed significantly</li>
          <li>Trade-off: read vs write performance</li>
        </ul>
      </section>

    </div>
  );
}