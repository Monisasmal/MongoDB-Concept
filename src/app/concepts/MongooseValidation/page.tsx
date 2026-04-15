export default function MongooseValidation() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        How to Apply Validation in Mongoose
      </h1>

      {/* Definition */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Definition</h2>
        <p>
          Validation in Mongoose ensures that data stored in MongoDB follows
          specific rules defined in the schema. It helps maintain data integrity
          and prevents invalid data from being saved.
        </p>
      </section>

      {/* Simple Understanding */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Simple Understanding</h2>
        <p>
          👉 Validation = rules for data  
          <br />
          👉 Example: name is required, age must be a number  
          <br />
          👉 If rules fail → data is not saved
        </p>
      </section>

      {/* When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. When to Use</h2>
        <ul className="list-disc ml-6">
          <li>When saving user data</li>
          <li>When ensuring required fields</li>
          <li>When restricting invalid input</li>
          <li>When building secure APIs</li>
        </ul>
      </section>

      {/* Where */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Where it is Used</h2>
        <ul className="list-disc ml-6">
          <li>Schema definition</li>
          <li>Backend validation layer</li>
          <li>API request validation</li>
          <li>Database data integrity</li>
        </ul>
      </section>

      {/* Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Why We Use It</h2>
        <ul className="list-disc ml-6">
          <li>Prevents invalid data</li>
          <li>Improves data quality</li>
          <li>Reduces bugs</li>
          <li>Ensures consistent database structure</li>
        </ul>
      </section>

      {/* How */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. How It Works</h2>
        <ul className="list-disc ml-6">
          <li>Define rules inside schema</li>
          <li>Mongoose checks before saving</li>
          <li>If validation fails → error is thrown</li>
          <li>If passes → data is saved</li>
        </ul>
      </section>

      {/* Types */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">7. Types of Validation</h2>

        <ul className="list-disc ml-6 space-y-2">
          <li><strong>required</strong> → Field must be present</li>
          <li><strong>min / max</strong> → Number limits</li>
          <li><strong>minLength / maxLength</strong> → String length</li>
          <li><strong>enum</strong> → Allowed values</li>
          <li><strong>match</strong> → Regex validation</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">8. Basic Syntax</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  age: {
    type: Number,
    min: 18,
    max: 60
  },
  email: {
    type: String,
    required: true,
    match: /.+\\@.+\\..+/
  }
});`}
        </pre>
      </section>

      {/* Real Example */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">9. Real Example</h2>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`const User = mongoose.model("User", userSchema);

// Invalid data (will throw error)
const user = new User({
  name: "A",
  age: 10,
  email: "invalid"
});

user.save().catch(err => console.log(err.message));`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Explanation</h2>
        <ul className="list-disc ml-6">
          <li>name must be at least 3 characters</li>
          <li>age must be between 18 and 60</li>
          <li>email must match regex pattern</li>
          <li>If any rule fails → error occurs</li>
        </ul>
      </section>

      {/* Advantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Advantages</h2>
        <ul className="list-disc ml-6">
          <li>Ensures valid data</li>
          <li>Improves security</li>
          <li>Reduces bugs</li>
          <li>Automatic validation</li>
        </ul>
      </section>

      {/* Disadvantages */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">12. Disadvantages</h2>
        <ul className="list-disc ml-6">
          <li>Extra processing overhead</li>
          <li>Complex rules can be hard to manage</li>
        </ul>
      </section>

      {/* Interview Points */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Interview Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Validation is defined in schema</li>
          <li>Prevents invalid data</li>
          <li>Common rules: required, min, max, match</li>
          <li>Runs before saving data</li>
        </ul>
      </section>

    </div>
  );
}