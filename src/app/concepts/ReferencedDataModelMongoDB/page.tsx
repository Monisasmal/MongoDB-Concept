export default function ReferencedDataModelMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is Referenced Data Model in MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          The Referenced Data Model in MongoDB is a way of storing related data
          in separate documents and linking them using references (usually via
          ObjectId). It is also called a normalized data model.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When data is large and complex</li>
          <li>When relationships are one-to-many or many-to-many</li>
          <li>When data needs to be updated frequently</li>
          <li>When avoiding data duplication is important</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>E-commerce apps (users, orders, products)</li>
          <li>Social media platforms</li>
          <li>Blog systems (users and posts)</li>
          <li>Applications with complex relationships</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Avoids data duplication</li>
          <li>Improves data consistency</li>
          <li>Handles large datasets efficiently</li>
          <li>Better for frequently updated data</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Stores related data in different collections</li>
          <li>Uses ObjectId to create references</li>
          <li>Data is linked instead of embedded</li>
          <li>Requires multiple queries or population</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// User document
{
  _id: ObjectId("user123"),
  name: "Manaswini"
}

// Order document referencing user
{
  product: "Laptop",
  userId: ObjectId("user123")
}`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Users Collection
{
  _id: ObjectId("u1"),
  name: "Manaswini"
}

// Orders Collection
{
  product: "Phone",
  userId: ObjectId("u1")
}`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>Data is stored in separate collections</li>
          <li>Documents are linked using ObjectId</li>
          <li>Reduces duplication of data</li>
          <li>Requires joining logic in application or using populate</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>No data duplication</li>
          <li>Better data consistency</li>
          <li>Efficient for large datasets</li>
          <li>Easier to update data</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Requires multiple queries</li>
          <li>Slower read performance compared to embedded model</li>
          <li>More complex data fetching</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Referenced model = linked documents</li>
          <li>Uses ObjectId for relationships</li>
          <li>Avoids data duplication</li>
          <li>Best for complex relationships</li>
          <li>Opposite of embedded model</li>
        </ul>
      </section>

    </div>
  );
}