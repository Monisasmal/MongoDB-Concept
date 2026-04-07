export default function WhatIsMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          MongoDB is a NoSQL database that stores data in a flexible,
          JSON-like format called documents instead of traditional tables.
          It is commonly used in modern web applications for handling large
          and dynamic data.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use MongoDB</h2>
        <ul className="list-disc ml-6">
          <li>When data structure is not fixed</li>
          <li>Building scalable applications</li>
          <li>Handling large volumes of data</li>
          <li>MERN stack development</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Web applications</li>
          <li>Real-time analytics</li>
          <li>Content management systems</li>
          <li>E-commerce platforms</li>
          <li>Big data applications</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use MongoDB</h2>
        <ul className="list-disc ml-6">
          <li>Flexible schema (no strict structure)</li>
          <li>Easy to scale horizontally</li>
          <li>High performance</li>
          <li>Stores JSON-like data (developer friendly)</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How MongoDB Works</h2>
        <ul className="list-disc ml-6">
          <li>Stores data as documents (JSON/BSON format)</li>
          <li>Documents are grouped into collections</li>
          <li>Collections are stored inside databases</li>
          <li>Supports indexing and querying for fast access</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`db.users.insertOne({
  name: "Manaswini",
  age: 22,
  role: "Developer"
});`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`db.orders.insertOne({
  product: "Laptop",
  price: 50000,
  user: {
    name: "Manaswini",
    location: "India"
  }
});`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>Data is stored as a document</li>
          <li>No fixed schema required</li>
          <li>Nested objects are allowed</li>
          <li>Easy to represent real-world data</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Flexible and schema-less</li>
          <li>Highly scalable</li>
          <li>Fast read and write operations</li>
          <li>Great for modern applications</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>No strong relationships like SQL joins</li>
          <li>Data duplication may occur</li>
          <li>Less strict data validation</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>MongoDB is a NoSQL database</li>
          <li>Stores data in document format (JSON/BSON)</li>
          <li>Uses collections instead of tables</li>
          <li>Schema-less and scalable</li>
        </ul>
      </section>

    </div>
  );
}