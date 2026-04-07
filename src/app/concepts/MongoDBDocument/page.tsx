export default function MongoDBDocument() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is a Document in MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          A document in MongoDB is a single record that stores data in a
          JSON-like format called BSON. It is the basic unit of data in MongoDB,
          similar to a row in a SQL table.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use Document</h2>
        <ul className="list-disc ml-6">
          <li>When storing user data or application data</li>
          <li>When data structure can vary</li>
          <li>When working with JSON-based applications</li>
          <li>When storing nested or hierarchical data</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Inside collections in MongoDB</li>
          <li>Web applications (user profiles, products, orders)</li>
          <li>APIs and backend services</li>
          <li>Real-time applications</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use Documents</h2>
        <ul className="list-disc ml-6">
          <li>Flexible structure (no fixed schema)</li>
          <li>Supports nested data</li>
          <li>Easy to read and write</li>
          <li>Matches JavaScript object format</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How Document Works</h2>
        <ul className="list-disc ml-6">
          <li>Stored as key-value pairs</li>
          <li>Can include arrays and nested objects</li>
          <li>Each document has a unique _id field</li>
          <li>Stored inside a collection</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`{
  name: "Manaswini",
  age: 22,
  role: "Developer"
}`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`{
  _id: ObjectId("123abc"),
  name: "Manaswini",
  skills: ["React", "Node.js"],
  address: {
    city: "Chennai",
    country: "India"
  }
}`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>Data is stored in key-value format</li>
          <li>Supports nested objects and arrays</li>
          <li>Each document is unique using _id</li>
          <li>Represents real-world entities easily</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Flexible and schema-less</li>
          <li>Easy to map with JavaScript objects</li>
          <li>Supports complex data structures</li>
          <li>Fast data retrieval</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Data duplication can occur</li>
          <li>No strict structure enforcement</li>
          <li>Large documents can impact performance</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Document = single record in MongoDB</li>
          <li>Stored in JSON/BSON format</li>
          <li>Contains key-value pairs</li>
          <li>Has a unique _id field</li>
          <li>Stored inside collections</li>
        </ul>
      </section>

    </div>
  );
}