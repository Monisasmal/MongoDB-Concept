export default function UpdateDataMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        How to Update Data in MongoDB (updateOne, updateMany)
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          In MongoDB, data is updated using <strong>updateOne()</strong> and
          <strong> updateMany()</strong>. These methods modify existing
          documents in a collection based on specified conditions.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>Use updateOne() to update a single document</li>
          <li>Use updateMany() to update multiple documents</li>
          <li>When modifying user data, orders, or products</li>
          <li>When building APIs with edit/update features</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Inside MongoDB collections</li>
          <li>Backend applications (Node.js APIs)</li>
          <li>CRUD operations (Update)</li>
          <li>Admin dashboards and user management systems</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>To modify existing data</li>
          <li>To keep data up to date</li>
          <li>To correct or change records</li>
          <li>Supports both single and bulk updates</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Uses a filter to find matching documents</li>
          <li>Uses update operators like $set</li>
          <li>updateOne() updates the first matched document</li>
          <li>updateMany() updates all matched documents</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// updateOne()
db.users.updateOne(
  { name: "Manaswini" },
  { $set: { age: 23 } }
);

// updateMany()
db.users.updateMany(
  { role: "Developer" },
  { $set: { active: true } }
);`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Update single user
db.users.updateOne(
  { name: "Manaswini" },
  { $set: { role: "Senior Developer" } }
);

// Update multiple users
db.users.updateMany(
  { role: "Developer" },
  { $set: { experience: "2+ years" } }
);`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>updateOne() updates only one document</li>
          <li>updateMany() updates multiple documents</li>
          <li>$set is used to modify fields</li>
          <li>Filter decides which documents to update</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Flexible updates</li>
          <li>Supports bulk operations</li>
          <li>Efficient and fast</li>
          <li>Easy to modify specific fields</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Wrong filter can update unintended data</li>
          <li>Requires careful query writing</li>
          <li>No strict schema validation by default</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>updateOne() → updates first matched document</li>
          <li>updateMany() → updates all matched documents</li>
          <li>$set is commonly used update operator</li>
          <li>Part of CRUD operations (Update)</li>
        </ul>
      </section>

    </div>
  );
}