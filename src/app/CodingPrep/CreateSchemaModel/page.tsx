export default function CreateSchemaModel() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Create Schema and Model using Mongoose
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          How do you create a Schema and Model in Mongoose?
        </p>
      </section>

      {/* Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const mongoose = require("mongoose");

// Step 1: Create Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// Step 2: Create Model
const User = mongoose.model("User", userSchema);

module.exports = User;`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>Schema defines the structure of data</li>
          <li>Fields like name, age, email are defined in schema</li>
          <li>mongoose.Schema() is used to create schema</li>
          <li>Model is created using mongoose.model()</li>
          <li>&quot;User&quot; is the collection name (MongoDB creates users collection)</li>
          <li>Model is used to perform CRUD operations</li>
        </ul>
      </section>

      {/* Output */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Output
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          After running the code:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm mt-2">
{`✔ User model created
✔ MongoDB collection "users" will be created automatically`}
        </pre>

        <p className="text-sm text-gray-600 mt-2">
          👉 You can now use User model for database operations
        </p>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Schema defines structure of data</li>
          <li>Model interacts with database</li>
          <li>Model is created from schema</li>
          <li>Collection name is pluralized automatically</li>
          <li>Model is used for CRUD operations</li>
        </ul>
      </section>

    </div>
  );
}