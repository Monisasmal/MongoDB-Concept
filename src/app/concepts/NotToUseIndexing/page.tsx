export default function WhenNotToUseIndexingMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        When NOT to Use Indexing in MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          Although indexing improves read performance, it is not always beneficial.
          In some cases, indexes can slow down operations and consume extra resources.
        </p>
      </section>

      {/* When Not to Use */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When NOT to Use Indexing</h2>
        <ul className="list-disc ml-6">
          <li>When the collection has very small data</li>
          <li>When fields are rarely used in queries</li>
          <li>When write operations (insert/update/delete) are frequent</li>
          <li>When data changes very often</li>
          <li>When queries return most of the documents</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Why Not to Use Indexing</h2>
        <ul className="list-disc ml-6">
          <li>Indexes consume extra memory/storage</li>
          <li>Slows down write operations</li>
          <li>Maintenance overhead for updating indexes</li>
          <li>Unnecessary indexes reduce performance</li>
        </ul>
      </section>

      {/* How it affects */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. How It Affects Performance</h2>
        <ul className="list-disc ml-6">
          <li>Each insert/update must update indexes</li>
          <li>More indexes = more work for database</li>
          <li>Can increase storage usage significantly</li>
          <li>May slow down overall system</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Not useful index (rarely used field)
db.users.createIndex({ randomField: 1 });

// Query returns most documents (index not helpful)
db.users.find({ age: { $gt: 0 } });`}
        </pre>
      </section>

      {/* Best Practice */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Best Practice</h2>
        <ul className="list-disc ml-6">
          <li>Create indexes only on frequently queried fields</li>
          <li>Avoid unnecessary indexes</li>
          <li>Monitor performance before adding indexes</li>
          <li>Balance between read and write performance</li>
        </ul>
      </section>

      {/* Comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Index vs No Index (When Not Needed)</h2>

        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Scenario</th>
              <th className="border p-2">Use Index?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Small dataset</td>
              <td className="border p-2">❌ No</td>
            </tr>
            <tr>
              <td className="border p-2">Frequent writes</td>
              <td className="border p-2">❌ No</td>
            </tr>
            <tr>
              <td className="border p-2">Frequent search</td>
              <td className="border p-2">✅ Yes</td>
            </tr>
            <tr>
              <td className="border p-2">Sorting/filtering large data</td>
              <td className="border p-2">✅ Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Indexes improve read but slow down writes</li>
          <li>Not useful for small datasets</li>
          <li>Avoid indexing rarely used fields</li>
          <li>Always balance read vs write performance</li>
        </ul>
      </section>

    </div>
  );
}