export default function DeleteDataMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        How to Delete Data in MongoDB (deleteOne, deleteMany)
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          In MongoDB, data is deleted using <strong>deleteOne()</strong> and
          <strong> deleteMany()</strong>. These methods remove documents from a
          collection based on specified conditions.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>Use deleteOne() to remove a single document</li>
          <li>Use deleteMany() to remove multiple documents</li>
          <li>When deleting user data, logs, or outdated records</li>
          <li>When cleaning or managing database data</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Inside MongoDB collections</li>
          <li>Backend applications (Node.js APIs)</li>
          <li>CRUD operations (Delete)</li>
          <li>Admin panels and data management systems</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>To remove unwanted data</li>
          <li>To clean old or unnecessary records</li>
          <li>To maintain database efficiency</li>
          <li>Supports both single and bulk deletion</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Uses a filter to find documents</li>
          <li>deleteOne() removes the first matched document</li>
          <li>deleteMany() removes all matched documents</li>
          <li>If no filter is provided, deleteMany() deletes all documents</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// deleteOne()
db.users.deleteOne({ name: "Manaswini" });

// deleteMany()
db.users.deleteMany({ role: "Developer" });`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Delete single user
db.users.deleteOne({ name: "Manaswini" });

// Delete multiple users
db.users.deleteMany({ inactive: true });

// Delete all users (⚠️ dangerous)
db.users.deleteMany({});`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>deleteOne() deletes only one document</li>
          <li>deleteMany() deletes multiple documents</li>
          <li>Filter determines which documents to delete</li>
          <li>Empty filter {} deletes all documents</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Simple and efficient</li>
          <li>Supports bulk deletion</li>
          <li>Helps maintain clean database</li>
          <li>Fast execution</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Data loss is permanent</li>
          <li>Wrong filter can delete important data</li>
          <li>No undo operation</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>deleteOne() → deletes one document</li>
          <li>deleteMany() → deletes multiple documents</li>
          <li>Filter is required to control deletion</li>
          <li>Part of CRUD operations (Delete)</li>
        </ul>
      </section>

    </div>
  );
}