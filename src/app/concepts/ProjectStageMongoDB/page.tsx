export default function ProjectStageMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        $project Stage in MongoDB Aggregation Pipeline
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          The <strong>$project</strong> stage is used to reshape documents by
          selecting, including, excluding, or modifying fields in the output.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 It works like selecting columns in SQL
          <br />
          👉 You control what fields appear in the final result
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When you want specific fields only</li>
          <li>When removing unnecessary data</li>
          <li>When renaming fields</li>
          <li>When transforming data structure</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Aggregation pipelines</li>
          <li>API responses</li>
          <li>Data transformation</li>
          <li>Frontend data shaping</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Reduce data size</li>
          <li>Improve performance</li>
          <li>Customize output</li>
          <li>Hide sensitive fields</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>1 → include field</li>
          <li>0 → exclude field</li>
          <li>Can rename fields</li>
          <li>Can create computed fields</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`db.collection.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      _id: 0
    }
  }
]);`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">8. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Show only name and role
db.users.aggregate([
  {
    $project: {
      name: 1,
      role: 1,
      _id: 0
    }
  }
]);

// Rename field
db.users.aggregate([
  {
    $project: {
      username: "$name",
      _id: 0
    }
  }
]);

// Create computed field
db.products.aggregate([
  {
    $project: {
      name: 1,
      discountedPrice: { $multiply: ["$price", 0.9] }
    }
  }
]);`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>$project controls output fields</li>
          <li>1 includes, 0 excludes fields</li>
          <li>Can rename and transform data</li>
          <li>Helps optimize response size</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Custom output structure</li>
          <li>Reduces data transfer</li>
          <li>Improves performance</li>
          <li>Flexible transformations</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Complex transformations can be hard to read</li>
          <li>Requires proper field handling</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>$project = SELECT in SQL</li>
          <li>Controls output fields</li>
          <li>1 include, 0 exclude</li>
          <li>Supports renaming and computed fields</li>
        </ul>
      </section>

    </div>
  );
}