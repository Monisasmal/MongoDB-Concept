export default function MatchStageMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        $match Stage in MongoDB Aggregation Pipeline
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          The <strong>$match</strong> stage is used to filter documents in an
          aggregation pipeline. It selects only those documents that match
          specific conditions.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 It works like <strong>find()</strong> in MongoDB
          <br />
          👉 It filters data before passing it to the next stage
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When filtering data in aggregation</li>
          <li>Before grouping or sorting</li>
          <li>To reduce dataset size early</li>
          <li>When applying conditions on fields</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Aggregation pipelines</li>
          <li>Data filtering operations</li>
          <li>Analytics and reporting queries</li>
          <li>Backend APIs</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Reduces unnecessary data processing</li>
          <li>Improves performance</li>
          <li>Filters relevant documents early</li>
          <li>Works with indexes for optimization</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Applies filtering conditions</li>
          <li>Only matching documents move to next stage</li>
          <li>Similar syntax to query operators</li>
          <li>Can use operators like $gt, $lt, $eq</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`db.collection.aggregate([
  { $match: { age: { $gt: 20 } } }
]);`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">8. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Get users with role Developer
db.users.aggregate([
  { $match: { role: "Developer" } }
]);

// Get users older than 25
db.users.aggregate([
  { $match: { age: { $gt: 25 } } }
]);`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>$match filters documents</li>
          <li>Works like find() query</li>
          <li>Reduces data early in pipeline</li>
          <li>Improves overall pipeline performance</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Fast filtering</li>
          <li>Works with indexes</li>
          <li>Improves pipeline efficiency</li>
          <li>Easy to use</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Must be placed correctly for best performance</li>
          <li>Complex conditions can be harder to write</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>$match = filter stage</li>
          <li>Similar to find()</li>
          <li>Place early in pipeline for performance</li>
          <li>Works with indexes</li>
        </ul>
      </section>

    </div>
  );
}