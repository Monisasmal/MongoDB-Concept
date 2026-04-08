export default function ReadDataMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        How to Read Data in MongoDB (find, findOne)
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          In MongoDB, data is read using <strong>find()</strong> and
          <strong> findOne()</strong> methods. These are used to retrieve
          documents from a collection based on conditions.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>Use find() to retrieve multiple documents</li>
          <li>Use findOne() to retrieve a single document</li>
          <li>When fetching user data, products, or orders</li>
          <li>When building APIs and dashboards</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Inside MongoDB collections</li>
          <li>Backend applications (Node.js APIs)</li>
          <li>Data fetching in web apps</li>
          <li>Real-time applications</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>To retrieve stored data</li>
          <li>To filter and search records</li>
          <li>To display data in applications</li>
          <li>Supports flexible queries</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Queries documents using conditions</li>
          <li>find() returns a cursor (multiple documents)</li>
          <li>findOne() returns the first matching document</li>
          <li>If no condition is given, returns all documents</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// find() - multiple documents
db.users.find({ age: 22 });

// findOne() - single document
db.users.findOne({ name: "Manaswini" });`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Get all users
db.users.find();

// Get users with role Developer
db.users.find({ role: "Developer" });

// Get single user
db.users.findOne({ name: "Manaswini" });`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>find() returns multiple matching documents</li>
          <li>findOne() returns only one document</li>
          <li>Filters are passed as objects</li>
          <li>Returns data in JSON format</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Flexible querying</li>
          <li>Easy to use</li>
          <li>Supports filtering and conditions</li>
          <li>Fast data retrieval</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Returns large data if not filtered</li>
          <li>Needs indexing for better performance</li>
          <li>Cursor handling required in some cases</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>find() → returns multiple documents</li>
          <li>findOne() → returns single document</li>
          <li>Used for reading data (Read in CRUD)</li>
          <li>Supports filtering using query objects</li>
        </ul>
      </section>

    </div>
  );
}