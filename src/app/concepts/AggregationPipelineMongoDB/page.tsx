export default function AggregationPipelineMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is Aggregation Pipeline in MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          The Aggregation Pipeline in MongoDB is a framework used to process
          and transform data through a sequence of stages, where each stage
          performs an operation on the data and passes it to the next stage.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 Think of it like a pipeline:
          <br />
          Data → Filter → Transform → Group → Sort → Result
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When performing complex data processing</li>
          <li>When grouping or summarizing data</li>
          <li>When filtering and transforming data</li>
          <li>When generating reports or analytics</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Analytics dashboards</li>
          <li>Reporting systems</li>
          <li>E-commerce (sales reports)</li>
          <li>Data transformation in backend APIs</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Performs complex operations in one query</li>
          <li>Efficient data processing</li>
          <li>Reduces need for multiple queries</li>
          <li>Powerful for analytics</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Uses multiple stages</li>
          <li>Each stage processes documents</li>
          <li>Output of one stage becomes input for next</li>
          <li>Executed in sequence</li>
        </ul>
      </section>

      {/* Stages */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Common Stages</h2>

        <ul className="list-disc ml-6 space-y-2">
          <li><strong>$match</strong> → Filter data</li>
          <li><strong>$group</strong> → Group data</li>
          <li><strong>$project</strong> → Select fields</li>
          <li><strong>$sort</strong> → Sort data</li>
          <li><strong>$limit</strong> → Limit results</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">8. Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`db.users.aggregate([
  { $match: { age: { $gt: 20 } } },
  { $group: { _id: "$role", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">9. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Count users by role
db.users.aggregate([
  { $group: { _id: "$role", count: { $sum: 1 } } }
]);`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>$match filters data</li>
          <li>$group aggregates data</li>
          <li>$project reshapes data</li>
          <li>$sort orders results</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Handles complex queries</li>
          <li>Efficient and powerful</li>
          <li>Reduces multiple database calls</li>
          <li>Great for analytics</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">12. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Can be complex for beginners</li>
          <li>Heavy pipelines may affect performance</li>
          <li>Requires understanding of stages</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Pipeline = sequence of stages</li>
          <li>Each stage transforms data</li>
          <li>Common stages: $match, $group, $sort</li>
          <li>Used for analytics and complex queries</li>
        </ul>
      </section>

    </div>
  );
}