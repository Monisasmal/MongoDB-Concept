export default function EmbeddedDataModelMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is Embedded Data Model in MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          The Embedded Data Model in MongoDB is a way of storing related data
          within a single document by nesting documents inside one another.
          It is also called denormalized data model.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When data is closely related</li>
          <li>When you need fast read operations</li>
          <li>When data is frequently accessed together</li>
          <li>When relationships are simple (one-to-few)</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>User profiles with address details</li>
          <li>E-commerce orders with product details</li>
          <li>Blog posts with comments</li>
          <li>Applications with nested data structures</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Reduces the need for joins</li>
          <li>Improves read performance</li>
          <li>Stores related data together</li>
          <li>Simplifies data retrieval</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Data is stored as nested documents</li>
          <li>Arrays can hold multiple sub-documents</li>
          <li>Everything is stored inside a single parent document</li>
          <li>No need to reference other collections</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`{
  name: "Manaswini",
  address: {
    city: "Bhubaneswar",
    country: "India"
  }
}`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`{
  name: "Manaswini",
  orders: [
    {
      product: "Laptop",
      price: 50000
    },
    {
      product: "Phone",
      price: 20000
    }
  ]
}`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>Related data is stored inside one document</li>
          <li>Uses nested objects and arrays</li>
          <li>Improves read performance</li>
          <li>No need for joins like SQL</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Fast data retrieval</li>
          <li>Reduced database queries</li>
          <li>Simple structure for related data</li>
          <li>Better performance for read-heavy apps</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Data duplication may occur</li>
          <li>Large document size can affect performance</li>
          <li>Harder to update deeply nested data</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Embedded model = nested documents</li>
          <li>Stores related data together</li>
          <li>Improves read performance</li>
          <li>Best for one-to-few relationships</li>
          <li>No joins required</li>
        </ul>
      </section>

    </div>
  );
}