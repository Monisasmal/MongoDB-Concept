export default function GroupStageMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        $group Stage in MongoDB Aggregation Pipeline
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          The <strong>$group</strong> stage is used to group documents based on a
          specified field and perform aggregate calculations like count, sum,
          average, etc.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 It works like <strong>GROUP BY</strong> in SQL
          <br />
          👉 It groups similar data and performs calculations on them
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When summarizing data</li>
          <li>When counting records</li>
          <li>When calculating totals or averages</li>
          <li>When creating reports</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Analytics dashboards</li>
          <li>Sales reports</li>
          <li>User statistics</li>
          <li>Backend data processing</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>To summarize large data</li>
          <li>To perform calculations in database</li>
          <li>Reduces need for external processing</li>
          <li>Efficient for analytics</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Groups documents using _id field</li>
          <li>Applies aggregation operators</li>
          <li>Outputs one document per group</li>
          <li>Supports operators like $sum, $avg, $max, $min</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`db.collection.aggregate([
  {
    $group: {
      _id: "$fieldName",
      total: { $sum: 1 }
    }
  }
]);`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">8. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Count users by role
db.users.aggregate([
  {
    $group: {
      _id: "$role",
      count: { $sum: 1 }
    }
  }
]);

// Calculate total salary by department
db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      totalSalary: { $sum: "$salary" }
    }
  }
]);`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>_id defines grouping key</li>
          <li>$sum: 1 counts documents</li>
          <li>Can calculate totals, averages, etc.</li>
          <li>Returns aggregated result per group</li>
        </ul>
      </section>

      {/* Operators */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Common Operators</h2>
        <ul className="list-disc ml-6">
          <li>$sum → Total or count</li>
          <li>$avg → Average value</li>
          <li>$max → Maximum value</li>
          <li>$min → Minimum value</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Powerful data aggregation</li>
          <li>Reduces application logic</li>
          <li>Efficient for large datasets</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">12. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Can be memory-intensive</li>
          <li>Complex queries may affect performance</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>$group = GROUP BY in SQL</li>
          <li>Uses _id as grouping key</li>
          <li>Supports aggregation operators</li>
          <li>Used for analytics and reporting</li>
        </ul>
      </section>

    </div>
  );
}