export default function SearchAndFilterAPI() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Implement Search and Filtering API (Express + MongoDB)
      </h1>

      {/* Question */}
      <section className="mb-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Question
        </h2>
        <p className="text-sm sm:text-base text-gray-700">
          How do you implement search and filtering in an API using Express.js
          and MongoDB?
        </p>
      </section>

      {/* Answer */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Answer
        </h2>

        <pre className="bg-gray-900 text-white p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`// GET /users?search=man&role=developer

app.get("/users", async (req, res) => {
  const { search, role } = req.query;

  let filter = {};

  // Search by name
  if (search) {
    filter.name = {
      $regex: search,
      $options: "i"
    };
  }

  // Filter by role
  if (role) {
    filter.role = role;
  }

  const users = await User.find(filter);

  res.json(users);
});`}
        </pre>
      </section>

      {/* Explanation */}
      <section className="mb-6 bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Explanation
        </h2>

        <ul className="list-disc ml-5 text-sm sm:text-base text-gray-700 space-y-1">
          <li>req.query gets query parameters from URL</li>
          <li>search is used for searching user names</li>
          <li>$regex performs pattern matching</li>
          <li>$options: &quot;i&quot; makes search case-insensitive</li>
          <li>role filters users by role field</li>
          <li>User.find(filter) returns matching documents</li>
        </ul>
      </section>

      {/* Output */}
      <section className="mb-6 bg-green-50 border-l-4 border-green-400 rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Output
        </h2>

        <p className="text-sm sm:text-base text-gray-700">
          Example API Request:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm mt-2">
{`GET /users?search=man&role=developer`}
        </pre>

        <p className="text-sm text-gray-700 mt-3">
          Example Response:
        </p>

        <pre className="bg-gray-100 p-3 rounded-lg text-xs sm:text-sm mt-2">
{`[
  {
    "_id": "123",
    "name": "Manaswini",
    "role": "developer"
  }
]`}
        </pre>

        <p className="text-sm text-gray-600 mt-2">
          👉 Only matching users are returned
        </p>
      </section>

      {/* Interview Points */}
      <section className="bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Interview Points
        </h2>

        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2">
          <li>Search uses MongoDB regex</li>
          <li>$options: &quot;i&quot; enables case-insensitive search</li>
          <li>Filtering uses query parameters</li>
          <li>Dynamic filter object improves flexibility</li>
          <li>Commonly used with pagination and sorting</li>
        </ul>
      </section>

    </div>
  );
}