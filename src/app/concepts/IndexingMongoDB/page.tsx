export default function IndexingMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is Indexing in MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          Indexing in MongoDB is a technique used to improve the speed of data
          retrieval operations by creating a data structure that stores a small
          portion of the collection’s data in an easy-to-search format.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 Think of an index like a book index.
          Instead of reading the whole book, you directly jump to the page you need.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When collections have large amounts of data</li>
          <li>When queries are slow</li>
          <li>When searching or filtering frequently</li>
          <li>When sorting data</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Search operations (find, findOne)</li>
          <li>Sorting queries</li>
          <li>Filtering large datasets</li>
          <li>Backend APIs for faster response</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Improves query performance</li>
          <li>Reduces database scan time</li>
          <li>Faster data retrieval</li>
          <li>Efficient handling of large data</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Creates a separate data structure</li>
          <li>Stores field values with references to documents</li>
          <li>MongoDB uses index instead of scanning full collection</li>
          <li>Similar to key-value lookup</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Create index on name field
db.users.createIndex({ name: 1 });

// Create descending index
db.users.createIndex({ age: -1 });`}
        </pre>
      </section>

      {/* Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Without index (slow)
db.users.find({ name: "Manaswini" });

// With index (fast)
db.users.createIndex({ name: 1 });`}
        </pre>
      </section>

      {/* Types */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Types of Indexes</h2>
        <ul className="list-disc ml-6">
          <li>Single Field Index</li>
          <li>Compound Index</li>
          <li>Multikey Index (for arrays)</li>
          <li>Text Index (for search)</li>
          <li>Unique Index</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Faster queries</li>
          <li>Efficient data retrieval</li>
          <li>Improves performance for large datasets</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Uses extra memory</li>
          <li>Slows down write operations (insert/update)</li>
          <li>Too many indexes can reduce performance</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Index improves read performance</li>
          <li>Avoid full collection scan</li>
          <li>Trade-off: faster reads vs slower writes</li>
          <li>createIndex() is used to create indexes</li>
        </ul>
      </section>

    </div>
  );
}