export default function SchemaVsModelMongoose() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Difference between Schema and Model in Mongoose
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          In Mongoose, a <strong>Schema</strong> defines the structure of data,
          while a <strong>Model</strong> is used to interact with the database
          using that schema.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 Schema = Blueprint (structure of data)  
          <br />
          👉 Model = Tool (used to perform operations)
        </p>
      </section>

      {/* Key Differences */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">3. Key Differences</h2>

        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Feature</th>
              <th className="border p-2">Schema</th>
              <th className="border p-2">Model</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Definition</td>
              <td className="border p-2">Defines structure</td>
              <td className="border p-2">Interacts with DB</td>
            </tr>
            <tr>
              <td className="border p-2">Purpose</td>
              <td className="border p-2">Data design</td>
              <td className="border p-2">CRUD operations</td>
            </tr>
            <tr>
              <td className="border p-2">Usage</td>
              <td className="border p-2">Create model</td>
              <td className="border p-2">Use in app logic</td>
            </tr>
            <tr>
              <td className="border p-2">Direct DB Access</td>
              <td className="border p-2">❌ No</td>
              <td className="border p-2">✅ Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>Use Schema when defining structure</li>
          <li>Use Model when performing operations</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How They Work Together</h2>
        <ul className="list-disc ml-6">
          <li>Step 1: Create Schema</li>
          <li>Step 2: Create Model using Schema</li>
          <li>Step 3: Use Model for CRUD operations</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">6. Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Model
const User = mongoose.model("User", userSchema);`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Create user
const user = new User({
  name: "Manaswini",
  age: 23
});

user.save();

// Fetch users
User.find().then(data => console.log(data));`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>Schema defines data fields</li>
          <li>Model uses schema to interact with DB</li>
          <li>Model performs CRUD operations</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Clear data structure</li>
          <li>Separation of concerns</li>
          <li>Easy data management</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Schema = structure (blueprint)</li>
          <li>Model = database interaction</li>
          <li>Model is created from schema</li>
          <li>Model performs CRUD operations</li>
        </ul>
      </section>

    </div>
  );
}