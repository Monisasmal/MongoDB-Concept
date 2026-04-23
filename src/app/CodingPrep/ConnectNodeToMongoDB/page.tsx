export default function ConnectNodeToMongoDB() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Connect Node.js to MongoDB
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          How do you connect a Node.js application to MongoDB using Mongoose?
        </p>
      </section>

      {/* Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>mongoose is used to connect Node.js with MongoDB</li>
          <li>connect() method establishes database connection</li>
          <li>&quot;mongodb://127.0.0.1:27017&quot; is the local MongoDB URL</li>
          <li>&quot;mydatabase&quot; is the database name</li>
          <li>then() runs when connection is successful</li>
          <li>catch() handles connection errors</li>
        </ul>
      </section>

      {/* Output */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Output
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          When you run the server:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm mt-2">
{`MongoDB Connected`}
        </pre>

        <p className="text-sm text-gray-600 mt-2">
          👉 Database connection is successfully established
        </p>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Mongoose is used for MongoDB connection</li>
          <li>connect() method connects to database</li>
          <li>Uses MongoDB connection string (URI)</li>
          <li>Handles async connection using promise</li>
          <li>Always handle errors using catch()</li>
        </ul>
      </section>

    </div>
  );
}