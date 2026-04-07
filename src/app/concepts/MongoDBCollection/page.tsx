export default function MongoDBCollection() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is a Collection in MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          A collection in MongoDB is a group of documents. It is similar to a
          table in SQL, but it does not enforce a fixed schema, meaning each
          document in a collection can have a different structure.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use Collection</h2>
        <ul className="list-disc ml-6">
          <li>When grouping similar types of data</li>
          <li>When storing multiple documents (records)</li>
          <li>When building scalable applications</li>
          <li>When data structure may vary between records</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Inside a MongoDB database</li>
          <li>Web applications (users, products, orders)</li>
          <li>Backend APIs</li>
          <li>Real-time and scalable systems</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use Collections</h2>
        <ul className="list-disc ml-6">
          <li>Organizes data into logical groups</li>
          <li>Supports flexible document structures</li>
          <li>Improves data management</li>
          <li>Allows efficient querying and indexing</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How Collection Works</h2>
        <ul className="list-disc ml-6">
          <li>Stores multiple documents</li>
          <li>Documents inside can have different structures</li>
          <li>Automatically created when inserting data</li>
          <li>Supports indexing for fast queries</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`db.users.insertOne({
  name: "Manaswini",
  age: 22
});`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Collection: users

{
  name: "Manaswini",
  age: 22
}

{
  name: "John",
  email: "john@example.com"
}`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>A collection stores multiple documents</li>
          <li>Documents can have different fields</li>
          <li>No fixed schema is required</li>
          <li>Similar to a table but more flexible</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Flexible structure</li>
          <li>Easy to scale</li>
          <li>Supports large data</li>
          <li>Efficient querying with indexes</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>No strict schema enforcement</li>
          <li>Data inconsistency may occur</li>
          <li>Harder to maintain relationships</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Collection = group of documents</li>
          <li>Equivalent to table in SQL</li>
          <li>Schema-less (flexible structure)</li>
          <li>Stores related data together</li>
        </ul>
      </section>

    </div>
  );
}