export default function LookupStageMongoDB() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        $lookup Stage (Join) in MongoDB
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          The <strong>$lookup</strong> stage is used to perform a join between
          two collections in MongoDB. It allows you to combine data from
          multiple collections based on a common field.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 It works like <strong>JOIN</strong> in SQL
          <br />
          👉 It combines data from two collections into one result
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When using referenced data model</li>
          <li>When data is stored in multiple collections</li>
          <li>When you need combined data</li>
          <li>When avoiding data duplication</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>E-commerce (users + orders)</li>
          <li>Blog systems (users + posts)</li>
          <li>Social media apps</li>
          <li>Backend APIs</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>To combine related data</li>
          <li>To simulate SQL joins</li>
          <li>To fetch related documents in one query</li>
          <li>To support normalized data model</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Matches fields from two collections</li>
          <li>Creates a new array field with joined data</li>
          <li>Uses localField and foreignField</li>
          <li>Acts like a left outer join</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails"
    }
  }
]);`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">8. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Orders collection
{
  product: "Laptop",
  userId: "u1"
}

// Users collection
{
  _id: "u1",
  name: "Manaswini"
}

// Join using $lookup
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userInfo"
    }
  }
]);`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>from → target collection</li>
          <li>localField → field in current collection</li>
          <li>foreignField → field in other collection</li>
          <li>as → output array field</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Combines data from multiple collections</li>
          <li>Supports normalized data model</li>
          <li>Reduces multiple queries</li>
          <li>Powerful for complex data fetching</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Can be slow for large datasets</li>
          <li>Consumes more memory</li>
          <li>Not as fast as embedded model</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>$lookup = JOIN in SQL</li>
          <li>Used for combining collections</li>
          <li>Acts like left outer join</li>
          <li>Returns data as an array</li>
        </ul>
      </section>

    </div>
  );
}