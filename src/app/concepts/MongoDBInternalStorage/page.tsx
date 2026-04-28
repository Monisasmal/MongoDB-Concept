export default function MongoDBInternalStorage() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        How MongoDB Stores Data Internally
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          MongoDB stores data internally in a binary format called BSON
          (Binary JSON). Data is organized into databases, collections,
          and documents.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 Database → Collection → Document  
          <br />
          👉 Document = JSON-like data  
          <br />
          👉 Internally stored as BSON (binary format)
        </p>
      </section>

      {/* Structure */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">3. Storage Structure</h2>

        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Database</strong> → Container for collections</li>
          <li><strong>Collection</strong> → Group of documents</li>
          <li><strong>Document</strong> → Key-value data (JSON-like)</li>
          <li><strong>BSON</strong> → Binary storage format</li>
        </ul>
      </section>

      {/* BSON */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. What is BSON?</h2>
        <ul className="list-disc ml-6">
          <li>Binary representation of JSON</li>
          <li>Faster to read/write</li>
          <li>Supports more data types (Date, ObjectId, etc.)</li>
          <li>Optimized for storage and performance</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How It Works Internally</h2>
        <ul className="list-disc ml-6">
          <li>Documents are stored as BSON in memory and disk</li>
          <li>Each document has a unique _id field</li>
          <li>Collections store multiple documents</li>
          <li>Indexes are stored separately for fast access</li>
        </ul>
      </section>

      {/* Storage Engine */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Storage Engine (WiredTiger)</h2>
        <ul className="list-disc ml-6">
          <li>MongoDB uses WiredTiger storage engine</li>
          <li>Provides compression (reduces storage size)</li>
          <li>Uses caching for performance</li>
          <li>Supports concurrency (multiple operations)</li>
        </ul>
      </section>

      {/* Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Example Document</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// JSON (User View)
{
  name: "Manaswini",
  age: 23
}

// BSON (Internal Representation)
Binary format optimized for storage`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>Data is stored as BSON internally</li>
          <li>Documents are flexible (schema-less)</li>
          <li>Indexes improve query performance</li>
          <li>Storage engine manages data efficiently</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Flexible schema</li>
          <li>Fast read/write operations</li>
          <li>Efficient storage with compression</li>
          <li>Supports complex data types</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>More storage than relational DB (sometimes)</li>
          <li>Complex indexing management</li>
          <li>Requires understanding of BSON</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>MongoDB stores data in BSON format</li>
          <li>Structure: DB → Collection → Document</li>
          <li>Uses WiredTiger storage engine</li>
          <li>Indexes stored separately</li>
        </ul>
      </section>

    </div> 
  );
}