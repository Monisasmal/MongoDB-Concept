export default function InsertDataMongoose() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Insert Data using Mongoose
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          How do you insert data into MongoDB using Mongoose?
        </p>
      </section>

      {/* Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const User = require("./models/User");

// Method 1: Using save()
const user = new User({
  name: "Manaswini",
  age: 23,
  email: "mana@example.com"
});

user.save()
  .then(() => console.log("User saved"))
  .catch(err => console.log(err));

// Method 2: Using create()
User.create({
  name: "Rahul",
  age: 25,
  email: "rahul@example.com"
})
.then(() => console.log("User created"))
.catch(err => console.log(err));`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>
        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>User is the Mongoose model</li>
          <li>new User() creates a document instance</li>
          <li>save() stores the document in database</li>
          <li>create() directly inserts data</li>
          <li>Both methods return promises</li>
          <li>catch() handles errors</li>
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
{`✔ User saved
✔ User created`}
        </pre>

        <p className="text-sm text-gray-600 mt-2">
          👉 Data is inserted into MongoDB collection
        </p>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Use save() or create() to insert data</li>
          <li>save() requires instance of model</li>
          <li>create() inserts directly</li>
          <li>Both return promises</li>
          <li>Always handle errors</li>
        </ul>
      </section>

    </div>
  );
}