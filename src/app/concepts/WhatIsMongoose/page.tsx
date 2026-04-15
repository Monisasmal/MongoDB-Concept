export default function WhatIsMongoose() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        What is Mongoose
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
          It provides a structured way to interact with MongoDB by defining schemas
          and models for your data.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 MongoDB = database  
          <br />
          👉 Mongoose = tool to interact with MongoDB easily  
          <br />
          👉 It adds structure and validation to your data
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When working with MongoDB in Node.js</li>
          <li>When you need schema validation</li>
          <li>When building scalable backend APIs</li>
          <li>When managing structured data</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Backend applications (Node.js)</li>
          <li>REST APIs</li>
          <li>MERN stack applications</li>
          <li>Database modeling and validation</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Provides schema-based structure</li>
          <li>Built-in validation</li>
          <li>Simplifies database operations</li>
          <li>Supports middleware and hooks</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Define Schema → structure of data</li>
          <li>Create Model → interface for database</li>
          <li>Use Model → perform CRUD operations</li>
          <li>Handles validation automatically</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Basic Syntax</h2>

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
        <h2 className="text-2xl font-semibold mb-3">8. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Create user
const user = new User({
  name: "Manaswini",
  age: 23
});

user.save();

// Find users
User.find().then(data => console.log(data));`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>Schema defines structure</li>
          <li>Model interacts with database</li>
          <li>save() stores data</li>
          <li>find() retrieves data</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Schema validation</li>
          <li>Cleaner code</li>
          <li>Middleware support</li>
          <li>Easy database operations</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Extra abstraction layer</li>
          <li>Learning curve for beginners</li>
          <li>Less flexible than raw MongoDB</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Mongoose = ODM for MongoDB</li>
          <li>Provides schema and validation</li>
          <li>Works with Node.js</li>
          <li>Simplifies CRUD operations</li>
        </ul>
      </section>

    </div>
  );
}