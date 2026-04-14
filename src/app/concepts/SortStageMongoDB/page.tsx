export default function SortStageMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        $sort Stage in MongoDB Aggregation Pipeline
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          The <strong>$sort</strong> stage is used to arrange documents in a
          specific order (ascending or descending) based on one or more fields.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 It works like <strong>ORDER BY</strong> in SQL
          <br />
          👉 It sorts data before sending final results
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When ordering results</li>
          <li>When showing top or latest data</li>
          <li>When sorting by price, date, or name</li>
          <li>Before applying limit</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Aggregation pipelines</li>
          <li>Search results</li>
          <li>Leaderboard or ranking systems</li>
          <li>Backend APIs</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>To organize data meaningfully</li>
          <li>To display ordered results</li>
          <li>To support ranking and pagination</li>
          <li>To prepare data for limit or top queries</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Uses field values to sort documents</li>
          <li>1 → ascending order</li>
          <li>-1 → descending order</li>
          <li>Can sort by multiple fields</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`db.collection.aggregate([
  { $sort: { age: 1 } } // ascending
]);

db.collection.aggregate([
  { $sort: { age: -1 } } // descending
]);`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">8. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Sort users by age (ascending)
db.users.aggregate([
  { $sort: { age: 1 } }
]);

// Sort users by salary (descending)
db.employees.aggregate([
  { $sort: { salary: -1 } }
]);

// Sort by multiple fields
db.users.aggregate([
  { $sort: { role: 1, age: -1 } }
]);`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>$sort arranges documents in order</li>
          <li>1 = ascending, -1 = descending</li>
          <li>Can sort multiple fields</li>
          <li>Often used before $limit</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Organized output</li>
          <li>Supports ranking systems</li>
          <li>Easy to use</li>
          <li>Works well with indexes</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Sorting large data can be slow</li>
          <li>May consume memory</li>
          <li>Requires index for best performance</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>$sort = ORDER BY in SQL</li>
          <li>1 → ascending, -1 → descending</li>
          <li>Often used with $limit</li>
          <li>Index improves sorting performance</li>
        </ul>
      </section>

    </div>
  );
}