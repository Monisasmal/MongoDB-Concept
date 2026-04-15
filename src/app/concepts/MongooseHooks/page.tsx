export default function MongooseHooks() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Pre and Post Hooks in Mongoose
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          Pre and Post hooks (also called middleware) in Mongoose are functions
          that run before (pre) or after (post) certain database operations like
          save, update, delete, etc.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 Pre Hook = runs BEFORE an operation  
          <br />
          👉 Post Hook = runs AFTER an operation  
          <br />
          👉 Used to add extra logic automatically
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>Before saving data (validation, hashing password)</li>
          <li>After saving data (logging, notifications)</li>
          <li>Before delete/update operations</li>
          <li>When automating repeated logic</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Schema definition</li>
          <li>User authentication systems</li>
          <li>Logging and auditing</li>
          <li>Data processing workflows</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Automates repetitive tasks</li>
          <li>Improves code reusability</li>
          <li>Ensures consistency</li>
          <li>Keeps business logic clean</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Defined inside schema</li>
          <li>Triggered automatically</li>
          <li>Uses pre() and post() methods</li>
          <li>Runs based on operation type</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Pre Hook
schema.pre("save", function(next) {
  console.log("Before saving");
  next();
});

// Post Hook
schema.post("save", function(doc) {
  console.log("After saving", doc);
});`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">8. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String
});

// Pre hook (before save)
userSchema.pre("save", function(next) {
  console.log("Hashing password...");
  next();
});

// Post hook (after save)
userSchema.post("save", function(doc) {
  console.log("User saved:", doc.name);
});

const User = mongoose.model("User", userSchema);`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>pre(&quot;save&quot;) runs before saving document</li>
          <li>post(&quot;save&quot;) runs after saving document</li>
          <li>next() is required in pre hook</li>
          <li>doc contains saved document in post hook</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Automates logic</li>
          <li>Cleaner code structure</li>
          <li>Reusable logic</li>
          <li>Centralized control</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Can make debugging harder</li>
          <li>Hidden execution flow</li>
          <li>Performance overhead if overused</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Pre = before operation</li>
          <li>Post = after operation</li>
          <li>Used for automation and logic</li>
          <li>Defined in schema</li>
        </ul>
      </section>

    </div>
  );
}