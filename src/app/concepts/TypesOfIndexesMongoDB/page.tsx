export default function TypesOfIndexesMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Types of Indexes in MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          MongoDB provides different types of indexes to optimize query
          performance. Each type is designed for specific use cases such as
          searching, sorting, or handling complex data structures.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When queries are slow</li>
          <li>When working with large datasets</li>
          <li>When filtering, sorting, or searching data</li>
          <li>When optimizing database performance</li>
        </ul>
      </section>

      {/* Types */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">3. Types of Indexes</h2>

        <ul className="list-disc ml-6 space-y-3">
          <li>
            <strong>Single Field Index</strong> → Index on one field
          </li>
          <li>
            <strong>Compound Index</strong> → Index on multiple fields
          </li>
          <li>
            <strong>Multikey Index</strong> → Index on array fields
          </li>
          <li>
            <strong>Text Index</strong> → For text search
          </li>
          <li>
            <strong>Hashed Index</strong> → For hashed values (sharding)
          </li>
          <li>
            <strong>Unique Index</strong> → Ensures unique values
          </li>
          <li>
            <strong>TTL Index</strong> → Automatically deletes data after time
          </li>
          <li>
            <strong>Geospatial Index</strong> → For location-based queries
          </li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">4. Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Single Field Index
db.users.createIndex({ name: 1 });

// Compound Index
db.users.createIndex({ name: 1, age: -1 });

// Text Index
db.posts.createIndex({ content: "text" });

// Unique Index
db.users.createIndex({ email: 1 }, { unique: true });`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">5. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Faster search by name
db.users.createIndex({ name: 1 });

// Search posts by text
db.posts.createIndex({ title: "text", description: "text" });

// Ensure unique email
db.users.createIndex({ email: 1 }, { unique: true });`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>Different indexes serve different purposes</li>
          <li>Indexes improve read performance</li>
          <li>Choosing correct index is important</li>
          <li>Too many indexes can slow down writes</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Faster queries</li>
          <li>Efficient data retrieval</li>
          <li>Optimized database performance</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Consumes extra storage</li>
          <li>Slows down insert/update operations</li>
          <li>Requires proper planning</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Common types: Single, Compound, Text, Unique</li>
          <li>Indexes improve read performance</li>
          <li>Too many indexes hurt performance</li>
          <li>Choose index based on query pattern</li>
        </ul>
      </section>

    </div>
  );
}