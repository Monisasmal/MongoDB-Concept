export default function WhatIsBSON() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is BSON
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          BSON (Binary JSON) is a binary-encoded format used by MongoDB to store
          documents. It is similar to JSON but optimized for speed, storage, and
          efficient data retrieval.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use BSON</h2>
        <ul className="list-disc ml-6">
          <li>When working with MongoDB databases</li>
          <li>When storing structured and semi-structured data</li>
          <li>When high performance and fast queries are needed</li>
          <li>When handling large datasets</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Internally inside MongoDB</li>
          <li>Database storage engine</li>
          <li>Data transmission between client and server</li>
          <li>APIs using MongoDB</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use BSON</h2>
        <ul className="list-disc ml-6">
          <li>Faster than JSON for processing</li>
          <li>Supports more data types (Date, ObjectId, Binary)</li>
          <li>Efficient storage format</li>
          <li>Improves database performance</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How BSON Works</h2>
        <ul className="list-disc ml-6">
          <li>Converts JSON-like data into binary format</li>
          <li>Stores data efficiently in MongoDB</li>
          <li>Supports additional data types beyond JSON</li>
          <li>Used internally by MongoDB for reading/writing data</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// JSON Format
{
  name: "Manaswini",
  age: 22
}

// BSON (conceptual representation)
Binary Format (not human-readable)`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`{
  _id: ObjectId("661a123abc"),
  name: "Manaswini",
  createdAt: new Date(),
  isActive: true
}`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>BSON is not directly written by developers</li>
          <li>MongoDB automatically converts JSON to BSON</li>
          <li>Supports special data types like ObjectId and Date</li>
          <li>Optimized for database operations</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Faster data processing</li>
          <li>Supports rich data types</li>
          <li>Efficient storage</li>
          <li>Improves query performance</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Not human-readable</li>
          <li>Slightly larger than JSON in some cases</li>
          <li>Used internally (less control for developers)</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>BSON = Binary JSON</li>
          <li>Used internally by MongoDB</li>
          <li>Faster and more efficient than JSON</li>
          <li>Supports extra data types (ObjectId, Date, Binary)</li>
        </ul>
      </section>

    </div>
  );
}