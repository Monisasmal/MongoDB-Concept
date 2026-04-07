export default function SQLvsNoSQL() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Difference between SQL and NoSQL
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          SQL databases are relational databases that store data in tables with
          fixed schemas, while NoSQL databases are non-relational databases that
          store data in flexible formats like documents, key-value pairs, graphs,
          or wide-columns.
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>Use SQL when data is structured and relationships are important</li>
          <li>Use SQL for complex queries and transactions</li>
          <li>Use NoSQL when data is unstructured or dynamic</li>
          <li>Use NoSQL for scalability and high performance</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>SQL: Banking systems, ERP, traditional applications</li>
          <li>NoSQL: Real-time apps, big data, social media platforms</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Why We Use Them</h2>
        <ul className="list-disc ml-6">
          <li>SQL ensures data consistency and relationships</li>
          <li>NoSQL provides flexibility and scalability</li>
          <li>SQL is ideal for structured data</li>
          <li>NoSQL is ideal for rapidly changing data</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How They Work</h2>
        <ul className="list-disc ml-6">
          <li>SQL uses tables, rows, and columns</li>
          <li>SQL uses structured query language (SELECT, INSERT, etc.)</li>
          <li>NoSQL uses collections, documents, or key-value pairs</li>
          <li>NoSQL stores data in JSON-like format</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- SQL Example
SELECT * FROM users WHERE age > 20;

-- NoSQL Example (MongoDB)
db.users.find({ age: { $gt: 20 } });`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- SQL Table
id | name  | age
1  | John  | 25

-- NoSQL Document
{
  "id": 1,
  "name": "John",
  "age": 25
}`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>SQL stores data in structured tables</li>
          <li>NoSQL stores data in flexible documents</li>
          <li>SQL requires predefined schema</li>
          <li>NoSQL allows dynamic schema</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>SQL: Strong consistency and relationships</li>
          <li>SQL: Supports complex queries</li>
          <li>NoSQL: High scalability</li>
          <li>NoSQL: Flexible data structure</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>SQL: Less flexible for changing data</li>
          <li>SQL: Harder to scale horizontally</li>
          <li>NoSQL: Limited support for joins</li>
          <li>NoSQL: Less strict consistency</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>SQL = Relational database (tables)</li>
          <li>NoSQL = Non-relational database (documents, key-value, etc.)</li>
          <li>SQL uses fixed schema</li>
          <li>NoSQL uses flexible schema</li>
          <li>SQL is best for structured data</li>
          <li>NoSQL is best for scalable and dynamic data</li>
        </ul>
      </section>

    </div>
  );
}