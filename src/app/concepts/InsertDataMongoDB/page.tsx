export default function InsertDataMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        How to Insert Data in MongoDB (insertOne, insertMany)
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          In MongoDB, data is inserted into a collection using methods like
          <strong> insertOne()</strong> for a single document and
          <strong> insertMany()</strong> for multiple documents.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>Use insertOne() when adding a single record</li>
          <li>Use insertMany() when inserting multiple records at once</li>
          <li>When storing user data, products, or orders</li>
          <li>When building APIs and backend systems</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Inside MongoDB collections</li>
          <li>Backend applications (Node.js APIs)</li>
          <li>Database operations (CRUD)</li>
          <li>Real-time and scalable systems</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>To store new data in the database</li>
          <li>To handle user input and save records</li>
          <li>To manage application data efficiently</li>
          <li>Supports both single and bulk insertion</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Data is inserted as documents into a collection</li>
          <li>MongoDB automatically creates _id for each document</li>
          <li>insertOne() inserts a single document</li>
          <li>insertMany() inserts multiple documents in one operation</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// insertOne()
db.users.insertOne({
  name: "Manaswini",
  age: 22
});

// insertMany()
db.users.insertMany([
  { name: "John", age: 25 },
  { name: "Sara", age: 23 }
]);`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Single user
db.users.insertOne({
  name: "Manaswini",
  skills: ["React", "Node.js"]
});

// Multiple users
db.users.insertMany([
  { name: "Alex", role: "Developer" },
  { name: "Priya", role: "Designer" }
]);`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>insertOne() adds a single document</li>
          <li>insertMany() adds multiple documents</li>
          <li>Each document gets a unique _id</li>
          <li>Efficient for storing large data sets</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Simple and easy to use</li>
          <li>Supports bulk insertion</li>
          <li>High performance</li>
          <li>Flexible document structure</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>No strict validation by default</li>
          <li>Duplicate data may occur</li>
          <li>Error handling needed for bulk inserts</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>insertOne() → inserts single document</li>
          <li>insertMany() → inserts multiple documents</li>
          <li>Automatically creates _id</li>
          <li>Part of CRUD operations (Create)</li>
        </ul>
      </section>

    </div>
  );
}